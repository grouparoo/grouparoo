/**
 * @jest-environment node
 */

process.env.GROUPAROO_ENV_CONFIG_FILE = `${__dirname}/.env`;

const { helper } = require("@grouparoo/spec-helper");

describe("snapshot", () => {
  helper.grouparooTestServer({ truncate: true });

  test("Thomas Murrhardt is imported properly", async () => {
    const { snapshot } = await helper.getProfile({
      email: "tmurrhardtet@demo.com",
      user_id: 534,
    });

    expect(snapshot.properties.email.values[0]).toBe("tmurrhardtet@demo.com");
  });
});
