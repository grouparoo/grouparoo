import "@grouparoo/spec-helper";

import { getConnection } from "../../src/lib/table-import/connection";
const sourceFilters = getConnection().methods.sourceFilters;

describe("redshift/table-import/connection", () => {
  test("gets connection", async () => {
    const connection = getConnection();
    expect(connection.name).toEqual("redshift-table-import");
  });
});
