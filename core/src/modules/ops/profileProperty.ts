import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js/max";
import { plugin } from "../../modules/plugin";
import isEmail from "../validators/isEmail";
import isURL from "validator/lib/isURL";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Option } from "../../models/Option";
import { Property } from "../../models/Property";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";
import { Source } from "../../models/Source";
import { AggregationMethod, PluginConnection } from "../../classes/plugin";
import { Filter } from "../../models/Filter";

export namespace ProfilePropertyOps {
  const defaultProfilePropertyProcessingDelay = 1000 * 60 * 5;

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
        throw new Error(`cannot coerce profileProperty type ${type}`);
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
        throw new Error(`cannot coerce profileProperty type ${type}`);
    }
  }

  export async function processPendingProfileProperties(
    source: Source,
    limit = 100,
    delayMs = defaultProfilePropertyProcessingDelay
  ) {
    if (!delayMs || delayMs < defaultProfilePropertyProcessingDelay) {
      delayMs = defaultProfilePropertyProcessingDelay;
    }
    if (source.state !== "ready") return [];
    const { pluginConnection } = await source.getPlugin();
    const properties = await source.$get("properties", {
      where: { state: "ready" },
      include: [Option, Filter],
    });

    const pendingProfilePropertyIds: string[] = [];
    const unGroupedProperties: Property[] = [];
    const propertyGroups: {
      [aggregationMethod: string]: Property[];
    } = {};

    for (const property of properties) {
      const options = await property.getOptions();
      const aggregationMethod = options.aggregationMethod as AggregationMethod;
      if (
        pluginConnection.groupAggregations.includes(aggregationMethod) &&
        property.isArray === false &&
        property.filters.length === 0 // TODO: Check if they match
      ) {
        if (!propertyGroups[aggregationMethod]) {
          propertyGroups[aggregationMethod] = [];
        }
        propertyGroups[aggregationMethod].push(property);
      } else {
        unGroupedProperties.push(property);
      }
    }

    // groupedProperties
    for (const aggregationMethod in propertyGroups) {
      const pendingProfileProperties = await ProfileProperty.findAll({
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
        pendingProfileProperties,
        propertyGroups[aggregationMethod]
      );
      pendingProfilePropertyIds.push(
        ...propertyGroups[aggregationMethod].map((p) => p.id)
      );
    }

    // unGroupedProperties
    for (const property of unGroupedProperties) {
      const pendingProfileProperties = await ProfileProperty.findAll({
        where: {
          propertyId: property.id,
          state: "pending",
          startedAt: {
            [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
          },
        },
        limit,
      });

      await preparePropertyImports(pluginConnection, pendingProfileProperties, [
        property,
      ]);
      pendingProfilePropertyIds.push(property.id);
    }

    return pendingProfilePropertyIds;
  }
}

// utilities (private)

async function preparePropertyImports(
  pluginConnection: PluginConnection,
  pendingProfileProperties: ProfileProperty[],
  properties: Property[]
) {
  if (pendingProfileProperties.length > 0) {
    await ProfileProperty.update(
      { startedAt: new Date() },
      {
        where: {
          id: { [Op.in]: pendingProfileProperties.map((i) => i.id) },
        },
      }
    );

    const method = pluginConnection.methods.profileProperties
      ? "ProfileProperties"
      : "ProfileProperty";

    if (method === "ProfileProperties") {
      await CLS.enqueueTask(`profileProperty:import${method}`, {
        propertyIds: properties.map((p) => p.id),
        profileIds: pendingProfileProperties.map((ppp) => ppp.profileId),
      });
    } else {
      await Promise.all(
        pendingProfileProperties.map((ppp) =>
          CLS.enqueueTask(`profileProperty:import${method}`, {
            propertyId: properties[0].id,
            profileId: ppp.profileId,
          })
        )
      );
    }
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
    await plugin.readSetting("core", "profiles-default-country-code")
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
