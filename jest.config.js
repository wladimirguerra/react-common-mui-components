// noinspection JSValidateJSDoc
/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
  collectCoverageFrom: ["src/**/*.[tj]sx?"],
};
