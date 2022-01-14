import { GrouparooCLI } from "../modules/cli";
import * as REPL from "repl";
import { api, env, CLI } from "actionhero";

export class Console extends CLI {
  name = "console";
  description =
    "Start an interactive REPL session with the api object in-scope";

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run() {
    GrouparooCLI.logCLI(this.name);

    await new Promise((resolve, reject) => {
      const repl = REPL.start({
        prompt: "[🦘::" + env + " ] >> ",
        input: process.stdin,
        output: process.stdout,
        useGlobal: false,
      });

      repl.context.api = api;

      repl.on("exit", resolve);
      repl.on("error", reject);
    });

    return true;
  }
}
