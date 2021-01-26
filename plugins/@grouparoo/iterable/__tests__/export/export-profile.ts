import * as path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexContacts } from "../utils/shared";

let apiClient: any;
let user: any;
const migratedName = "migratedusername";
const migratedEmail = "migrateduser@mailinator.com";
const email = "caio.silveira@mailinator.com";
const name = "Caio";
const exampleDate = new Date(1597870204 * 1000);

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
// const newNock = false;
// require("./../fixtures/export-profile");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getUser(): Promise<any> {
  const userToReturn = await apiClient.users.get({ email });
  if ("user" in userToReturn) {
    return userToReturn.user;
  }
  return null;
}

async function deleteUsers(suppressErrors) {
  try {
    await apiClient.users.delete(email);
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function runExport({
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportProfile({
    appOptions,
    connection: null,
    app: null,
    appGuid: null,
    destination: null,
    destinationGuid: null,
    destinationOptions: null,
    export: {
      profile: null,
      profileGuid: null,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("iterable/exportProfile", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await deleteUsers(false);
    await indexContacts();
  }, helper.setupTime);

  afterAll(async () => {
    await deleteUsers(true);
    await indexContacts();
  }, helper.setupTime);

  test("can create profile on Iterable", async () => {
    user = await getUser();
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts();

    user = await getUser();
    expect(user).not.toBe(null);
    expect(user.email).toBe(email);
  });
});
