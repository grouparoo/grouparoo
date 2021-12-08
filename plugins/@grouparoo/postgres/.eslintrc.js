module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "object-shorthand": ["error", "always"],
  },
  ignorePatterns: ["/dist/", "*.js"],
};
