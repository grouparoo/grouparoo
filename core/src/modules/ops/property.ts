import { Property, SimplePropertyOptions } from "../../models/Property";
import { Group } from "../../models/Group";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { RecordProperty } from "../../models/RecordProperty";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { GroupRule } from "../../models/GroupRule";
import { internalRun } from "../internalRun";
import { PluginOptionType } from "../../classes/plugin";
import { getGrouparooRunMode } from "../runMode";
import Mustache from "mustache";
import { PropertiesCache } from "../caches/propertiesCache";
import { SourcesCache } from "../../modules/caches/sourcesCache";

export namespace PropertyOps {
  /**
   * Enqueue Runs to update all Groups that rely on this Property
   */
  export async function enqueueRuns(property: Property) {
    if (getGrouparooRunMode() === "cli:validate") return;
    if (getGrouparooRunMode() === "cli:config") {
      await RecordProperty.update(
        { state: "pending", startedAt: null },
        { where: { propertyId: property.id } }
      );

      const source = await property.$get("source", { scope: null });
      await GrouparooRecord.update(
        { state: "pending" },
        { where: { modelId: source.modelId } }
      );
    } else {
      await internalRun("property", property.id); // update *all* records

      const groups = await Group.findAll({
        include: [
          {
            model: GroupRule,
            where: { propertyId: property.id },
          },
        ],
      });

      for (const i in groups) {
        const group = groups[i];
        await group.update({ state: "initializing" });
        await group.run();
      }
    }
  }

  /**
   * Get the options for a Property from its plugin
   */
  export async function pluginOptions(
    property: Property,
    propertyOptions?: SimplePropertyOptions
  ) {
    const source = await property.$get("source", {
      scope: null,
      include: [Option, Mapping],
    });
    const { pluginConnection } = await source.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }

    if (!pluginConnection.methods.propertyOptions) {
      throw new Error(`cannot find propertyOptions for type ${source.type}`);
    }

    const response: {
      key: string;
      displayName?: string;
      description: string;
      required: boolean;
      type: PluginOptionType;
      options: {
        key: string;
        description?: string;
        default?: boolean;
        examples?: any[];
      }[];
    }[] = [];
    const app = await source.$get("app", { include: [Option], scope: null });
    const appOptions = await app.getOptions(true);
    const connection = await app.getConnection();
    const sourceOptions = await source.getOptions(true);
    const sourceMapping = await source.getMapping();
    propertyOptions = propertyOptions ?? (await property.getOptions());

    const propertyOptionOptions =
      await pluginConnection.methods.propertyOptions({
        property,
        propertyId: property.id,
        propertyOptions,
      });

    for (const i in propertyOptionOptions) {
      const opt = propertyOptionOptions[i];
      const options = await opt.options({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        property,
        propertyId: property.id,
      });

      response.push({
        key: opt.key,
        displayName: opt.displayName,
        description: opt.description,
        required: opt.required,
        type: opt.type,
        options,
      });
    }

    return response;
  }

  /**
   * Returns any GrouparooRecord Properties that this Rule depends on.
   * For example, if email depends on userId, this method would return [userIdRule]
   */
  export async function dependencies(property: Property) {
    const dependencies: Property[] = [];
    const source = await SourcesCache.findOneWithCache(
      property.sourceId,
      undefined
    );
    const sourceMapping = await source.getMapping();
    const ruleOptions = await property.getOptions();
    const properties = await PropertiesCache.findAllWithCache(source.modelId);

    // does our source depend on another property to be mapped?
    const remoteMappingKeys: string[] = Object.values(sourceMapping);
    properties
      .filter((p) => remoteMappingKeys.includes(p.key))
      .filter((p) => p.id !== property.id)
      .forEach((p) => dependencies.push(p));

    // does this rule have any mustache variables depended on?
    for (const key in ruleOptions) {
      const mustacheString = ruleOptions[key];
      const mustacheVariables = Mustache.parse(String(mustacheString))
        .filter((chunk) => chunk[0] === "&")
        .map((chunk) => chunk[1]);
      properties
        .filter((p) => mustacheVariables.includes(p.key))
        .filter((p) => p.id !== property.id)
        .forEach((p) => dependencies.push(p));
    }

    // de-duplicate
    return dependencies.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
  }
}
