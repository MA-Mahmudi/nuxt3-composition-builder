module.exports.filesToCreate = [
  {
    appendToStart: "",
    appendToEnd: ".interface.ts",
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
      "const defaultState = () => ({\n" +
      "\n" +
      "})\n" +
      "\n" +
      "export const useNAMEStore = defineStore('LOWER_CASE_NAME', {\n" +
      "    state: defaultState,\n" +
      "    getters: {\n" +
      "    },\n" +
      "    actions: {\n" +
      "    },\n" +
      "})\n"
  },
  {
    appendToStart: "use",
    appendToEnd: ".service.ts",
    data: "" +
      "export const useNAMEService = () => {\n" +
      "\n" +
      "    return{\n" +
      "    }\n" +
      "}"
  },
  {
    appendToStart: "use",
    appendToEnd: ".ts",
    data: "" +
      "export const useNAME = () => {\n" +
      "\n" +
      "    return{\n" +
      "    }\n" +
      "}"
  },
]
