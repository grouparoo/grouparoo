import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Property, ProfileProperty, Profile } from "../../../src";

let actionhero;

describe("tasks/profileProperties:sweep", () => {
  let emailRule: Property;
  let mario: Profile;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    await helper.factories.properties();
    actionhero = env.actionhero;
  }, helper.setupTime);

  beforeAll(async () => {
    emailRule = await Property.findOne({ where: { key: "email" } });
    mario = await helper.factories.profile();
    await mario.addOrUpdateProperties({
      firstName: ["Mario"],
      lastName: ["Mario"],
      email: ["mario@example.com"],
    });
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("a profile property with a missing profile", async () => {
    const profileProperty = await ProfileProperty.create({
      profileGuid: "missing",
      propertyGuid: emailRule.guid,
      rawValue: "person@example.com",
      position: 0,
    });

    await specHelper.runTask("profileProperties:sweep", {});

    await expect(profileProperty.reload()).rejects.toThrow(
      /does not exist anymore/
    );

    // other profiles' properties are OK
    const marioProperties = await mario.properties();
    expect(marioProperties["email"].values).toEqual(["mario@example.com"]);
  });

  test("a profile property with a missing property", async () => {
    const luigi = await helper.factories.profile();
    await luigi.addOrUpdateProperties({
      firstName: ["Luigi"],
      lastName: ["Mario"],
      email: ["luigi@example.com"],
    });

    const profileProperty = await ProfileProperty.create(
      {
        guid: "rule_missing",
        profileGuid: luigi.guid,
        propertyGuid: "missing",
        rawValue: "green-hat",
        position: 0,
      },
      //@ts-ignore
      { hooks: false } // we need to skip validations
    );

    await specHelper.runTask("profileProperties:sweep", {});

    await expect(profileProperty.reload()).rejects.toThrow(
      /does not exist anymore/
    );

    // Luigi's other properties are OK
    const luigiProperties = await luigi.properties();
    expect(luigiProperties["email"].values).toEqual(["luigi@example.com"]);
  });
});
