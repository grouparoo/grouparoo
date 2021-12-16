import {
  DestinationOptionsMethodResponse,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { getSupportedSalesforceTypes } from "../export/mapping";
import { getObjectMatchNames } from "../export-objects/options";
import { SalesforceCacheData } from "../objects";

export interface fieldsOptions {
  fieldName: string;
  fieldValue: string;
  specialFields: string[];
}
interface SalesforceDestinationOptions {
  (argument: {
    appId: string;
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
    fieldsOptions: fieldsOptions[];
  }): Promise<DestinationOptionsMethodResponse>;
}
export const getDestinationOptions: SalesforceDestinationOptions = async ({
  appId,
  appOptions,
  destinationOptions,
  fieldsOptions,
}) => {
  const cacheData: SalesforceCacheData = { appId, appOptions };
  const out: DestinationOptionsMethodResponse = {};
  const conn = await connect(appOptions);
  for (const fieldsOption of fieldsOptions) {
    const options = await getOptions(
      conn,
      cacheData,
      destinationOptions,
      fieldsOption.fieldName,
      fieldsOption.fieldValue,
      fieldsOption.specialFields
    );
    Object.assign(out, options);
  }
  return out;
};

async function getOptions(
  conn: any,
  cacheData: SalesforceCacheData,
  destinationOptions: SimpleDestinationOptions,
  fieldName: string,
  fieldValue: string,
  specialFields: string[]
) {
  const out: DestinationOptionsMethodResponse = {
    [fieldName]: { type: "list", options: [] },
  };
  const supportedTypes = getSupportedSalesforceTypes();
  const refFields = await getObjectMatchNames(
    conn,
    cacheData,
    fieldValue,
    true,
    specialFields,
    supportedTypes
  );
  out[fieldName].options = refFields;
  if (!refFields.includes(destinationOptions[fieldName])) {
    destinationOptions[fieldName] = null;
  }
  return out;
}
