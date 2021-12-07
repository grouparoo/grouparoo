import {
  DestinationOptionsMethodResponse,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { getSupportedSalesforceTypes } from "../export/mapping";
import { getObjectMatchNames } from "../export-objects/options";
import { SalesforceCacheData } from "../objects";

interface SalesforceDestinationOptions {
  (argument: {
    appId: string;
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<DestinationOptionsMethodResponse>;
}
export const getDestinationOptions: SalesforceDestinationOptions = async ({
  appId,
  appOptions,
  destinationOptions,
}) => {
  const cacheData: SalesforceCacheData = { appId, appOptions };
  const out: DestinationOptionsMethodResponse = {};

  const conn = await connect(appOptions);
  Object.assign(
    out,
    await getPrimaryKeyOptions(conn, cacheData, destinationOptions)
  );
  return out;
};

async function getPrimaryKeyOptions(
  conn: any,
  cacheData: SalesforceCacheData,
  destinationOptions: SimpleDestinationOptions
) {
  const specialFields = ["AccountNumber", "Name"];
  const account = "Account";
  const out: DestinationOptionsMethodResponse = {
    primaryKey: { type: "list", options: [] },
  };

  // look up its fields
  const supportedTypes = getSupportedSalesforceTypes();
  const fields = await getObjectMatchNames(
    conn,
    cacheData,
    account,
    true,
    specialFields,
    supportedTypes
  );
  out.primaryKey.options = fields;
  if (!fields.includes(destinationOptions.primaryKey)) {
    destinationOptions.primaryKey = null;
  }
  return out;
}
