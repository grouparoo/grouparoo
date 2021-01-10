import { CLSTask } from "../../classes/tasks/clsTask";
import { Event } from "../../models/Event";

export class ProfileDestroyEvents extends CLSTask {
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

  async runWithinTransaction(params) {
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
