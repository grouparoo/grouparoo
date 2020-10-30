import { Task, task, log } from "actionhero";
import { Event } from "../../models/Event";

export class EventsAssociateProfiles extends Task {
  constructor() {
    super();
    this.name = "event:associateProfiles";
    this.description =
      "ensure that events are associated to profiles, even if they were created outside of the Grouparoo API";
    this.frequency = 60 * 1000;
    this.queue = "events";
    this.inputs = {};
  }

  async run() {
    const limit = 1000;
    let offset = 0;
    let events: Event[] = [];

    while (events.length > 0 || offset === 0) {
      events = await Event.findAll({
        attributes: ["guid"],
        where: { profileGuid: null },
        limit,
        offset,
        order: [["createdAt", "asc"]],
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
