import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js/max";
import { plugin } from "../../modules/plugin";
import isEmail from "../validators/isEmail";
import isURL from "validator/lib/isURL";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";

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
    property: Property,
    limit = 100,
    delayMs = defaultProfilePropertyProcessingDelay
  ) {
    if (!delayMs || delayMs < defaultProfilePropertyProcessingDelay) {
      delayMs = defaultProfilePropertyProcessingDelay;
    }

    const source = await property.$get("source", { scope: null });
    if (source.state !== "ready") return [];

    const { pluginConnection } = await source.getPlugin();

    const pendingProfileProperties = await ProfileProperty.findAll({
      where: {
        propertyId: property.id,
        state: "pending",
        startedAt: {
          [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
        },
      },
      order: [["stateChangedAt", "ASC"]],
      limit,
    });

    await ProfileProperty.update(
      { startedAt: new Date() },
      {
        where: { id: { [Op.in]: pendingProfileProperties.map((i) => i.id) } },
      }
    );

    const method = pluginConnection.methods.profileProperties
      ? "ProfileProperties"
      : "ProfileProperty";

    if (pendingProfileProperties.length > 0) {
      if (method === "ProfileProperties") {
        await CLS.enqueueTask(`profileProperty:import${method}`, {
          propertyId: property.id,
          profileIds: pendingProfileProperties.map((ppp) => ppp.profileId),
        });
      } else {
        await Promise.all(
          pendingProfileProperties.map((ppp) =>
            CLS.enqueueTask(`profileProperty:import${method}`, {
              propertyId: property.id,
              profileId: ppp.profileId,
            })
          )
        );
      }
    }

    return pendingProfileProperties;
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
