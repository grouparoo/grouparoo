import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { helper } from "@grouparoo/spec-helper";
import { connect } from "../../src/lib/connect";
import { exportProfile } from "../../src/lib/export-contacts/exportProfile";

const veryLongTime = 5 * 60 * 1000;
const indexTime = 2 * 60 * 1000;

const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8662f9";

export function setup(appOptions, destinationOptions, newNock) {
  let client = null;
  const cleanUp = async function (suppressErrors) {
    const { body } = await client.contacts.list();
    const users = body.data;
    if (!users) {
      return null;
    }
    for (const user of users) {
      // deleting caused all kinds of issues
      await client.contacts.archive(user.id);
    }
  };

  const getUser = async function (id): Promise<any> {
    const { body } = await client.contacts.show(id);
    return body;
  };
  async function getTags(id): Promise<string[]> {
    const { body } = await client.contacts.tags(id);
    return body.data.map((tag) => tag.name).sort();
  }

  const findId = async function (extId): Promise<string> {
    const { body } = await client.contacts.search({
      field: "external_id",
      operator: "=",
      value: extId,
    });
    const users = body.data;
    if (!users || users.length === 0) {
      return null;
    }
    if (users.length > 1) {
      throw new Error(`more than one user! ${extId}`);
    }
    return users[0].id;
  };

  const findEmail = async function (emailAddress): Promise<string> {
    const { body } = await client.contacts.search({
      field: "email",
      operator: "=",
      value: emailAddress,
    });
    const users = body.data;
    if (!users || users.length === 0) {
      return null;
    }
    if (users.length > 1) {
      throw new Error(`more than one user! ${emailAddress}`);
    }
    return users[0].id;
  };

  async function indexContacts() {
    // search index takes a while to catch up after important change or add
    if (newNock) {
      await helper.sleep(indexTime);
    }
  }

  function getClient() {
    return client;
  }

  async function runExport({
    oldProfileProperties,
    newProfileProperties,
    oldGroups,
    newGroups,
    toDelete,
    syncOperations = DestinationSyncModeData.sync.operations,
  }) {
    return exportProfile({
      appId,
      appOptions,
      destinationOptions,
      connection: null,
      app: null,
      destination: null,
      destinationId: null,
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

  const idRegex =
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, veryLongTime);

  afterAll(async () => {
    await cleanUp(true);
  }, veryLongTime);

  beforeAll(() => {
    jest.setTimeout(veryLongTime);
  });

  return {
    cleanUp,
    getUser,
    findEmail,
    getTags,
    findId,
    indexContacts,
    getClient,
    runExport,
    idRegex,
  };
}
