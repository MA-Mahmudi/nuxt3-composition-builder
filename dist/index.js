#!/usr/bin/env node

const fs = require("node:fs")
const exe = require("./exe-process")
const {clientApp} = require("./client-app");
const {createFiles} = require("./generate-files-and-data");

clientApp().then(async (res) => {
  let basePath = ""
  basePath = await new Promise((resolve, reject) => {
    exe.result("git rev-parse --show-toplevel", (err, response) => {
      if (!err) {
        basePath = `${response.replace("\n", "")}/composable`
        resolve(basePath)
      } else {
        reject(err)
      }
    })
  })

  fs.readdir(basePath, {}, err => {
    const path = `${basePath}/${res.name}`

    if (!err) {
      createFiles(path, res)
    } else {
      fs.mkdir(basePath, {}, (err) => {
        if (!err) {
          createFiles(path, res)
        } else {
          console.log(err);
        }
      })
    }
  })
})
