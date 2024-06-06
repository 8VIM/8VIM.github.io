const $RefParser = require("@apidevtools/json-schema-ref-parser");
const fs = require("fs");
const path = require("path");
const { render } = require("./render");
const { build } = require("./schema");

async function resolve(base, filename) {
  const str = fs.readFileSync(filename, "utf8");

  return $RefParser.dereference(JSON.parse(str), {
    resolve: {
      file: {
        order: 1,
        canRead: true,
        read: function (file, cb, $ref) {
          let p = file.url;
          if (p[0] === "/") {
            p = `.${p}`;
          }

          cb(null, fs.readFileSync(path.resolve(base, p)));
        },
      },
    },
  });
}

async function run(schemaPaths, dir) {
  let paths = [];
  for (const schema of schemaPaths) {
    if (fs.lstatSync(schema).isDirectory()) {
      const files = fs.readdirSync(schema);
      for (const file of files) {
        paths.push(path.join(schema, file));
      }
    } else {
      paths.push(schema);
    }
  }
  let schemas = [];
  for (const schema of paths) {
    console.log(`Resolving ${schema}`);
    const d = await resolve(dir, schema);
    let file = d.title;
    if (!file) {
      file = path.basename(schema, path.extname(schema));
    }

    schemas.push(build(d, path.basename(schema, path.extname(schema))));
  }
  fs.writeFileSync(path.join(dir, "out", "README.md"), render(schemas), "utf8");
}

module.exports = { run };
