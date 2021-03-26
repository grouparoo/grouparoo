import { AppOptionsMethod } from "@grouparoo/core";

export const appOptions: AppOptionsMethod = async () => {
  return {
    password: {
      type: "password",
    },
    securityToken: {
      type: "password",
    },
  };
};
