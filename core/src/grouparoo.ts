import { getCoreVersion, getNodeVersion } from "./utils/pluginDetails";

async function main() {
  const { Process, log, api } = await import("actionhero");

  log(
    `Starting Grouparoo v${getCoreVersion()} on node.js ${getNodeVersion()}`,
    "notice"
  );

  const app = api?.process || new Process();

  app.registerProcessSignals((exitCode) => {
    log(
      `All Grouparoo tasks complete - exiting with code ${exitCode}`,
      "notice"
    );
    process.nextTick(() => process.exit(exitCode));
  });

  await app.start();
}

main();
