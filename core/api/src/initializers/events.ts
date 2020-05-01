import { api, Initializer } from "actionhero";

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

    await api.events.backend?.start();
  }

  async stop() {
    await api.events.backend?.stop();
  }
}
