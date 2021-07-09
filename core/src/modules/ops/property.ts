import { Property, SimplePropertyOptions } from "../../models/Property";
import { Group } from "../../models/Group";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { GroupRule } from "../../models/GroupRule";
import { internalRun } from "../internalRun";
import { Op } from "sequelize";
import Mustache from "mustache";

export namespace PropertyOps {
  /**
   * Enqueue Runs to update all Groups that rely on this Property
   */
  export async function enqueueRuns(property: Property) {
    if (process.env.GROUPAROO_RUN_MODE === "cli:validate") return;

    await internalRun("property", property.id); // update *all* profiles

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

    const response: Array<{
      key: string;
      displayName?: string;
      description: string;
      required: boolean;
      type: string;
      options: Array<{
        key: string;
        description?: string;
        examples?: Array<any>;
      }>;
    }> = [];
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
   * Returns any Profile Properties that this Rule depends on.
   * For example, if email depends on userId, this method would return [userIdRule]
   */
  export async function dependencies(property: Property) {
    const dependencies: Property[] = [];
    const source = await property.$get("source", {
      scope: null,
      include: [Option, Mapping],
    });
    const sourceMapping = await source.getMapping();
    const ruleOptions = await property.getOptions();
    const properties = await Property.findAllWithCache();

    // does our source depend on another property to be mapped?
    const remoteMappingKeys = Object.values(sourceMapping);
    properties
      .filter((rule) => remoteMappingKeys.includes(rule.key))
      .filter((rule) => rule.id !== property.id)
      .forEach((rule) => dependencies.push(rule));

    // does this rule have any mustache variables depended on?
    for (const key in ruleOptions) {
      const mustacheString = ruleOptions[key];
      const mustacheVariables: string[] = Mustache.parse(mustacheString)
        .filter((chunk) => chunk[0] === "name")
        .map((chunk) => chunk[1]);
      properties
        .filter((rule) => mustacheVariables.includes(rule.key))
        .filter((rule) => rule.id !== property.id)
        .forEach((rule) => dependencies.push(rule));
    }

    // de-duplicate
    return dependencies.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
  }

  /** Make this rule identifying */
  export async function makeIdentifying(rule: Property) {
    if (rule.identifying === true) return;

    await Property.update(
      { identifying: false },
      { where: { id: { [Op.ne]: rule.id } } }
    );
    await rule.update({ identifying: true });
  }
}
