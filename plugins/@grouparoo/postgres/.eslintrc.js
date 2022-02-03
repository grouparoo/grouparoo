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
    "@typescript-eslint/array-type": "error",
    "object-shorthand": ["error", "always"],
    "no-useless-computed-key": "error",
    "prefer-arrow-callback": "error",
    "prefer-object-spread": "error",
    "no-useless-computed-key": "error",
    "@typescript-eslint/no-explicit-any": "off", // Remove this in some Ivory Tower future.
    "@typescript-eslint/ban-ts-comment": "off", // Remove this in some Ivory Tower future.
  },
  ignorePatterns: ["/dist/", "*.js"],
};
