import { log } from "actionhero";
import { Run } from "../../models/Run";
import { Import } from "../../models/Import";
import { Export } from "../../models/Export";
import { ExportProcessor } from "../../models/ExportProcessor";
import { Log } from "../../models/Log";
import { Session } from "../../models/Session";
import { OAuthRequest } from "../../models/OAuthRequest";
import { CLSTask } from "../../classes/tasks/clsTask";

export class Sweeper extends CLSTask {
  constructor() {
    super();
    this.name = "sweeper";
    this.description = "clear old database entries";
    this.frequency = 1000 * 60 * 30; // every half hour
    this.queue = "system";
  }

  log(model: string, count: number, days: number) {
    if (count === 0) {
      return;
    }

    log(
      `[ sweeper ]: deleted ${count} ${model} entries older than ${days} days`
    );
  }

  async runWithinTransaction() {
    const limit = 1000;
    let count = 0;
    let response: { count: number; days: number };

    // --- RUNS ---
    count = -1;
    while (count !== 0) {
      response = await Run.sweep(limit);
      count = response.count;
      this.log("run", response.count, response.days);
    }

    // --- IMPORTS ---
    count = -1;
    while (count !== 0) {
      response = await Import.sweep(limit);
      count = response.count;
      this.log("import", response.count, response.days);
    }

    // --- EXPORTS ---
    count = -1;
    while (count !== 0) {
      response = await Export.sweep(limit);
      count = response.count;
      this.log("export", response.count, response.days);
    }

    // --- EXPORT PROCESSORS ---
    count = -1;
    while (count !== 0) {
      count = await ExportProcessor.sweep(limit);
    }

    // --- LOGS ---
    response = await Log.sweep();
    this.log("log", response.count, response.days);

    // --- SESSIONS ---
    response = await Session.sweep();
    this.log("session", response.count, response.days);

    // OAUTH REQUESTS
    response = await OAuthRequest.sweep(limit);
    this.log("oAuthRequest", response.count, response.days);
  }
}
