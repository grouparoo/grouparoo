import "@grouparoo/spec-helper";

import { getConnection } from "../../src/lib/table-import/connection";

describe("redshift/table-import/connection", () => {
  test("gets connection", async () => {
    const connection = getConnection();
    expect(connection.name).toEqual("redshift-import-table");
  });
});
