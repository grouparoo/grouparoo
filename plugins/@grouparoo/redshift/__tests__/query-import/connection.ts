import "@grouparoo/spec-helper";

import { getConnection } from "../../src/lib/query-import/connection";
const sourceFilters = getConnection().methods.sourceFilters;

describe("redshift/query-import/connection", () => {
  test("gets connection", async () => {
    const connection = getConnection();
    expect(connection.name).toEqual("redshift-query-import");
  });
});
