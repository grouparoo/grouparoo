import "@grouparoo/spec-helper";

import { getConnection } from "../../src/lib/query-import/connection";

describe("redshift/query-import/connection", () => {
  test("gets connection", async () => {
    const connection = getConnection();
    expect(connection.name).toEqual("redshift-import-query");
  });
});
