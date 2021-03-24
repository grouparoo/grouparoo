import { log } from "actionhero";
import { plugin } from "../../modules/plugin";
import { Event } from "../../models/Event";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";

export class EventsAssociateProfiles extends CLSTask {
  constructor() {
    super();
    this.name = "event:associateProfiles";
    this.description =
      "ensure that events are associated to profiles, even if they were created outside of the Grouparoo API";
    this.frequency = 60 * 1000;
    this.queue = "events";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    const events = await Event.findAll({
      attributes: ["id"],
      where: { profileId: null },
      limit,
      order: [["createdAt", "asc"]],
    });

    for (const i in events) {
      await CLS.enqueueTask("event:associateProfile", {
        eventId: events[i].id,
      });
    }

    if (events.length > 0) {
      log(`enqueued ${events.length} events for association`);
    }
  }
}
