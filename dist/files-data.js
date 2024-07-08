module.exports.filesToCreate = [
  {
    appendToStart: "",
    appendToEnd: ".type.ts",
    data: "" +
      "// export interface IExample{\n" +
      "//\n" +
      "// }"
  },
  {
    appendToStart: "",
    appendToEnd: ".store.ts",
    data: "" +
      "import {defineStore} from 'pinia'\n" +
      "\n" +
      "const defaultCAMEL_NAMEState = () => ({\n" +
      "\n" +
      "})\n" +
      "\n" +
      "export const useCAMEL_NAMEStore = defineStore('LOWER_CASE_NAME', {\n" +
      "    state: defaultCAMEL_NAMEState\n"+
      "})\n"
  },
  {
    appendToStart: "",
    appendToEnd: ".service.ts",
    data: "" +
      "export const useCAMEL_NAMEService = () => {\n" +
      "\n" +
      "    return{}\n" +
      "}"
  },
  {
    appendToStart: "use",
    appendToEnd: ".ts",
    data: "" +
      "export const useCAMEL_NAME = () => {\n" +
      "\n" +
      "    return{}\n" +
      "}"
  },
]
