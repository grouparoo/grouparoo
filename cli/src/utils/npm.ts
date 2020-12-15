import npm from "npm";

export namespace NPM {
  export function install(
    logger,
    pkg?: string,
    exact = true,
    npm_config_loglevel = "error"
  ) {
    const installList = [];
    if (pkg) installList.push(pkg);

    console.log("");
    console.log("--- Installing ---");
    console.log("");

    return new Promise((resolve, reject) => {
      process.env.npm_config_loglevel = npm_config_loglevel;
      const npmOptions = { loaded: false };
      if (exact) npmOptions["save-exact"] = true;

      npm.load(npmOptions, async function (error: Error) {
        if (error) return fail(logger, error);

        npm.commands.install(installList, async function (error: Error, data) {
          if (error) return fail(logger, error);

          console.log("");
          console.log("");
          console.log(" --- Installation Complete --- ");
          console.log("");

          return resolve(data);
        });

        npm.on("log", function (message) {
          console.log(message);
        });
      });
    });
  }

  function fail(logger, error: Error) {
    logger.fail(`NPM error: ${error}`);
    process.exit(1);
  }
}
