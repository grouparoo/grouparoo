import { getRows } from "../../src/lib/query-import/getRows";

describe("getRows", () => {
  let loggedQuery = "";

  const commonArgs = {
    limit: 1000,
    offset: 0,
    scheduleOptions: {},
    connection: {
      asyncQuery: (query) => {
        loggedQuery = query;
        return [];
      },
    },
  };

  beforeEach(() => {
    loggedQuery = "";
  });

  it("will throw without a query", async () => {
    await expect(getRows(commonArgs)).rejects.toThrow(/query required/);
  });

  it("can get rows from a user provided query", async () => {
    const query = "SELECT 1";

    await getRows(Object.assign(commonArgs, { scheduleOptions: { query } }));

    expect(loggedQuery).toMatch(new RegExp(query));

    expect(loggedQuery).toMatch(/limit/i);
    expect(loggedQuery).toMatch(/offset/i);
  });

  it("will throw if the query provided has a limit or offset", async () => {
    const query = "SELECT 1 LIMIT 100 OFFSET 0";

    await expect(
      getRows(Object.assign(commonArgs, { scheduleOptions: { query } }))
    ).rejects.toThrow(/please remove/);
  });
});
