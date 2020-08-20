import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js/max";
import { plugin } from "../../modules/plugin";
import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";

export namespace ProfilePropertyOps {
  export async function buildRawValue(value: any, type: string) {
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
        if (![true, false, 0, 1, "true", "false"].includes(value)) {
          throw new Error(`${value} is not a valid boolean value`);
        }
        if ([true, 1, "true"].includes(value)) {
          return "true";
        } else {
          return "false";
        }
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
    await plugin.readSetting("core", "default-country-code")
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
