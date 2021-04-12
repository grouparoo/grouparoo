import { getFacebookModel, FacebookModel } from "../export/model";
import { SimpleDestinationOptions } from "@grouparoo/core";

export function destinationModel(
  destinationOptions: SimpleDestinationOptions
): FacebookModel {
  return getFacebookModel(destinationOptions, {
    audienceType: "LOOKALIKE",
  });
}
