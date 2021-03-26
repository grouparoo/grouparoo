import { AppOptionsMethod } from "@grouparoo/core";

export const appOptions: AppOptionsMethod = async () => {
  return {
    apiSecret: {
      type: "password",
    },
  };
};
