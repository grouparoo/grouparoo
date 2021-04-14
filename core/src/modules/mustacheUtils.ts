import Mustache from "mustache";
// import { Property } from "../models/Property"; // TODO: importing this causes a circular dependency loop; we'll use api.sequelize.models for now
import { ConfigurationObject } from "../classes/codeConfig";
import { api } from "actionhero";

export namespace MustacheUtils {
  export interface MustacheArgs {
    [key: string]: any;
  }

  export function strictlyRender(
    string: string,
    data: MustacheArgs,
    errorPrefix?: string,
    allowNull = false
  ) {
    validateMustacheVariables(string, data, errorPrefix, allowNull);
    return render(string, data);
  }

  export function render(string: string, data: MustacheArgs) {
    return Mustache.render(string, data);
  }

  export function validateMustacheVariables(
    string: string,
    data: MustacheArgs,
    errorPrefix = "missing mustache key",
    allowNull = false
  ) {
    getMustacheVariables(string).map((key) => {
      const value = key.split(".").reduce((o, i) => o[i], data);
      if (value === undefined || (allowNull === false && value === null)) {
        throw new Error(`${errorPrefix} ${JSON.stringify(key)}`);
      }
    });
  }

  export function getMustacheVariables(string: string) {
    return Mustache.parse(string)
      .filter((chunk) => chunk[0] === "name" || chunk[0] === "&")
      .map((chunk) => chunk[1]) as string[];
  }

  export async function getMustacheVariablesAsPropertyIds(
    string: string,
    configObjects: ConfigurationObject[] = []
  ) {
    const keys = getMustacheVariables(string);
    const properties = await api.sequelize.models.Property.findAll();
    const searchItems: Array<{ id: string; key: string }> = [].concat(
      properties.map((p) => {
        return { id: p.id, key: p.key };
      }),
      configObjects
        .filter((c) => c.class.toLowerCase() === "property")
        .map((c) => {
          return { id: c.id, key: c.key || c.name };
        }),
      configObjects
        .filter((c) => c.class.toLowerCase() === "source")
        .filter((c) => c.bootstrappedProperty?.id)
        .map((c) => {
          return {
            id: c.bootstrappedProperty.id,
            key: c.bootstrappedProperty.key || c.bootstrappedProperty.name,
          };
        })
    );

    return keys.map((k) => {
      const item = searchItems.find((p) => p.key === k);
      if (!item) throw new Error(`no property with key ${k}`);
      return item.id;
    });
  }
}
