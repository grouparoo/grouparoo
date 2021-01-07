import { Event } from "../../models/Event";
import { App } from "../../models/App";
import { RetryableTask } from "../../classes/tasks/retryableTask";

export class EventAssociateProfile extends RetryableTask {
  constructor() {
    super();
    this.name = "event:associateProfile";
    this.description = "find or create the profile this event is about";
    this.frequency = 0;
    this.queue = "events";
    this.inputs = {
      eventGuid: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const { eventGuid } = params;
    const event = await Event.findByGuid(eventGuid);

    const app = await App.findOne({ where: { type: "events" } });
    // the app might not be in the ready state
    if (!app) {
      return;
    }

    const appOptions = await app.getOptions();
    await event.associate(appOptions.identifyingPropertyGuid);
  }
}
