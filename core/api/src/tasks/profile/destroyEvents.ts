import { Task } from "actionhero";
import { Event } from "../../models/Event";

export class ProfileDestroyEvents extends Task {
  constructor() {
    super();
    this.name = "profile:destroyEvents";
    this.description = "destroy all the events for a profile";
    this.frequency = 0;
    this.queue = "events";
    this.inputs = {
      guid: { required: true },
    };
  }

  async run(params) {
    const { guid } = params;
    const limit = 1000;
    let offset = 0;
    let events: Event[] = [];

    while (events.length > 0 || offset === 0) {
      events = await Event.findAll({
        where: { profileGuid: guid },
        limit,
        offset,
      });

      for (const i in events) {
        await events[i].destroy();
      }

      offset = offset + limit;
    }
  }
}
