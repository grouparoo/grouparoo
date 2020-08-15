// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

import path from "path";

import { exportProfile, findUser } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { DeletedUsers } from "../../src/lib/delete_users";
import { exception } from "console";

let client: any;
let userId = null;
const external_id = "testuser123";
const email = "brian@bleonard.com";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
//const newNock = false;
//require("./../fixtures/export-profile");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getUser(): Promise<any> {
  const response = await client.users.show(userId);
  console.log("getUser", response);
  return response;
}

async function findId(): Promise<any> {
  const user = await findUser(client, { external_id, email }, {});
  if (!user) {
    return null;
  }
  return user.id;
}

async function reallyDeleteUser(id) {
  await client.users.delete(id);
  // await client.deleted_users.delete(id);
}
async function deleteTestUsers() {
  const mails = [email, "newone@bleonard.com"];
  for (const mail of mails) {
    const user = await findUser(client, { email: mail }, {});
    if (user) {
      console.log("deleting", mail);
      await reallyDeleteUser(user.id);
    }
  }
}

describe("zendesk/exportProfile", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    client["deleted_users"] = new DeletedUsers(client.users.options);

    const id = await findId();
    if (id) {
      await reallyDeleteUser(id);
    }
    //await deleteTestUsers();
  }, 1000 * 30);

  afterAll(async () => {
    // await deleteTestUsers();
  }, 1000 * 30);

  test("can create profile on Zendesk", async () => {
    userId = await findId();
    expect(userId).toBe(null);

    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {},
      newProfileProperties: { email, external_id },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    userId = await findId();
    expect(userId).toBeTruthy();
    const user = await getUser();
    expect(user.email).toBe(email);
    expect(user.external_id).toBe(external_id);
  });

  test("can add user variables", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: { email, external_id },
      newProfileProperties: {
        email,
        external_id,
        name: "Brian",
        alias: "BL",
        text_field: "testing here",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.name).toBe("Brian");
    expect(user.alias).toBe("BL");
    expect(user.user_fields.text_field).toBe("testing here");
    expect(user.user_fields.checkbox_field).toBe(false); // default
  });

  test("can change user variables", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {
        email,
        external_id,
        name: "Brian",
        alias: "BL",
        text_field: "testing here",
      },
      newProfileProperties: {
        email,
        external_id,
        name: "Evan",
        alias: "BL",
        text_field: "testing here change",
        checkbox_field: true,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.name).toBe("Evan");
    expect(user.alias).toBe("BL");
    expect(user.user_fields.text_field).toBe("testing here change");
    expect(user.user_fields.checkbox_field).toBe(true);
  });

  test("can clear user variables", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {
        email,
        external_id,
        name: "Evan",
        alias: "BL",
        text_field: "testing here change",
        checkbox_field: true,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.id).toBe(userId);
    expect(user.name).toBe(email); // needs to be set to something
    expect(user.alias).toBe(""); // TODO: unclear why this isn't null
    expect(user.user_fields.text_field).toBe(null);
    expect(user.user_fields.checkbox_field).toBe(false); // back to default
  });

  test("can add tags", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: [],
      newGroups: ["Test Group X", "another"],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual(["another", "test_group_x"]);
  });

  test("can remove tags", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: ["Test Group X", "another"],
      newGroups: ["Test Group X"],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual(["test_group_x"]);
  });

  test("it does not change zendesk-created tags", async () => {
    await client.users.update(userId, {
      user: {
        tags: ["test_group_x", "outside_grouparoo"],
      },
    });
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: ["Test Group X"],
      newGroups: ["Test Group X", "New_one"],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual([
      "new_one",
      "outside_grouparoo",
      "test_group_x",
    ]);
  });

  test("it does not change zendesk-created tags when groups are removed", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email,
        external_id,
      },
      oldGroups: ["Test Group X", "New_one"],
      newGroups: [],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.tags.sort()).toEqual(["outside_grouparoo"]);
  });

  test("it can change the email address", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {
        email,
        external_id,
      },
      newProfileProperties: {
        email: "NewOne@bleonard.com",
        external_id,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const user = await getUser();
    expect(user.email).toBe("newone@bleonard.com");
    expect(user.tags.sort()).toEqual(["outside_grouparoo"]);
  });

  test("it can add a user back with the old email address", async () => {
    await exportProfile({
      connection: client,
      appOptions,
      oldProfileProperties: {},
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      app: null,
      profile: null,
      destination: null,
      destinationOptions: null,
    });

    const newUser = await findUser(client, { email }, {});
    const user = await getUser();
    expect(newUser.id).toBeTruthy();
    expect(newUser.id).not.toEqual(userId);
    expect(newUser.email).toBe(email);
    expect(user.email).toBe("newone@bleonard.com"); // still the same
  });

  // test("can delete a user", async () => {
  //   await exportProfile({
  //     connection: client,
  //     appOptions,
  //     oldProfileProperties: { email: email, first_name: "Brian" },
  //     newProfileProperties: { email: email, first_name: "Brian" },
  //     oldGroups: ["Test Group 2", "Test Group 1"],
  //     newGroups: [],
  //     toDelete: true,
  //     app: null,
  //     profile: null,
  //     destination: null,
  //     destinationOptions: null,
  //   });

  //   expect(await findSid()).toBeNull();

  //   let message = "";
  //   try {
  //     await getUser();
  //   } catch (err) {
  //     message = err.errormsg;
  //   }
  //   expect(message).toMatch("User not found with sid");
  // });
});

// TODO
// all of the above when not using external id
