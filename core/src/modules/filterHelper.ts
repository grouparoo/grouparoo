import { Filter } from "../models/Filter";
import { Property } from "../models/Property";
import { Schedule } from "../models/Schedule";
import { Source } from "../models/Source";
import { Mapping } from "../models/Mapping";
import { Option } from "../models/Option";
import { modelName } from "./modelName";

export namespace FilterHelper {
  export interface FiltersWithKey {
    key: string;
    op: string;
    match?: string | number | boolean;
    relativeMatchNumber?: number;
    relativeMatchUnit?: string;
    relativeMatchDirection?: string;
  }

  /**
   * Get the existing filters for an instance
   *
   */
  export async function getFilters(instance: Property | Schedule) {
    const filtersWithCol: FiltersWithKey[] = [];
    const filters = instance.filters
      ? instance.filters.sort((a, b) => a.position - b.position)
      : await Filter.findAll({
          where: { ownerId: instance.id, ownerType: modelName(instance) },
          order: [["position", "asc"]],
        });

    if (!instance.filters) instance.filters = filters;

    for (const i in filters) {
      const filter = filters[i];
      filtersWithCol.push({
        key: filter.key,
        op: filter.op,
        match: filter.match,
        relativeMatchNumber: filter.relativeMatchNumber,
        relativeMatchUnit: filter.relativeMatchUnit,
        relativeMatchDirection: filter.relativeMatchDirection,
      });
    }

    return filtersWithCol;
  }

  /**
   * Set the filters for an instance
   *
   */
  export async function setFilters(
    instance: Property | Schedule,
    filters: FiltersWithKey[],
    externallyValidate = true
  ) {
    delete instance.filters;
    const _modelName = modelName(instance);

    if (externallyValidate) await validateFilters(instance, filters);
    const existingFilters = await getFilters(instance);
    const areEqual = filtersAreEqual(filters, existingFilters);
    if (areEqual) {
      if (typeof instance?.["afterSetFilters"] === "function") {
        await instance["afterSetFilters"](false);
      }
      return;
    }

    await Filter.destroy({
      where: { ownerId: instance.id, ownerType: _modelName },
    });

    const newPropertyFilters: Filter[] = [];
    for (const i in filters) {
      const filter = filters[i];

      const propertyFilter = await Filter.create({
        ownerId: instance.id,
        ownerType: _modelName,
        position: parseInt(i) + 1,
        key: filter.key,
        op: filter.op,
        match: filter.match?.toString() ?? null,
        relativeMatchNumber: filter.relativeMatchNumber ?? null,
        relativeMatchUnit: filter.relativeMatchUnit ?? null,
        relativeMatchDirection: filter.relativeMatchDirection ?? null,
      });
      newPropertyFilters.push(propertyFilter);
    }

    instance.filters = newPropertyFilters;
    await instance.touch();

    if (typeof instance?.["afterSetFilters"] === "function") {
      await instance["afterSetFilters"](true);
    }
  }

  /**
   * Validate filters for a Property
   *
   */
  export async function validateFilters(
    instance: Property | Schedule,
    filters: FiltersWithKey[]
  ) {
    if (!filters) filters = await getFilters(instance);
    const _pluginFilterOptions = await pluginFilterOptions(instance);

    for (const i in filters) {
      const filter = filters[i];
      const relevantOption = _pluginFilterOptions.filter(
        (pfo) => pfo.key === filter.key
      )[0];
      if (!relevantOption) {
        throw new Error(`${filter.key} is not filterable`);
      }
      if (!relevantOption.ops.includes(filter.op)) {
        throw new Error(`"${filter.op}" cannot be applied to ${filter.key}`);
      }
    }
  }

  /**
   * Get the options for a Property's Filter from its plugin
   */
  export async function pluginFilterOptions(instance: Property | Schedule) {
    const { pluginConnection } = await instance.getPlugin();
    if (!pluginConnection.methods.sourceFilters) return [];

    const instanceOptions = await instance.getOptions(true);
    const source = await Source.findOne({
      where: { id: instance.sourceId },
      include: [Option, Mapping],
    });
    const sourceOptions = await source.getOptions(true);
    const sourceMapping = await source.getMapping();
    const app = await source.$get("app", { include: [Option], scope: null });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);

    const method = pluginConnection.methods.sourceFilters;
    const options = await method({
      connection,
      app,
      appId: app.id,
      appOptions,
      source,
      sourceId: source.id,
      sourceOptions,
      sourceMapping,
      property: instance instanceof Property ? instance : undefined,
      propertyId: instance instanceof Property ? instance.id : undefined,
      propertyOptions:
        instance instanceof Property ? instanceOptions : undefined,
      schedule: instance instanceof Schedule ? instance : undefined,
      scheduleId: instance instanceof Schedule ? instance.id : undefined,
      scheduleOptions:
        instance instanceof Schedule ? instanceOptions : undefined,
    });

    return options;
  }

  /**
   * Determine if these Filters are equal
   */
  export function filtersAreEqual(
    oldFilters: FiltersWithKey[],
    newFilters: FiltersWithKey[]
  ) {
    if (oldFilters.length !== newFilters.length) return false;
    if (oldFilters.length === newFilters.length && newFilters.length === 0) {
      return true;
    }

    function nullish(value: string | number | boolean) {
      if (value === null) return null;
      if (value === undefined) return null;
      if (value === "null") return null;
      return value.toString();
    }

    for (const i in oldFilters) {
      const A = oldFilters[i];
      const B = newFilters[i];
      if (A.key !== B.key) return false;
      if (A.op !== B.op) return false;
      if (nullish(A.match) !== nullish(B.match)) return false;
      if (nullish(A.relativeMatchNumber) !== nullish(B.relativeMatchNumber)) {
        return false;
      }
      if (nullish(A.relativeMatchUnit) !== nullish(B.relativeMatchUnit)) {
        return false;
      }
      if (
        nullish(A.relativeMatchDirection) !== nullish(B.relativeMatchDirection)
      ) {
        return false;
      }
    }

    return true;
  }
}
