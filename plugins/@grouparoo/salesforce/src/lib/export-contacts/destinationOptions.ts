import { getDestinationOptions } from "../export/options";
import { DestinationOptionsMethod } from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  appId,
  appOptions,
  destinationOptions,
}) => {
  return getDestinationOptions({
    appId,
    appOptions,
    destinationOptions,
    fieldsOptions: [
      {
        fieldName: "primaryKey",
        fieldValue: "Contact",
        specialFields: ["Email"],
      },
      {
        fieldName: "accountKey",
        fieldValue: "Account",
        specialFields: ["AccountNumber", "Name"],
      },
    ],
  });
};
