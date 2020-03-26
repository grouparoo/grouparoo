import { Task, log } from "actionhero";
import { Log } from "../models/Log";
import { Import } from "../models/Import";
import { Export } from "../models/Export";

export class Sweeper extends Task {
  constructor() {
    super();
    this.name = "sweeper";
    this.description = "clear old database entries";
    this.frequency = 1000 * 60 * 30; // every half hour
    this.queue = "default";
  }

  log(model: string, count: number, days: number) {
    if (count === 0) {
      return;
    }

    log(
      `[ sweeper ]: deleted ${count} ${model} entries older than ${days} days`
    );
  }

  async run() {
    const limit = 1000;
    let count = 0;
    let response: { count: number; days: number };

    // --- LOGS ---
    response = await Log.sweep();
    this.log("log", response.count, response.days);

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
  }
}
