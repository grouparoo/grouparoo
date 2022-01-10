import {
  PropertyOpsDictionary,
  buildPropertyOpsDictionary,
} from "../../src/modules/ruleOpsDictionary";

describe("PropertyOpsDictionary", () => {
  let dbDialect: string;

  beforeAll(() => {
    dbDialect = process.env.DB_DIALECT;
    process.env.DB_DIALECT = "postgres";
  });

  afterAll(() => {
    process.env.DB_DIALECT = dbDialect;
  });

  test("it is an object of property ops", () => {
    expect(Object.keys(PropertyOpsDictionary).sort()).toEqual([
      "_convenientRules",
      "_relativeMatchUnits",
      "boolean",
      "date",
      "email",
      "float",
      "integer",
      "phoneNumber",
      "string",
      "url",
    ]);
  });

  test("it includes PG ops", () => {
    const stringOps = PropertyOpsDictionary.string.map(({ op }) => op);
    expect(stringOps).toContain("iLike");
    expect(stringOps).toContain("notILike");
  });
});

describe("buildPropertyOpsDictionary", () => {
  test("it does not include PG ops if nothing is passed", () => {
    const ops = buildPropertyOpsDictionary();
    const stringOps = ops.string.map(({ op }) => op);
    expect(stringOps).not.toContain("iLike");
    expect(stringOps).not.toContain("notILike");
  });
});
