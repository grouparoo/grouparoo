import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import Mixpanel from "../../src/lib/client/mixpanel";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { indexProfiles } from "../utils/shared";

const appId = "fgQIQXZKhkKQMmj7TeZjCDWB9+ijp4aAUA3039==";

let client: Mixpanel;
let user: any;
const phoneNumber = "+5583999999999";
const newPhoneNumber = "+5583999999998";
const otherPhoneNumber = "+5583999999997";
const email = "caio.silveira@mailinator.com";
const alternativeEmail = "lucas.nogueira@mailinator.com";
const otherEmail = "sandro.arturo@mailinator.com";
const firstName = "Caio";
const lastName = "Silveira";
const alternativeName = "Evan";
const alternativeLastName = "Podolsky";
const otherName = "Lucas";
const newEmail = "carlos.solimoes@mailinator.com";
const newName = "Carlos";
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";

const ltv = 3039;
const hugeTime = helper.longTime * 6;

const brandNewEmail = "jake.jill@mailinator.com";
const brandNewName = "Jake";
const nonexistentEmail = "pilo.paz@mailinator.com";
const message =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor\n" +
  "in, accumsan non quam.";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function deleteUsers(suppressErrors) {
  try {
    for (const emailToDelete of [
      email,
      alternativeEmail,
      otherEmail,
      newEmail,
      brandNewEmail,
    ]) {
      await client.ingestion.profile.delete(emailToDelete);
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
  await indexProfiles(newNock);
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportProfile({
    appOptions,
    appId,
    connection: null,
    app: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
    syncOperations,
    export: {
      profile: null,
      profileId: null,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("mixpanel/exportProfile", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, hugeTime);

  afterAll(async () => {
    await cleanUp(true);
  }, hugeTime);

  test(
    "cannot create a profile if sync mode does not allow it",
    async () => {
      user = await client.query.profile.getByDistinctId(email);
      expect(user).toBe(null);

      await expect(
        runExport({
          syncOperations: { create: false, update: true, delete: true },
          oldProfileProperties: {},
          newProfileProperties: { $distinct_id: email, $first_name: firstName },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
        })
      ).rejects.toThrow(/sync mode does not allow creating/);
    },
    hugeTime
  );

  test(
    "can create profile",
    async () => {
      user = await client.query.profile.getByDistinctId(email);
      expect(user).toBe(null);

      await runExport({
        oldProfileProperties: {},
        newProfileProperties: { $distinct_id: email, $first_name: firstName },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);

      user = await client.query.profile.getByDistinctId(email);
      expect(user).not.toBe(null);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["$first_name"]).toBe(firstName);
    },
    hugeTime
  );

  test(
    "can add profile properties",
    async () => {
      await runExport({
        oldProfileProperties: { $distinct_id: email, $first_name: firstName },
        newProfileProperties: {
          $distinct_id: email,
          $first_name: firstName,
          $last_name: lastName,
          $phone: phoneNumber,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);
      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["$first_name"]).toBe(firstName);
      expect(user["$properties"]["$last_name"]).toBe(lastName);
      expect(user["$properties"]["$phone"]).toBe(phoneNumber);
    },
    hugeTime
  );

  test(
    "cannot update existing profile if sync mode does not allow it",
    async () => {
      await expect(
        runExport({
          syncOperations: { create: true, update: false, delete: true },
          oldProfileProperties: {
            $distinct_id: email,
            $first_name: firstName,
            $last_name: lastName,
            $phone: phoneNumber,
          },
          newProfileProperties: {
            $distinct_id: email,
            $first_name: alternativeName,
            $last_name: alternativeLastName,
            $phone: newPhoneNumber,
          },
          oldGroups: [],
          newGroups: [],
          toDelete: false,
        })
      ).rejects.toThrow(/sync mode does not allow updating/);

      // no change
      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["$first_name"]).toBe(firstName);
      expect(user["$properties"]["$last_name"]).toBe(lastName);
      expect(user["$properties"]["$phone"]).toBe(phoneNumber);
    },
    hugeTime
  );

  test(
    "can change profile properties",
    async () => {
      // Phone must be valid.
      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
          $first_name: firstName,
          $last_name: lastName,
          $phone: phoneNumber,
        },
        newProfileProperties: {
          $distinct_id: email,
          $first_name: alternativeName,
          $last_name: alternativeLastName,
          $phone: newPhoneNumber,
          message, //custom string
          ltv, //custom number
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);

      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["$first_name"]).toBe(alternativeName);
      expect(user["$properties"]["$last_name"]).toBe(alternativeLastName);
      expect(user["$properties"]["$phone"]).toBe(newPhoneNumber);
      expect(user["$properties"]["message"]).toBe(message);
      expect(user["$properties"]["ltv"]).toBe(ltv);
    },
    hugeTime
  );

  test(
    "can clear profile properties",
    async () => {
      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
          $first_name: alternativeName,
          $last_name: alternativeLastName,
          $phone: newPhoneNumber,
          message,
          ltv,
        },
        newProfileProperties: {
          $distinct_id: email,
          $phone: newPhoneNumber,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);

      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["$first_name"]).toBeNull();
      expect(user["$properties"]["$last_name"]).toBeNull();
      expect(user["$properties"]["$phone"]).toBe(newPhoneNumber); //not deleted
      expect(user["$properties"]["message"]).toBeNull();
      expect(user["$properties"]["ltv"]).toBeNull();
    },
    hugeTime
  );

  test(
    "can add profile to a group that doesn't exist yet",
    async () => {
      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [],
        newGroups: [listOne, listTwo],
        toDelete: false,
      });
      await indexProfiles(newNock);

      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["groups"].length).toBe(2);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne, listTwo])
      );
    },
    hugeTime
  );

  test(
    "can remove a profile from a group",
    async () => {
      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [listOne, listTwo],
        newGroups: [listOne],
        toDelete: false,
      });
      await indexProfiles(newNock);

      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["groups"].length).toBe(1);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne])
      );
    },
    hugeTime
  );

  test(
    "it does not change already subscribed groups",
    async () => {
      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [],
        newGroups: [listTwo, listThree],
        toDelete: false,
      });
      await indexProfiles(newNock);
      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["groups"].length).toBe(3);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne, listTwo, listThree])
      );
    },
    hugeTime
  );

  test(
    "it tries to add non added group",
    async () => {
      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [listFour],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);
      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["groups"].length).toBe(3);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne, listTwo, listThree]) //there is no listFour
      );
    },
    hugeTime
  );

  test(
    "Change email when only old exists (ENRICH mode)",
    async () => {
      await expect(
        runExport({
          syncOperations: DestinationSyncModeData.enrich.operations,
          oldProfileProperties: {
            $distinct_id: email,
          },
          newProfileProperties: {
            $distinct_id: alternativeEmail,
          },
          oldGroups: [listOne, listTwo, listThree],
          newGroups: [listOne, listTwo, listThree],
          toDelete: false,
        })
      ).rejects.toThrow(/sync mode does not allow creating/);

      const user = await client.query.profile.getByDistinctId(email);
      expect(user["$distinct_id"]).toBe(email);
      expect(user["$properties"]["groups"].length).toBe(3);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne, listTwo, listThree]) //there is no listFour
      );

      const newUser = await client.query.profile.getByDistinctId(
        alternativeEmail
      );
      expect(newUser).toBe(null);
    },
    hugeTime
  );

  test(
    "Change email when only old exists (ADDITIVE mode)",
    async () => {
      await runExport({
        syncOperations: DestinationSyncModeData.additive.operations,
        oldProfileProperties: {
          $distinct_id: email,
        },
        newProfileProperties: {
          $distinct_id: alternativeEmail,
        },
        oldGroups: [listOne, listTwo, listThree],
        newGroups: [listOne, listTwo, listThree],
        toDelete: false,
      });
      await indexProfiles(newNock);
      const oldUser = await client.query.profile.getByDistinctId(email);
      expect(oldUser).not.toBe(null);
      expect(oldUser["$distinct_id"]).toBe(email);
      expect(oldUser["$properties"]["groups"].length).toBe(0);

      const newUser = await client.query.profile.getByDistinctId(
        alternativeEmail
      );
      expect(newUser).not.toBe(null);
      expect(newUser["$distinct_id"]).toBe(alternativeEmail);
      expect(newUser["$properties"]["groups"].length).toBe(3);
      expect(newUser["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne, listTwo, listThree]) //there is no listFour
      );
    },
    hugeTime
  );

  test(
    "Change email when both exist (ADDITIVE mode)",
    async () => {
      await runExport({
        syncOperations: DestinationSyncModeData.additive.operations,
        oldProfileProperties: {
          $distinct_id: alternativeEmail,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [listOne, listTwo, listThree],
        newGroups: [listOne, listTwo, listThree],
        toDelete: false,
      });
      await indexProfiles(newNock);

      // old user still there
      const oldUser = await client.query.profile.getByDistinctId(
        alternativeEmail
      );
      expect(oldUser).not.toBe(null);
      expect(oldUser["$distinct_id"]).toBe(alternativeEmail);
      expect(oldUser["$properties"]["groups"].length).toBe(0);
      expect(oldUser["$properties"]["groups"]).toEqual([]); // but has been removed from lists

      // update new user
      const newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser).not.toBeNull();
      expect(newUser["$distinct_id"]).toBe(email);
      expect(newUser["$properties"]["groups"].length).toBe(3);
    },
    hugeTime
  );

  test(
    "Change email when both exist (SYNC mode)",
    async () => {
      await runExport({
        syncOperations: DestinationSyncModeData.sync.operations,
        oldProfileProperties: {
          $distinct_id: alternativeEmail,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [listOne, listTwo, listThree],
        newGroups: [listOne, listTwo, listThree],
        toDelete: false,
      });
      await indexProfiles(newNock);

      // old user is deleted
      const oldUser = await client.query.profile.getByDistinctId(
        alternativeEmail
      );
      expect(oldUser).toBeNull();

      // new user created
      const newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser).not.toBe(null);
      expect(newUser["$distinct_id"]).toBe(email);
      expect(newUser["$properties"]["groups"].length).toBe(3);
    },
    hugeTime
  );

  test(
    "Change email when only new exists",
    async () => {
      let oldUser = await client.query.profile.getByDistinctId(
        alternativeEmail
      );
      expect(oldUser).toBeNull();

      let newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser).not.toBeNull();

      await runExport({
        oldProfileProperties: {
          $distinct_id: alternativeEmail,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [listOne, listTwo, listThree],
        newGroups: [listOne],
        toDelete: false,
      });
      await indexProfiles(newNock);
      oldUser = await client.query.profile.getByDistinctId(alternativeEmail); //nothing changed
      expect(oldUser).toBe(null);

      newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser).not.toBe(null);
      expect(newUser["$distinct_id"]).toBe(email);
      expect(newUser["$properties"]["groups"].length).toBe(1);
      expect(newUser["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne])
      );
    },
    hugeTime
  );

  test(
    "it can change the distinct id along other properties",
    async () => {
      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
        },
        newProfileProperties: {
          $distinct_id: otherEmail,
          $first_name: otherName,
          $phone: otherPhoneNumber,
        },
        oldGroups: [],
        newGroups: [listOne],
        toDelete: false,
      });
      await indexProfiles(newNock);

      const user = await client.query.profile.getByDistinctId(otherEmail);
      expect(user["$distinct_id"]).toBe(otherEmail);
      expect(user["$properties"]["$first_name"]).toBe(otherName);
      expect(user["$properties"]["$phone"]).toBe(otherPhoneNumber);
      expect(user["$properties"]["groups"].length).toBe(1);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne])
      );

      const oldUser = await client.query.profile.getByDistinctId(email);
      expect(oldUser).toBe(null);
    },
    hugeTime
  );

  test(
    "cannot delete a profile if sync mode does not allow it",
    async () => {
      await expect(
        runExport({
          syncOperations: { create: true, update: true, delete: false },
          oldProfileProperties: {
            $distinct_id: otherEmail,
          },
          newProfileProperties: {
            $distinct_id: otherEmail,
          },
          oldGroups: [listOne],
          newGroups: [listOne],
          toDelete: true,
        })
      ).rejects.toThrow(/sync mode does not allow removing/);

      // no changes to the profile
      const user = await client.query.profile.getByDistinctId(otherEmail);
      expect(user["$distinct_id"]).toBe(otherEmail);
      expect(user["$properties"]["$first_name"]).toBe(otherName);
      expect(user["$properties"]["$phone"]).toBe(otherPhoneNumber);
      expect(user["$properties"]["groups"].length).toBe(1);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listOne])
      );
    },
    hugeTime
  );

  test(
    "can delete a profile",
    async () => {
      await runExport({
        oldProfileProperties: {
          $distinct_id: otherEmail,
        },
        newProfileProperties: {
          $distinct_id: otherEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      });
      await indexProfiles(newNock);
      const user = await client.query.profile.getByDistinctId(otherEmail);
      expect(user).toBe(null);
    },
    hugeTime
  );

  test(
    "can try to delete a profile that does not exist.",
    async () => {
      let user = await client.query.profile.getByDistinctId(otherEmail);
      expect(user).toBe(null);

      await runExport({
        oldProfileProperties: {
          $distinct_id: otherEmail,
        },
        newProfileProperties: {
          $distinct_id: otherEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      });
      await indexProfiles(newNock);
      user = await client.query.profile.getByDistinctId(otherEmail);
      expect(user).toBe(null);
    },
    hugeTime
  );

  test(
    "can add two profiles back",
    async () => {
      let user1 = await client.query.profile.getByDistinctId(email);
      expect(user1).toBe(null);

      let user2 = await client.query.profile.getByDistinctId(otherEmail);
      expect(user2).toBe(null);

      await runExport({
        oldProfileProperties: {},
        newProfileProperties: { $distinct_id: email },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });

      await runExport({
        oldProfileProperties: {},
        newProfileProperties: { $distinct_id: otherEmail },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);

      user1 = await client.query.profile.getByDistinctId(email);
      expect(user1).not.toBeNull();
      expect(user1["$distinct_id"]).toBe(email);

      user2 = await client.query.profile.getByDistinctId(otherEmail);
      expect(user2).not.toBeNull();
      expect(user2["$distinct_id"]).toBe(otherEmail);
    },
    hugeTime
  );

  test(
    "Change email and { toDelete: true } when both exist",
    async () => {
      let oldUser = await client.query.profile.getByDistinctId(otherEmail);
      expect(oldUser).not.toBeNull();
      expect(oldUser["$distinct_id"]).toBe(otherEmail);

      let newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser).not.toBeNull();
      expect(newUser["$distinct_id"]).toBe(email);

      await runExport({
        oldProfileProperties: {
          $distinct_id: otherEmail,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      });
      await indexProfiles(newNock);
      oldUser = await client.query.profile.getByDistinctId(otherEmail);
      expect(oldUser).toBe(null);

      newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser).not.toBe(null);
      expect(newUser["$distinct_id"]).toBe(email);
    },
    hugeTime
  );

  test(
    "Change email and { toDelete: true } when only old exists",
    async () => {
      let oldUser = await client.query.profile.getByDistinctId(email);
      expect(oldUser["$distinct_id"]).toBe(email);

      let newUser = await client.query.profile.getByDistinctId(otherEmail);
      expect(newUser).toBe(null);

      await runExport({
        oldProfileProperties: {
          $distinct_id: email,
        },
        newProfileProperties: {
          $distinct_id: otherEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      });
      await indexProfiles(newNock);
      oldUser = await client.query.profile.getByDistinctId(email);
      expect(oldUser).toBeNull();

      newUser = await client.query.profile.getByDistinctId(otherEmail);
      expect(newUser).toBeNull();
    },
    hugeTime
  );

  test(
    "can add a profile back",
    async () => {
      user = await client.query.profile.getByDistinctId(email);
      expect(user).toBe(null);

      await runExport({
        oldProfileProperties: {},
        newProfileProperties: { $distinct_id: email },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);

      user = await client.query.profile.getByDistinctId(email);
      expect(user).not.toBe(null);
      expect(user["$distinct_id"]).toBe(email);
    },
    hugeTime
  );

  test(
    "Change email and { toDelete: true } when only new exists",
    async () => {
      let oldUser = await client.query.profile.getByDistinctId(otherEmail);
      expect(oldUser).toBeNull();

      let newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser["$distinct_id"]).toBe(email);

      await runExport({
        oldProfileProperties: {
          $distinct_id: otherEmail,
        },
        newProfileProperties: {
          $distinct_id: email,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      });
      await indexProfiles(newNock);
      oldUser = await client.query.profile.getByDistinctId(otherEmail);
      expect(oldUser).toBeNull();

      newUser = await client.query.profile.getByDistinctId(email);
      expect(newUser).toBeNull();
    },
    hugeTime
  );

  test(
    "can add a user and add this user to a group at the same time.",
    async () => {
      let user = await client.query.profile.getByDistinctId(newEmail);
      expect(user).toBe(null);
      await runExport({
        oldProfileProperties: {},
        newProfileProperties: {
          $distinct_id: newEmail,
          $first_name: newName,
        },
        oldGroups: [],
        newGroups: [listFour],
        toDelete: false,
      });
      await indexProfiles(newNock);
      user = await client.query.profile.getByDistinctId(newEmail);
      expect(user["$distinct_id"]).toBe(newEmail);
      expect(user["$properties"]["$first_name"]).toBe(newName);
      expect(user["$properties"]["groups"].length).toBe(1);
      expect(user["$properties"]["groups"]).toEqual(
        expect.arrayContaining([listFour])
      );
    },
    hugeTime
  );

  test(
    "can add a user passing a nonexistent distinct id on the oldProfileProperties",
    async () => {
      let brandNewUser = await client.query.profile.getByDistinctId(
        brandNewEmail
      );
      expect(brandNewUser).toBe(null);
      const nonexistentUser = await client.query.profile.getByDistinctId(
        nonexistentEmail
      );
      expect(nonexistentUser).toBe(null);

      await runExport({
        oldProfileProperties: { $distinct_id: nonexistentEmail },
        newProfileProperties: {
          $distinct_id: brandNewEmail,
          $first_name: brandNewName,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      });
      await indexProfiles(newNock);
      brandNewUser = await client.query.profile.getByDistinctId(brandNewEmail);
      expect(brandNewUser).not.toBe(null);
      expect(brandNewUser["$distinct_id"]).toBe(brandNewEmail);
      expect(brandNewUser["$properties"]["$first_name"]).toBe(brandNewName);
    },
    hugeTime
  );
});
