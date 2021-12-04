const namespace = "telemetry";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}
export const DEFAULT = {
  [namespace]: () => {
    return {
      enabled:
        ["false", "FALSE", "0", "off"].includes(
          process.env.GROUPAROO_TELEMETRY_ENABLED
        ) || process.env.NODE_ENV === "test"
          ? false
          : true,
      host:
        process.env.GROUPAROO_TELEMETRY_URL ||
        "https://telemetry.grouparoo.com",
    };
  },
};
