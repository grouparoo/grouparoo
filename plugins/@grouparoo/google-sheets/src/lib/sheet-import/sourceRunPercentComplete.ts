import { SourceRunPercentCompleteMethod } from "@grouparoo/core";

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod =
  async ({}) => {
    // there is no method to get the number of rows in the sheet...
    return 0;
  };
