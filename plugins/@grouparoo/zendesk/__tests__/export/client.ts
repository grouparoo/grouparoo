import { helper } from "@grouparoo/spec-helper";

import {
  destinationMappingOptions,
  getUserFields,
} from "../../src/lib/export/destinationMappingOptions";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

describe("zendesk/client", () => {
  test("can fetch user fields", async () => {
    const client = await connect(appOptions);
    const findBy = { query: "email:ubernardinin@company.com" };
    const response = await client.users.search(findBy);
    console.log(response);
  });
});
