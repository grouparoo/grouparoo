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
    "no-useless-computed-key": "error",
    "prefer-arrow-callback": "error",
    "prefer-object-spread": "error",
  },
  ignorePatterns: ["/dist/", "*.js"],
};
