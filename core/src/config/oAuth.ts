const namespace = "oAuth";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}
export const DEFAULT = {
  [namespace]: () => {
    return {
      host: process.env.GROUPAROO_AUTH_URL || "https://auth.grouparoo.com",
    };
  },
};
