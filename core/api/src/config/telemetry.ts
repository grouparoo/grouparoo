export const DEFAULT = {
  telemetry: () => {
    return {
      enabled: ["false", "FALSE", "0", "off"].includes(
        process.env.GROUPAROO_TELEMETRY_ENABLED
      )
        ? false
        : true,
      url:
        process.env.GROUPAROO_TELEMETRY_URL ||
        "https://telemetry.grouparoo.com/api/v1/telemetry",
    };
  },
};
