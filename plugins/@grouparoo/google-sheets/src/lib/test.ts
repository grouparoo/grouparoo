import { App, SimpleAppOptions } from "@grouparoo/core";
import { log } from "actionhero";
const { GoogleSpreadsheet } = require("google-spreadsheet");

const TEST_SHEET_ID = "abc"; // can be anything. not used for test

export async function test(app: App, options: SimpleAppOptions) {
  const client_email = options.client_email;
  const private_key = options.private_key.replace(/\\n/g, "\n");
  const doc = new GoogleSpreadsheet(TEST_SHEET_ID);
  await doc.useServiceAccountAuth({ client_email, private_key });
  return true;
}
