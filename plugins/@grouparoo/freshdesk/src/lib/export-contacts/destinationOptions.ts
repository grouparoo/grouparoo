import { DestinationOptionsMethod } from "@grouparoo/core";

export const contactDestinationOptions: DestinationOptionsMethod =
  async ({}) => {
    return {
      primaryKey: {
        type: "list",
        options: ["Email", "Mobile", "Phone", "External ID"],
      },
    };
  };
