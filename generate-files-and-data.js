const {capFirst} = require("./cap-first-letter");
const fs = require("node:fs");
const {filesToCreate} = require("./files-data");

module.exports.generateFilesName = (name, list) => {
  let result = []
  list.forEach(item => {
    const tempData = item.data.replace("NAME", capFirst(name)).replace("LOWER_CASE_NAME", name)
    if (!item.appendToStart) {
      result.push({name: `${name}${item.appendToEnd}`, data: tempData})
    } else {
      const temp = capFirst(name)
      result.push({name: `${item.appendToStart}${temp}${item.appendToEnd}`, data: tempData})
    }
  })
  return result
}

module.exports.createFiles = (path, res) => {
  fs.mkdir(path, {}, (err) => {
    if (!err) {
      const listData = this.generateFilesName(res.name, filesToCreate)

      for (let i = 0; i < listData.length; i++) {
        fs.writeFile(`${path}/${listData[i].name}`, listData[i].data, () => {})
      }
    } else {
      console.log(err);
    }
  })
}
