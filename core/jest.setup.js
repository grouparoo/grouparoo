require("@grouparoo/spec-helper/dist/lib/environment");

// tell `@grouparoo/spec-helper` to load everything from `src` in core, so we can test without re-compiling
process.env.GROUPAROO_SPEC_HELPER_LOAD_PATH = "src";
