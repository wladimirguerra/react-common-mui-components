// noinspection JSValidateJSDoc
/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transformPatterns: ["node_modules/(?!react-common-mui-components)"],
};
