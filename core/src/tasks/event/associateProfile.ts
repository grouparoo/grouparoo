import { Event } from "../../models/Event";
import { App } from "../../models/App";
import { Task, log } from "actionhero";
import { APM } from "../../modules/apm";
import { CLS } from "../../modules/cls";

export class EventAssociateProfile extends Task {
  // This Task extends Task rather than CLSTask as we want to be able to view newly created profiles happening in parallel to this task/transaction.
  // We modify the retryLimit here because we always want to allow for a retry here, even in test/dev mode.  We also shouldn't need that many retries.
  // We use a custom CLS wrapper to simplify error logging

  constructor() {
    super();
    this.name = "event:associateProfile";
    this.description = "find or create the profile this event is about";
    this.frequency = 0;
    this.queue = "events";
    this.plugins = ["QueueLock", "Retry"];
    this.pluginOptions = {
      Retry: {
        retryLimit: 3,
        backoffStrategy: [
          1000, // 1 second
          1000 * 5, // 5 seconds
          1000 * 10, // 10 seconds
        ],
      },
    };
    this.inputs = {
      eventId: { required: true },
    };
  }

  async run(params: { eventId: string; count: number }, worker) {
    return APM.wrap(this.name, "task", worker, async () => {
      const { eventId } = params;
      let event: Event;

      try {
        await CLS.wrap(
          async () => {
            event = await Event.scope(null).findOne({ where: { id: eventId } });
            if (!event) return;

            const app = await App.findOne({ where: { type: "events" } });
            if (!app) return;
            const appOptions = await app.getOptions();

            await event.associate(appOptions.identifyingPropertyId.toString());
          },
          { write: true }
        );
      } catch (error) {
        log(`re-enqueuing association of event ${eventId}`);
        throw new Error(
          `Error associating event ${event.id}: ${error.message}`
        );
      }
    });
  }
}
