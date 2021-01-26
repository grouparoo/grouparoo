// disable the UI for these tests
process.env.NEXT_DISABLED = "true";

// tell `@grouparoo/spec-helper` to load everything from `src` in core, so we can test without re-compiling
process.env.GROUPAROO_SPEC_HELPER_LOAD_PATH = "src";

// you need a server token
if (!process.env.SERVER_TOKEN) {
  process.env.SERVER_TOKEN = "test-server-token";
}
