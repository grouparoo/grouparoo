import { RecordPropertyPluginMethod } from "@grouparoo/core";
import { profileProperties } from "./recordProperties";

export const profileProperty: RecordPropertyPluginMethod = async (args) => {
  const multiArgs = Object.assign({}, args, {
    records: [args.record],
    recordIds: [args.record.id],
    properties: [args.property],
    propertyIds: [args.property.id],
    propertyOptions: { [args.property.id]: args.propertyOptions },
    propertyFilters: { [args.property.id]: args.propertyFilters },
  });

  const profilePropertiesResponse = await profileProperties(multiArgs);
  return profilePropertiesResponse[args.record.id] &&
    profilePropertiesResponse[args.record.id][args.property.id]
    ? profilePropertiesResponse[args.record.id][args.property.id]
    : [undefined];
};
