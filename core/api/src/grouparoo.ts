import { getCoreVersion, getNodeVersion } from "./utils/pluginDetails";

// have a shorter shutdown timeout
if (!process.env.ACTIONHERO_SHUTDOWN_TIMEOUT) {
  process.env.ACTIONHERO_SHUTDOWN_TIMEOUT = (15 * 1000).toString();
}

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
