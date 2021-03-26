import { AppOptionsMethod } from "@grouparoo/core";

export const appOptions: AppOptionsMethod = async () => {
  return {
    private_key: {
      type: "password",
    },
  };
};
