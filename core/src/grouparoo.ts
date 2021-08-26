import { getCoreVersion, getNodeVersion } from "./modules/pluginDetails";

export async function main() {
  const { Process, log, api } = await import("actionhero");

  log(
    `Starting Grouparoo v${getCoreVersion()} on node.js ${getNodeVersion()}`,
    "notice"
  );

  const app = api?.process || new Process();

  app.registerProcessSignals((exitCode) => {
    process.nextTick(() => process.exit(exitCode));
  });

  await app.start();
}

function isEntryPoint() {
  return require.main === module;
}

if (isEntryPoint()) main();
