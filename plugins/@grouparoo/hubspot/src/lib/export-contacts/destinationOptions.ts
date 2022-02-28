import { DestinationOptionsMethod } from "@grouparoo/core";
import { OptionsHandler } from "../export/options";

export const destinationOptions: DestinationOptionsMethod = async ({
  appId,
  appOptions,
}) => {
  const optionHandler = new OptionsHandler({ appId, appOptions });
  return await optionHandler.getContactDestinationOptions();
};
