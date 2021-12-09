import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { recordProperty } from "../../src/lib/recordProperty";
import { api } from "actionhero";
import { GrouparooRecord, Property } from "@grouparoo/core";

// these used and set by test
let record: GrouparooRecord;

async function getPropertyValue(fn: string) {
  const propertyOptions = { customFunction: fn };
  const property = await Property.findOne();

  return recordProperty({
    connection: null,
    appOptions: null,
    record,
    propertyOptions,
    property,
    recordId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    sourceOptions: null,
    sourceMapping: null,
    propertyId: null,
    propertyFilters: null,
  });
}

describe("calculated-property/recordProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => helper.disableTestPluginImport());
  beforeAll(async () => await helper.factories.properties());
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  beforeAll(async () => {
    record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
      firstName: ["Mario"],
      lastName: ["Jones"],
      ltv: [390.42],
      lastLoginAt: ["2021-08-23 15:02:39.297-07"],
      isVIP: [true],
      purchases: [null],
    });
    expect(record.id).toBeTruthy();
  });

  test("it evaluates string properties as expected", async () => {
    const fn = `() => {
        return "hi {{{firstName}}}"
    }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual(`hi Mario`);
  });
  test("it evaluates float properties as expected", async () => {
    const fn = `() => {
        return {{{ltv}}} * 2
    }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual(780.84);
  });
  test("it evaluates null properties as an empty string", async () => {
    const fn = `() => {
        if ("{{{purchases}}}" === "") return true;
        return false;}`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual(true);
  });
  test("it evaluates boolean properties as expected", async () => {
    const fn = `() => {
        if({{{isVIP}}} === true) return true;
        return false;
    }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual(true);
  });

  test("it evaluates date strings as expected", async () => {
    const fn = `() => {
          const date = new Date("{{{lastLoginAt.iso}}}");
          return date.toISOString();
      }`;
    const value = await getPropertyValue(fn);
    expect(value[0]).toEqual("2021-08-23T22:02:39.297Z");
  });

  test("it throws if customFunction is empty", async () => {
    const fn = `() => {}`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: Calculated property's /`customFunction/` undefined"
    );
  });
  test("it throws if customFunction returns undefined", async () => {
    const fn = `() => { return undefined}`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: Calculated property's /`customFunction/` undefined"
    );
  });
  test("it throws if mustached property does not exist", async () => {
    const fn = `() => {
      return {{{fakeProperty}}}
    }`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: Calculated property's /`customFunction/` undefined"
    );
  });
  test("it throws if customFunction throws", async () => {
    const fn = `() => {
      throw Error("test error")
      return "hi"
    }`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: test error"
    );
  });
  test("it throws if customFunction is not valid javascript", async () => {
    const fn = `() => {
      not;valid/javascript > 4;
    }`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: ReferenceError: not is not defined"
    );
  });
  test("it throws if customFunction is not defined", async () => {
    const fn = ``;
    //vm gets confused by the empty string, hence the different error here
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: SyntaxError: Unexpected token ';'"
    );
  });
  test("it throws if customFunction contains an illegal string", async () => {
    const fn = `async () => { return new Promise((resolve) => resolve("value")); }`;
    await expect(getPropertyValue(fn)).rejects.toThrowError(
      "Could not calculate property: Error: cannot use async in a calculated property"
    );
  });
});
