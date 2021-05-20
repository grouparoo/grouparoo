import { Task } from "actionhero";

export class ScheduleUpdateSchedules extends Task {
  constructor() {
    super();
    this.name = "schedule:updateSchedules";
    this.description = "deprecated";
    this.frequency = 0;
    this.queue = "schedules";
  }

  // deprecated
  async run() {}
}
