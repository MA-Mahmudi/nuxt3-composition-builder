const {capFirst, kebabToCamel} = require("./cap-first-letter");
const fs = require("node:fs");
const {filesToCreate} = require("./files-data");

module.exports.generateFilesName = (name, list) => {
  let result = []
  list.forEach(item => {
    const camelName = kebabToCamel(name)
    const tempData = item.data.replaceAll("CAMEL_NAME", capFirst(camelName)).replaceAll("LOWER_CASE_NAME", camelName)
    if (!item.appendToStart) {
      result.push({name: `${camelName}${item.appendToEnd}`, data: tempData})
    } else {
      const temp = capFirst(camelName)
      result.push({name: `${item.appendToStart}${temp}${item.appendToEnd}`, data: tempData})
    }
  })
  return result
}

module.exports.createFiles = (path, res) => {
  fs.mkdir(path, {}, (err) => {
    if (!err) {
      console.log(res.name);
      const listData = this.generateFilesName(res.name, filesToCreate)

      for (let i = 0; i < listData.length; i++) {
        fs.writeFile(`${path}/${listData[i].name}`, listData[i].data, () => {})
      }
    } else {
      console.log(err);
    }
  })
}
