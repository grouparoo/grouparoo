import { Event } from "../../models/Event";
import { App } from "../../models/App";
import { Task, log } from "actionhero";
import { CLS } from "../../modules/cls";

const MAX_ATTEMPTS = 2;

export class EventAssociateProfile extends Task {
  // This Task extends Task rather than CLSTask as we want to be able to view newly created profiles happening in parallel to this task/transaction.
  // Event creation does have side-effects, so we manually create our own transaction

  constructor() {
    super();
    this.name = "event:associateProfile";
    this.description = "find or create the profile this event is about";
    this.frequency = 0;
    this.queue = "events";
    this.plugins = ["QueueLock", "Retry"];
    this.inputs = {
      eventGuid: { required: true },
      count: { required: false },
    };
  }

  async run(params: { eventGuid: string; count: number }) {
    const { eventGuid } = params;
    const count = params.count || 0;
    const event = await Event.findByGuid(eventGuid);

    const app = await App.findOne({ where: { type: "events" } });
    if (!app) return;
    const appOptions = await app.getOptions();

    try {
      await CLS.wrap(async () =>
        event.associate(appOptions.identifyingPropertyGuid)
      );
    } catch (error) {
      if (count < MAX_ATTEMPTS) {
        log(`re-enqueuing association of event ${eventGuid}`);
        await CLS.enqueueTaskIn(500, this.name, {
          eventGuid,
          count: count + 1,
        });
      } else {
        throw error;
      }
    }
  }
}
