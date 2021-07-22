import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Property, ProfileProperty, Profile } from "../../../src";

describe("tasks/profileProperties:sweep", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let emailProperty: Property;
  let mario: Profile;

  beforeAll(async () => {
    emailProperty = await Property.findOne({ where: { key: "email" } });
    mario = await helper.factories.profile();
    await mario.addOrUpdateProperties({
      firstName: ["Mario"],
      lastName: ["Mario"],
      email: ["mario@example.com"],
    });
  });

  test("a profile property with a missing profile", async () => {
    const profileProperty = await ProfileProperty.create({
      profileId: "missing",
      propertyId: emailProperty.id,
      rawValue: "person@example.com",
      position: 0,
    });

    await specHelper.runTask("profileProperties:sweep", {});

    await expect(profileProperty.reload()).rejects.toThrow(
      /does not exist anymore/
    );

    // other profiles' properties are OK
    const marioProperties = await mario.getProperties();
    expect(marioProperties["email"].values).toEqual(["mario@example.com"]);
  });

  test("a profile property with a missing property", async () => {
    const luigi: Profile = await helper.factories.profile();
    await luigi.addOrUpdateProperties({
      firstName: ["Luigi"],
      lastName: ["Mario"],
      email: ["luigi@example.com"],
    });

    const profileProperty = await ProfileProperty.create(
      {
        id: "rule_missing",
        profileId: luigi.id,
        propertyId: "missing",
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
    const luigiProperties = await luigi.getProperties();
    expect(luigiProperties["email"].values).toEqual(["luigi@example.com"]);
  });
});
