import { RecordPropertyPluginMethod } from "@grouparoo/core";
import { recordProperties } from "./recordProperties";

export const recordProperty: RecordPropertyPluginMethod = async (args) => {
  const multiArgs = Object.assign({}, args, {
    records: [args.record],
    recordIds: [args.record.id],
    properties: [args.property],
    propertyIds: [args.property.id],
    propertyOptions: { [args.property.id]: args.propertyOptions },
    propertyFilters: { [args.property.id]: args.propertyFilters },
  });

  const profilePropertiesResponse = await recordProperties(multiArgs);
  return profilePropertiesResponse[args.record.id] &&
    profilePropertiesResponse[args.record.id][args.property.id]
    ? profilePropertiesResponse[args.record.id][args.property.id]
    : [undefined];
};
