require("@grouparoo/spec-helper/dist/lib/environment");

const path = require("path");
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-enterprise": { path: path.join(__dirname, "..") },
});

const { helper } = require("@grouparoo/spec-helper");
const createTestCafe = require("testcafe");
const { port } = require("./helpers");

const run = async () => {
  const testcafe = await createTestCafe("localhost", 1337, 1338);
  const runner = testcafe.createRunner();

  const serverProcess = await helper.startTestServer({ port, truncate: true });
  await helper.sleep(10000);

  try {
    await runner
      .src([__dirname + "/happyPath.test.js"])
      .browsers(["chrome"])
      .run();
  } finally {
    await testcafe.close();
  }

  await helper.stopTestServer(serverProcess);
};

run();
