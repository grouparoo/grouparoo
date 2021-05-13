import { SourceRunPercentCompleteMethod } from "@grouparoo/core";

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod =
  async ({}) => {
    // there is no method to get the number of Mailchimp list members
    return 0;
  };
