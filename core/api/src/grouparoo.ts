import { getCoreVersion, getNodeVersion } from "./utils/pluginDetails";

async function main() {
  const { Process, log } = await import("actionhero");

  log(
    `Starting Grouparoo ${getCoreVersion()} on node.js ${getNodeVersion()}`,
    "notice"
  );

  const app = new Process();

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
