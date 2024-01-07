const {program} = require("commander");

module.exports.clientApp = async () => {
  const config = {}

  await program.version("1.3.7").command("create <name>").description("Creates a composition API in a directory. (based on our structure)")
    .action(name => {
      if (!!name){
        config.name = name
      }
    })
  program.parse(process.argv);

  return config
}
