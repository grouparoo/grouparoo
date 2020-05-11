import { api, Initializer, task } from "actionhero";
import { ProfilePropertyRule } from "../../..";
import { plugin } from "../modules/plugin";
import { addEventsApp } from "../classes/events";

export class Events extends Initializer {
  constructor() {
    super();
    this.name = "events";
    this.startPriority = 200;
  }

  async initialize() {
    api.events = {
      backend: undefined,
      model: undefined,
    };

    // add the plugin
    plugin.registerPlugin({
      name: "@grouparoo/core/events",
      icon: "/public/@grouparoo/events/events.png",
      apps: [
        {
          name: "events",
          options: [
            {
              key: "identifyingProfilePropertyRuleGuid",
              required: true,
              description:
                "The profile property rule which will map to the event field 'userId'.  Only unique profile property rules can be used.",
            },
          ],
          addible: false,
          methods: {
            test: async () => {
              return api.events.model.count();
            },
            appOptions: async () => {
              const uniqueRules = await ProfilePropertyRule.findAll({
                where: { unique: true },
              });

              return {
                identifyingProfilePropertyRuleGuid: {
                  type: "list",
                  options: uniqueRules.map((rule) => rule.guid),
                  descriptions: uniqueRules.map((rule) => rule.key),
                },
              };
            },
          },
        },
      ],
      connections: [],
    });
  }

  async start() {
    // default to sequelizeEvents if no event backend was loaded by a plugin
    if (!api.events.backend) {
      const {
        Event,
        EventBackend,
      } = require("../classes/eventBackendSequelize");

      api.events.backend = new EventBackend();
      api.events.model = Event;
    }

    // wrap event#save to include enqueuing the processing task
    const eventSaveMethod = api.events.model.prototype.save;
    api.events.model.prototype.save = async function (...args) {
      await eventSaveMethod.apply(this, args);
      await task.enqueue("event:associateProfile", { eventGuid: this.guid });
      return this;
    };

    await api.events.backend?.start();
    await addEventsApp();
  }

  async stop() {
    await api.events.backend?.stop();
  }
}
