import { CLSTask } from "../../classes/tasks/clsTask";
import { Property } from "../../models/Property";
import { CLS } from "../../modules/cls";
import { Source } from "../../models/Source";
import { App } from "../../models/App";
import { Destination } from "../../models/Destination";
import { Group } from "../../models/Group";
import { RecordOps } from "../../modules/ops/record";
import { GrouparooModel } from "../../models/GrouparooModel";

export class DestroySweeper extends CLSTask {
  name = "destroy";
  description = "enqueue destroy tasks for models waiting to be deleted";
  frequency = 1000 * 30;
  queue = "system";

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

    // --- MODELS ---
    const models = await GrouparooModel.findAll({
      where: { state: "deleted" },
    });
    for (const model of models) {
      await CLS.enqueueTask("model:destroy", { modelId: model.id });
    }

    // --- APPS ---
    const apps = await App.findAll({ where: { state: "deleted" } });
    for (const app of apps) {
      await CLS.enqueueTask("app:destroy", { appId: app.id });
    }

    // --- RECORDS ---
    const records = await RecordOps.getRecordsToDestroy();
    for (const record of records) {
      await CLS.enqueueTask("record:destroy", { recordId: record.id });
    }
  }
}
