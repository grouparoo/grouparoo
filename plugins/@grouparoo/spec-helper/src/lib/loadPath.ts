// for the core project, we want to use the TS files, not the JS
export const loadPath: "src" | "dist" =
  (process.env.GROUPAROO_SPEC_HELPER_LOAD_PATH as "src" | "dist") || "dist";
