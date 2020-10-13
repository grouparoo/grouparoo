import { Initializer, api } from "actionhero";
import { Notifier } from "../classes/notifier";
import path from "path";
import glob from "glob";

declare module "actionhero" {
  export interface Api {
    notifiers: {
      notifiers: Notifier[];
    };
  }
}

export class Notifiers extends Initializer {
  constructor() {
    super();
    this.name = "notifiers";
  }

  async initialize() {
    api.notifiers = { notifiers: [] };

    const globPath = path.join(__dirname, "..", "notifiers", "+(*.ts|*.js)");
    const notifierFiles = glob.sync(globPath);
    for (const i in notifierFiles) {
      let collection = await import(notifierFiles[i]);
      if (typeof collection === "function") {
        collection = [collection];
      }
      for (const j in collection) {
        const Klass = collection[j];
        api.notifiers.notifiers.push(new Klass());
      }
    }
  }
}
