import { CLSTask } from "../../classes/tasks/clsTask";
import { Property } from "../../models/Property";
import { Source } from "../../models/Source";

export class SourceDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "source:destroy";
    this.description =
      "wait for dependencies to finish being deleted, then delete the source";
    this.frequency = 0;
    this.queue = "sources";
    this.inputs = {
      sourceId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const source = await Source.scope(null).findOne({
      where: { id: params.sourceId, state: "deleted" },
    });

    // the source may have been force-deleted
    if (!source) return;

    const directlyMappedProperty = await Property.scope(null).findOne({
      where: { sourceId: source.id, directlyMapped: true },
    });

    if (directlyMappedProperty) {
      //@ts-ignore
      await directlyMappedProperty.destroy({ hooks: false });
      await Property.stopRuns(directlyMappedProperty);
      await Property.destroyOptions(directlyMappedProperty);
      await Property.destroyPropertyFilters(directlyMappedProperty);
      await Property.destroyProfileProperties(directlyMappedProperty);
    }

    // check if we still have properties
    try {
      await Source.ensureNotInUse(source);
    } catch (error) {
      if (error.message.match(/cannot delete a source that has a property/)) {
        return; // check back later
      }

      throw error;
    }

    // no properties, let's delete it
    await source.destroy();
  }
}
