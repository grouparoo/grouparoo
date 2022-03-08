const namespace = "telemetry";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}
export const DEFAULT = {
  [namespace]: () => {
    return {
      enabled: ["true", "TRUE", "1", "on"].includes(
        process.env.GROUPAROO_TELEMETRY_ENABLED
      )
        ? true
        : false,
      host:
        process.env.GROUPAROO_TELEMETRY_URL ||
        "https://telemetry.grouparoo.com",
    };
  },
};
