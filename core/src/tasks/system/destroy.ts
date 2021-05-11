import { CLSTask } from "../../classes/tasks/clsTask";
import { Property } from "../../models/Property";
import { CLS } from "../../modules/cls";
import { Source } from "../../models/Source";
import { App } from "../../models/App";
import { Destination } from "../../models/Destination";
import { Group } from "../../models/Group";

export class DestroySweeper extends CLSTask {
  constructor() {
    super();
    this.name = "destroy";
    this.description =
      "re-enqueue destroy tasks for models waiting to be deleted";
    this.frequency = 1000 * 60 * 10; // every 10 minutes
    this.queue = "system";
  }

  async runWithinTransaction() {
    // -- GROUPS --
    const groups = await Group.findAll({ where: { state: "deleted" } });
    for (const group of groups) {
      await CLS.enqueueTask("group:destroy", { groupId: group.id });
    }

    // --- DESTINATIONS --
    const destinations = await Destination.findAll({
      where: { state: "deleted" },
    });
    for (const destination of destinations) {
      await CLS.enqueueTask("destination:destroy", {
        destinationId: destination.id,
      });
    }

    // --- PROPERTIES ---
    const properties = await Property.findAll({ where: { state: "deleted" } });
    for (const property of properties) {
      await CLS.enqueueTask("property:destroy", { propertyId: property.id });
    }

    // --- SOURCES ---
    const sources = await Source.findAll({ where: { state: "deleted" } });
    for (const source of sources) {
      await CLS.enqueueTask("source:destroy", { sourceId: source.id });
    }

    // --- APPS ---
    const apps = await App.findAll({ where: { state: "deleted" } });
    for (const app of apps) {
      await CLS.enqueueTask("app:destroy", { appId: app.id });
    }
  }
}
