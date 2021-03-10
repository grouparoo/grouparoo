import "@grouparoo/spec-helper";

import { getConfig } from "../utils/data";
import { getColumns } from "../../src/lib/table-import/getColumns";
import { connect } from "../../src/lib/connect";

// these used and set by test
const { appId, appOptions, tableName } = getConfig();

async function getMongoColumns() {
  const connection = await connect({ appOptions, app: null, appId: null });
  return await getColumns({
    appId,
    connection,
    appOptions,
    tableName,
  });
}

describe("mongodb/column/getColumnsTest", () => {
  test("gets the list of columns", async () => {
    const columns = await getMongoColumns();
    expect(columns.length).toBe(5);
  });
});
