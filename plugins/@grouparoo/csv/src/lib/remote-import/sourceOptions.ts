import {
  SourceOptionsMethod,
  SourceOptionsMethodResponse,
} from "@grouparoo/core";

export const sourceOptions: SourceOptionsMethod = async () => {
  const response: SourceOptionsMethodResponse = {
    url: { type: "string", options: [], descriptions: [] },
    fileAgeHours: {
      type: "list",
      options: ["1", "6", "12", "24"],
      descriptions: ["1 hour", "6 hours", "12 hours", "24 hours"],
    },
  };

  return response;
};
