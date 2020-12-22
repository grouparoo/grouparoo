import { getFacebookModel, FacebookModel } from "../export/model";
import { SimpleDestinationOptions } from "@grouparoo/core";
import { GroupSyncMode } from "@grouparoo/app-templates/dist/destination/group";

export function destinationModel(
  destinationOptions: SimpleDestinationOptions
): FacebookModel {
  return getFacebookModel(destinationOptions, {
    audienceType: "LOOKALIKE",
    syncMode: GroupSyncMode.Additive,
  });
}
