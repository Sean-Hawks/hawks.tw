
module.exports = {
  extends: ["eslint:recommended"],
  env: { es2022: true, browser: true, node: true },
  overrides: [
    { files: ["**/*.astro"], parser: "astro-eslint-parser", rules: {} }
  ]
};
