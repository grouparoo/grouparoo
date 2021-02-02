/**
 * @jest-environment node
 */

// Should we load configuration from a .env file? Use to set DATABASE_URL, etc
// Set before requiring @grouparoo/spec-helper
// Otherwise, set DATABASE_URL, etc in jest.config.js or in CI
process.env.GROUPAROO_ENV_CONFIG_FILE = `${__dirname}/../.env`;

const { helper, relaxedSnapshot } = require("@grouparoo/spec-helper");

describe("snapshot", () => {
  // utility to start and stop the server within the test suite
  helper.grouparooTestServer();

  test("a profile snapshot can be tested", async () => {
    const { profile, snapshot } = await helper.getProfile({
      email: "person@example.com",
    });

    // You can do snapshot testing
    // `relaxedSnapshot` lets you skip time and UUID generated properties, but ensure everything else matches exactly
    expect(snapshot).toMatchSnapshot(relaxedSnapshot(snapshot));

    // Or you can test the properties of the snapshot directly
    expect(snapshot.properties.userId.values).toEqual([100]);
    expect(snapshot.groups.length).toBe(1);
    expect(snapshot.groups[0].name).toBe("People with Email Addresses");
    expect(profile.state).toBe("ready");
  });
});

/**
 * Note:
 *
 * This file is included as an example.  It will not run without installing `pnpm install jest @grouparoo/spec-helper@next`
 * You will also need to test with a Profile that really exists in your configured dataset
 */
