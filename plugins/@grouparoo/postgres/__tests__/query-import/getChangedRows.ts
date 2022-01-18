import { getChangedRows } from "../../src/lib/query-import/getChangedRows";

describe("getChangedRows", () => {
  let loggedQuery = "";

  const commonArgs: any = {
    limit: 1000,
    offset: 0,
    scheduleOptions: {},
    connection: {
      query: (query: string): unknown[] => {
        loggedQuery = query;
        return [];
      },
    },
  };

  beforeEach(() => {
    loggedQuery = "";
  });

  it("will throw without a query", async () => {
    await expect(getChangedRows(commonArgs)).rejects.toThrow(/query required/);
  });

  it("can get rows from a user provided query", async () => {
    const query = "SELECT 1";

    await getChangedRows(
      Object.assign(commonArgs, { scheduleOptions: { query } })
    );

    expect(loggedQuery).toMatch(new RegExp(query));

    expect(loggedQuery).toMatch(/limit/i);
    expect(loggedQuery).toMatch(/offset/i);
  });

  it("will throw if the query provided has a limit or offset", async () => {
    const query = "SELECT 1 LIMIT 100 OFFSET 0";

    await expect(
      getChangedRows(Object.assign(commonArgs, { scheduleOptions: { query } }))
    ).rejects.toThrow(/please remove/);
  });
});
