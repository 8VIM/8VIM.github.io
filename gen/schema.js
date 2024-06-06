const slug = require("slug");
const re = /\^\(\?i\)\((.+)\)\$/gm;

function build(data, schema) {
  if (!data.title) data.title = schema;
  const prefix = slug(data.title);
  return {
    title: data.title,
    description: data.description,
    objects: buildObjects(data, prefix),
  };
}

function buildObjects(object, prefix) {
  const objects = { acc: {}, objects: [] };
  buildObject(objects, object, ["__root"], [object.title]);
  const grouped = Object.groupBy(
    objects.objects,
    ({ key }) => key.split(".")[0]
  );
  const res = [];

  for (const e of grouped.__root) {
    e.key = e.key.replace("__root", prefix);
    res.push(e);
  }
  delete grouped.__root;
  for (const k in grouped) {
    for (const e of grouped[k]) {
      e.key = `${prefix}.${e.key}`;
      res.push(e);
    }
  }
  return res;
}

function buildObject(objects, object, key, title) {
  const k = key.join(".");
  if (objects.acc[k]) {
    return;
  }
  const clone = structuredClone(object);
  clone.level = key.length;
  clone.title = title.join(".");
  clone.key = k;
  if (clone.patternProperties) {
    expandPatternProperties(clone);
  }

  objects.acc[k] = true;
  objects.objects.push(clone);

  if (clone.required) {
    for (const key of clone.required) {
      clone.properties[key].isRequired = true;
    }
  }

  if (clone.then && clone.then.required) {
    for (const key of clone.then.required) {
      clone.properties[key].isRequired = { if: clone.if };
    }
  }
  if (clone.properties) {
    for (const propKey in clone.properties) {
      const prop = clone.properties[propKey];
      let type = prop.type;
      if (typeof type === "string") {
        type = [type];
      }

      let newKey = [...key, propKey];
      let newTitle = [...title, propKey];
      if (prop["$id"]) {
        newKey = [prop["$id"]];
        newTitle = [prop["$id"]];
      }
      buildObject(objects, prop, newKey, newTitle);
    }
  }
  if (clone.items) {
    let newKey = [...key, "[]"];
    let newTitle = [...title, "[]"];
    if (clone.items["$id"]) {
      newKey = [clone.items["$id"]];
      newTitle = [clone.items["$id"]];
    }
    buildObject(objects, clone.items, newKey, newTitle);
  }
}

function expandPatternProperties(object) {
  if (!object.properties) {
    object.properties = {};
  }
  for (const key in object.patternProperties) {
    const match = [...key.matchAll(re)][0];
    for (const prop of match[1].split("|")) {
      object.properties[prop] = object.patternProperties[key];
    }
  }
}

module.exports = { build };
