import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js/max";
import { plugin } from "../plugin";
import isEmail from "../validators/isEmail";
import isURL from "validator/lib/isURL";
import { RecordProperty } from "../../models/RecordProperty";
import { Option } from "../../models/Option";
import { Property } from "../../models/Property";
import { CLS } from "../cls";
import { Op } from "sequelize";
import { Source } from "../../models/Source";
import { AggregationMethod, PluginConnection } from "../../classes/plugin";
import { Filter } from "../../models/Filter";

export namespace RecordPropertyOps {
  const defaultRecordPropertyProcessingDelay = 1000 * 60 * 5;

  export async function buildRawValue(
    value: any,
    type: string
  ): Promise<string> {
    if (value === null || value === undefined || value === "") {
      return null;
    }

    switch (type) {
      case "float":
        return value.toString();
      case "integer":
        return value.toString();
      case "date":
        if (value instanceof Date) {
          return value.getTime().toString();
        } else {
          return new Date(value).getTime().toString();
        }
      case "string":
        return value.toString();
      case "email":
        return formatEmail(value.toString());
      case "phoneNumber":
        return formatPhoneNumber(value.toString());
      case "url":
        return formatURL(value.toString());
      case "boolean":
        const check = value.toString().toLowerCase();
        if (["1", "true"].includes(check)) {
          return "true";
        }
        if (["0", "false"].includes(check)) {
          return "false";
        }
        throw new Error(`${value} is not a valid boolean value`);
      default:
        throw new Error(`cannot coerce recordProperty type ${type}`);
    }
  }

  export function getValue(rawValue: string, type: string) {
    if (rawValue === null || rawValue === undefined) return null;

    switch (type) {
      case "float":
        return parseFloat(rawValue);
      case "integer":
        return parseInt(rawValue);
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
        throw new Error(`cannot coerce recordProperty type ${type}`);
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
    const properties = await source.$get("properties", {
      where: { state: "ready" },
      include: [Option, Filter],
    });

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
        limit: limit * propertyGroups[aggregationMethod].length,
      });

      await preparePropertyImports(
        pluginConnection,
        pendingRecordProperties,
        propertyGroups[aggregationMethod]
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
        limit,
      });

      await preparePropertyImports(pluginConnection, pendingRecordProperties, [
        property,
      ]);
      pendingRecordPropertyIds.push(property.id);
    }

    return pendingRecordPropertyIds;
  }
}

// utilities (private)

async function preparePropertyImports(
  pluginConnection: PluginConnection,
  pendingRecordProperties: RecordProperty[],
  properties: Property[]
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

  await RecordProperty.update(
    { startedAt: new Date() },
    {
      where: {
        id: { [Op.in]: pendingRecordProperties.map((i) => i.id) },
      },
    }
  );

  if (method === "RecordProperties") {
    await CLS.enqueueTask(`recordProperty:importRecordProperties`, {
      propertyIds: properties.map((p) => p.id),
      recordIds: uniqueRecordIds,
    });
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
    await RecordProperty.update(
      {
        state: "ready",
        stateChangedAt: new Date(),
        confirmedAt: new Date(),
      },
      {
        where: {
          id: pendingRecordProperties.map((p) => p.id),
        },
      }
    );
  }
}

// formatters and validators (private)

function formatURL(url: string) {
  if (!isURL(url)) {
    throw new Error(`url "${url}" is not valid`);
  }

  return url.toLocaleLowerCase();
}

function formatEmail(email: string) {
  if (!isEmail(email)) {
    throw new Error(`email "${email}" is not valid`);
  }

  return email.toLocaleLowerCase();
}

async function formatPhoneNumber(number: string) {
  const defaultCountryCode = (
    await plugin.readSetting("core", "records-default-country-code")
  ).value as CountryCode;

  const formattedPhoneNumber = parsePhoneNumberFromString(
    number,
    defaultCountryCode
  );

  if (!formattedPhoneNumber || !formattedPhoneNumber.isValid()) {
    throw new Error(`phone number "${number}" is not valid`);
  }

  return formattedPhoneNumber.formatInternational();
}
