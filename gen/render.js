const fs = require("fs");
const path = require("path");
const handleBars = require("handlebars");
const partialsDir = path.join(__dirname, "templates", "partials");
const re = /\^\(\?i\)\((.+)\)\$/gm;

function loadPartials() {
  const files = fs.readdirSync(partialsDir);
  for (const file of files) {
    handleBars.registerPartial(
      `${path.basename(file, ".hbs")}Partial`,
      fs.readFileSync(path.join(partialsDir, file), "utf8")
    );
  }
}

function getTypes(obj, parentKey, name) {
  let type = obj.type;
  if (typeof type === "string") {
    type = [type];
  }
  const isObject = type.indexOf("object") > -1;
  const isArray = type.indexOf("array") > -1;

  if (!isObject && !isArray)
    return type.map((type) => {
      return { type };
    });

  let key = parentKey;
  if (name) key += `.${name}`;
  let id = obj["$id"];
  if (!id && obj.items && obj.items["$id"]) {
    id = obj.items["$id"];
  }

  if (id) {
    key = `${parentKey.split(".")[0]}.${id}`;
  }

  return type.map((type) => {
    if ((!name && type === "object") || (type !== "object" && type !== "array"))
      return { type };
    let newKey = key;

    if (type === "array" && !id) {
      newKey += ".[]";
    }
    return { type, link: newKey };
  });
}

function render(schemas) {
  const source = fs.readFileSync(
    path.join(__dirname, "templates", "markdown.hbs"),
    "utf8"
  );

  loadPartials();

  handleBars.registerHelper("isRequired", function (req) {
    if (typeof req === "object") {
      if (req.if) {
        return "Conditional";
      } else {
        return "No";
      }
    }
    if (!req) {
      return "No";
    }
    return "&#10003; Yes";
  });

  handleBars.registerHelper("getType", function (obj, parentKey, name) {
    return getTypes(obj, parentKey, name);
  });

  handleBars.registerHelper("constraints", function (type, obj) {
    const constraints = [];
    if (obj.const) {
      constraints.push({ shouldBe: obj.const });
    }
    switch (type) {
      case "integer":
      case "number":
        if (obj.minimum !== undefined && obj.maximum != undefined) {
          constraints.push({ eq: obj.minimum });
        } else {
          if (obj.minimum !== undefined) {
            constraints.push({ gte: obj.minimum });
          }
          if (obj.exclusiveMinimum !== undefined) {
            constraints.push({ gt: obj.exclusiveMinimum });
          }
          if (obj.maximum !== undefined) {
            constraints.push({ lte: obj.maximum });
          }
          if (obj.exclusiveMaximum !== undefined) {
            constraints.push({ lt: obj.exclusiveMaximum });
          }
          if (obj.multipleOf !== undefined) {
            constraints.push({ multipleOf: obj.multipleOf });
          }
        }
        break;
      case "string":
        if (obj.pattern) {
          const match = [...obj.pattern.matchAll(re)];
          if (match.length > 0) {
            constraints.push({ enum: match[0][1].split("|") });
          } else {
            constraints.push({ pattern: obj.pattern });
          }
        }
        break;
      default:
        break;
    }
    if (obj.minItems !== undefined && obj.maxItems !== undefined) {
      constraints.push({ items: obj.minItems });
    } else {
      if (obj.minItems !== undefined) {
        constraints.push({ minItems: obj.minItems });
      }
      if (obj.maxItems !== undefined) {
        constraints.push({ maxItems: obj.maxItems });
      }
    }

    if (obj.enum) {
      constraints.push({ enum: obj.enum });
    }

    return constraints;
  });
  const template = handleBars.compile(source);

  return template({ schemas });
}

module.exports = { render };
