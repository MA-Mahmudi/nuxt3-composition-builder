const {input, select} = require("@inquirer/prompts")
const fs = require("node:fs")
const exe = require("./exeProcess")
const {capFirst} = require("./cap-first-letter")

const storeChoices = [
  {
    name: "Pinia store",
    value: "pinia"
  },
  {
    name: "VueX store",
    value: "vuex"
  },
]
const filesToCreate = [
  {
    appendToStart: "",
    appendToEnd: ".interface.ts",
  },
  {
    appendToStart: "",
    appendToEnd: ".store.ts",
  },
  {
    appendToStart: "use",
    appendToEnd: ".service.ts",
  },
  {
    appendToStart: "use",
    appendToEnd: ".ts",
  },
]

const generateFilesName = (name) => {
  let result = []
  filesToCreate.forEach(item => {
    if (!item.appendToStart) {
      result.push(`${name}${item.appendToEnd}`)
    } else {
      const temp = capFirst(name)
      result.push(`${item.appendToStart}${temp}${item.appendToEnd}`)
    }
  })
  return result
}
const questions = async () => {
  const config = {}

  config.name = await input({message: "What's the name of your composition hook?"})
  config.store = await select({message: "What state manager do you use?", choices: storeChoices})

  return config
}

questions().then(async (res) => {
  let basePath = ""
  basePath = await new Promise((resolve, reject) => {
    exe.result("sh t1.sh", (err, response) => {
      if (!err) {
        basePath = `${response.replace("\n", "")}/composable/`
        resolve(basePath)
      } else {
        reject(err)
      }
    })
  })

  fs.readdir(basePath, {}, err => {
    const path = `${basePath}/${res.name}`

    if (!err) {
      fs.mkdir(path, {}, (err) => {
        if (!err) {
          for (let i = 0; i < generateFilesName(res.name).length; i++) {
            fs.writeFile(`${path}/${generateFilesName(res.name)[i]}`, "add", () => {})
          }
        } else {
          console.log(err);
        }
      })
    } else {
      fs.mkdir(basePath, {}, (err) => {
        if (!err) {
          fs.mkdir(path, {}, (err) => {
            if (!err) {
              for (let i = 0; i < generateFilesName(res.name).length; i++) {
                fs.writeFile(`${path}/${generateFilesName(res.name)[i]}`, "add", () => {})
              }
            } else {
              console.log(err);
            }
          })
        } else {
          console.log(err);
        }
      })
    }
  })
})

