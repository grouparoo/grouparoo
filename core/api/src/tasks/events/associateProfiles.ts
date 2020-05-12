import { api, Task, task, log } from "actionhero";
import { EventPrototype } from "../../classes/events";

export class EventsAssociateProfiles extends Task {
  constructor() {
    super();
    this.name = "event:associateProfiles";
    this.description =
      "ensure that events are associated to profiles, even if they were created outside of our API";
    this.frequency = 60 * 1000;
    this.queue = "events";
    this.inputs = {};
  }

  async run(params) {
    const limit = 1000;
    let offset = 0;
    let events: EventPrototype[] = [];

    while (events.length > 0 || offset === 0) {
      events = await api.events.model.findAll({
        associated: false,
        limit,
        offset,
      });

      for (const i in events) {
        await task.enqueue("event:associateProfile", {
          eventGuid: events[i].guid,
        });
      }

      if (events.length > 0) {
        log(`enqueued ${events.length} events for association`);
      }

      offset = offset + limit;
    }
  }
}
