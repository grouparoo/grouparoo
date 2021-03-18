import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";

import { beforeData, afterData, getConfig } from "../utils/data";
import { plugin, Profile, Property } from "@grouparoo/core";

import { getConnection } from "../../src/lib/query-import/connection";
const profileProperty = getConnection().methods.profileProperty;

// these used and set by test
const { appOptions, usersTableName } = getConfig();
let profile: Profile;

let client;

async function getPropertyValue(query: string) {
  const propertyOptions = { query };
  const property = await Property.findOne();

  return profileProperty({
    connection: client,
    appOptions,
    profile,
    propertyOptions,
    property,
    profileId: null,
    source: null,
    sourceId: null,
    app: null,
    appId: null,
    sourceOptions: {
      table: usersTableName,
    },
    sourceMapping: null,
    propertyId: null,
    propertyFilters: null,
  });
}

describe("mongo/query/profileProperty", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  beforeAll(async () => {
    ({ client } = await beforeData());
  });

  beforeAll(async () => {
    profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [1],
      email: ["ejervois0@example.com"],
    });
    expect(profile.id).toBeTruthy();
  });

  afterAll(async () => await afterData());

  test("can run a integer query to get a string", async () => {
    const query = [
      {
        $match: {
          id: "{{userId}}",
        },
      },
      {
        $project: {
          first_name: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query).replace(
      /"{{userId}}"/,
      "{{userId}}"
    );
    const value = await getPropertyValue(queryString);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a integer query to get a float", async () => {
    const query = [
      {
        $match: {
          id: "{{userId}}",
        },
      },
      {
        $project: {
          ltv: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query).replace(
      /"{{userId}}"/,
      "{{userId}}"
    );
    const value = await getPropertyValue(queryString);
    expect(value).toEqual([259.12]);
  });

  test("can run a integer query to get a boolean", async () => {
    const query = [
      {
        $match: {
          id: "{{userId}}",
        },
      },
      {
        $project: {
          ios_app: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query).replace(
      /"{{userId}}"/,
      "{{userId}}"
    );
    const value = await getPropertyValue(queryString);
    expect(value).toEqual([true]);
  });

  test("can run a string query to get a string", async () => {
    const query = [
      {
        $match: {
          email: "{{email}}",
        },
      },
      {
        $project: {
          first_name: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query);
    const value = await getPropertyValue(queryString);
    expect(value).toEqual(["Erie"]);
  });

  test("can run a string query to get a float", async () => {
    const query = [
      {
        $match: {
          email: "{{email}}",
        },
      },
      {
        $project: {
          ltv: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query);
    const value = await getPropertyValue(queryString);
    expect(value).toEqual([259.12]);
  });

  test("can run a string query to get a boolean", async () => {
    const query = [
      {
        $match: {
          email: "{{email}}",
        },
      },
      {
        $project: {
          ios_app: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query);
    const value = await getPropertyValue(queryString);
    expect(value).toEqual([true]);
  });

  test("returns undefined when data is not available", async () => {
    const query = [
      {
        $match: {
          email: "{{badName}}",
        },
      },
      {
        $project: {
          ios_app: 1,
          _id: 0,
        },
      },
    ];
    const queryString = JSON.stringify(query);
    const value = await getPropertyValue(queryString);
    expect(value).toEqual(undefined);
  });
});
