import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js/max";
import isEmail from "../validators/isEmail";
import isURL from "validator/lib/isURL";
import { RecordProperty } from "../../models/RecordProperty";
import { Property, PropertyTypes } from "../../models/Property";
import { CLS } from "../cls";
import { Op } from "sequelize";
import { Source } from "../../models/Source";
import { AggregationMethod, PluginConnection } from "../../classes/plugin";
import { log } from "actionhero";
import { PropertiesCache } from "../../modules/caches/propertiesCache";
import { plugin } from "../plugin";

export namespace RecordPropertyOps {
  const defaultRecordPropertyProcessingDelay = 1000 * 60 * 5;

  export async function buildRawValue(
    value: unknown,
    type: typeof PropertyTypes[number],
    recordProperty?: RecordProperty
  ) {
    let rawValue: string = null;
    let invalidValue: string | null = null;
    let invalidReason: string | null = null;

    if (value === null || value === undefined || value === "") {
      return { rawValue, invalidValue, invalidReason };
    }

    try {
      switch (type) {
        case "float":
          rawValue = await formatFloat(value?.toString());
          break;
        case "integer":
          rawValue = await formatInteger(value?.toString());
          break;
        case "date":
          rawValue = await formatDate(value);
          break;
        case "string":
          rawValue = await formatString(value?.toString());
          break;
        case "email":
          rawValue = await formatEmail(value?.toString());
          break;
        case "phoneNumber":
          rawValue = await formatPhoneNumber(value?.toString());
          break;
        case "url":
          rawValue = await formatURL(value?.toString());
          break;
        case "boolean":
          rawValue = await formatBoolean(value?.toString());
          break;
        default:
          throw new Error(
            `cannot coerce recordProperty ${value} to type ${type}`
          );
      }
    } catch (error) {
      rawValue = null;
      invalidValue = value?.toString();
      if (recordProperty && error instanceof Error) {
        error.message += ` for record ${recordProperty.recordId}`;
      }
      invalidReason = `Invalid ${type} value`;
      log(error, "error");
    }

    return { rawValue, invalidValue, invalidReason };
  }

  export function getValue(
    rawValue: string,
    type: typeof PropertyTypes[number]
  ) {
    if (rawValue === null || rawValue === undefined) return null;

    switch (type) {
      case "float":
        return parseFloat(rawValue);
      case "integer":
        return parseInt(rawValue, 10);
      case "date":
        return new Date(parseInt(rawValue));
      case "string":
        return rawValue;
      case "email":
        return rawValue;
      case "phoneNumber":
        return rawValue;
      case "url":
        return rawValue;
      case "boolean":
        if ([true, 1, "true"].includes(rawValue)) {
          return true;
        } else {
          return false;
        }
      default:
        throw new Error(
          `cannot coerce recordProperty ${rawValue} into type ${type}`
        );
    }
  }

  export async function processPendingRecordProperties(
    source: Source,
    limit = 100,
    delayMs = defaultRecordPropertyProcessingDelay
  ) {
    if (!delayMs || delayMs < defaultRecordPropertyProcessingDelay) {
      delayMs = defaultRecordPropertyProcessingDelay;
    }
    if (source.state !== "ready") return [];
    const { pluginConnection } = await source.getPlugin();
    const properties = (
      await PropertiesCache.findAllWithCache(undefined, "ready")
    ).filter((p) => p.sourceId === source.id);

    const pendingRecordPropertyIds: string[] = [];
    const unGroupedProperties: Property[] = [];
    const propertyGroups: {
      [aggregationMethod: string]: Property[];
    } = {};

    for (const property of properties) {
      const options = await property.getOptions();
      const filters = await property.getFilters();
      const aggregationMethod = options.aggregationMethod as AggregationMethod;

      if (
        pluginConnection.groupAggregations?.includes(aggregationMethod) &&
        filters.length === 0 &&
        property.isArray === false
      ) {
        if (aggregationMethod && !propertyGroups[aggregationMethod]) {
          propertyGroups[aggregationMethod] = [];
        }
        propertyGroups[aggregationMethod].push(property);
      } else {
        unGroupedProperties.push(property);
      }
    }

    // groupedProperties
    for (const aggregationMethod in propertyGroups) {
      const pendingRecordProperties = await RecordProperty.findAll({
        where: {
          propertyId: {
            [Op.in]: propertyGroups[aggregationMethod].map((p) => p.id),
          },
          state: "pending",
          startedAt: {
            [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
          },
        },
        order: [["recordId", "asc"]],
        limit: limit * propertyGroups[aggregationMethod].length,
      });

      await preparePropertyImports(
        pluginConnection,
        pendingRecordProperties,
        propertyGroups[aggregationMethod],
        limit
      );
      pendingRecordPropertyIds.push(
        ...propertyGroups[aggregationMethod].map((p) => p.id)
      );
    }

    // unGroupedProperties
    for (const property of unGroupedProperties) {
      const pendingRecordProperties = await RecordProperty.findAll({
        where: {
          propertyId: property.id,
          state: "pending",
          startedAt: {
            [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
          },
        },
        order: [["recordId", "asc"]],
        limit,
      });

      await preparePropertyImports(
        pluginConnection,
        pendingRecordProperties,
        [property],
        limit
      );
      pendingRecordPropertyIds.push(property.id);
    }

    return pendingRecordPropertyIds;
  }
}

// utilities (private)
async function preparePropertyImports(
  pluginConnection: PluginConnection,
  pendingRecordProperties: RecordProperty[],
  properties: Property[],
  limit: number
) {
  if (pendingRecordProperties.length === 0) return;
  if (properties.length === 0) return;

  const uniqueRecordIds = pendingRecordProperties
    .map((ppp) => ppp.recordId)
    .filter((val, idx, arr) => arr.indexOf(val) === idx);

  const method = pluginConnection.methods.recordProperties
    ? "RecordProperties"
    : pluginConnection.methods.recordProperty
    ? "RecordProperty"
    : null;

  await RecordProperty.updateAllInBatches(pendingRecordProperties, {
    startedAt: new Date(),
  });

  if (method === "RecordProperties") {
    while (uniqueRecordIds.length > 0) {
      await CLS.enqueueTask(`recordProperty:importRecordProperties`, {
        propertyIds: properties.map((p) => p.id),
        recordIds: uniqueRecordIds.splice(0, limit),
      });
    }
  } else if (method === "RecordProperty") {
    for (const property of properties) {
      for (const recordId of uniqueRecordIds) {
        await CLS.enqueueTask(`recordProperty:importRecordProperty`, {
          propertyId: property.id,
          recordId,
        });
      }
    }
  } else {
    // Schedule sources don't import properties on-demand, keep old value
    await RecordProperty.updateAllInBatches(pendingRecordProperties, {
      state: "ready",
      stateChangedAt: new Date(),
      confirmedAt: new Date(),
    });
  }
}

// formatters and validators

async function formatFloat(v: string) {
  // try to parse
  const parsed = parseFloat(v);
  if (isNaN(parsed)) throw new Error(`float "${v}" is not valid`);
  return parsed.toString();
}

async function formatInteger(v: string) {
  // try to parse
  const parsed = parseInt(v, 10);
  if (isNaN(parsed)) throw new Error(`integer "${v}" is not valid`);
  return parsed.toString();
}

async function formatString(v: string) {
  // Any string is valid
  return v;
}

async function formatDate(v: any) {
  // try to parse with new Date()
  if (v instanceof Date) return v.getTime().toString();
  const dateString = new Date(v).getTime().toString();
  if (dateString === "NaN") throw new Error(`date "${v}" is not valid`);
  return dateString;
}

function formatURL(v: string) {
  // We do strong validation on the URL
  if (!isURL(v)) throw new Error(`url "${v}" is not valid`);
  return v.toLocaleLowerCase();
}

function formatEmail(v: string) {
  // We do light validation on the email to ensure that it has an "@" and a "."
  if (!isEmail(v)) throw new Error(`email "${v}" is not valid`);
  return v;
}

async function formatPhoneNumber(v: string) {
  // Use Google's phone number validator and formatter
  const defaultCountryCode = (
    await plugin.readSetting("core", "records-default-country-code")
  ).value as CountryCode;

  const formattedPhoneNumber = parsePhoneNumberFromString(
    v,
    defaultCountryCode
  );

  if (!formattedPhoneNumber || !formattedPhoneNumber.isValid()) {
    throw new Error(`phone number "${v}" is not valid`);
  }

  return formattedPhoneNumber.formatInternational();
}

async function formatBoolean(v: string) {
  // 1,0 or true,false are valid
  const check = v.toLocaleLowerCase();
  if (["1", "true"].includes(check)) return "true";
  if (["0", "false"].includes(check)) return "false";
  throw new Error(`${v} is not a valid boolean value`);
}
