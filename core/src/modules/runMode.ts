export type GrouparooRunMode =
  | "cli:run"
  | "cli:start"
  | "cli:config"
  | "cli:apply"
  | "cli:validate";

export const getGrouparooRunMode = () =>
  process.env.GROUPAROO_RUN_MODE as GrouparooRunMode;
