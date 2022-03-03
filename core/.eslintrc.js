module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  globals: {
    fetch: true, // For isomorphic-fetch
  },
  ignorePatterns: ["/dist/", "__tests__"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "no-inner-declarations": "off",
    "no-unused-vars": "off",
    "no-useless-computed-key": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-object-spread": "error",
  },
};
