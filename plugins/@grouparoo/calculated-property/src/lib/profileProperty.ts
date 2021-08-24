import {
  GrouparooCLI,
  plugin,
  Profile,
  ProfilePropertyPluginMethod,
} from "@grouparoo/core";
import { NodeVM } from "vm2";

async function calculateProfilePropertyValue(
  customFunction,
  profile: Profile,
  propertyName: string
): Promise<string> {
  let populatedFunction;
  try {
    populatedFunction = await plugin.replaceTemplateProfileVariables(
      customFunction,
      profile,
      false
    );
    //fail at every level if someone tries to require a library... this should never be allowed to hit vm.run
    if (populatedFunction.includes(`require(`)) {
      const errorString =
        "Error validating Calculated Property `" +
        propertyName +
        '`. customFunction cannot use "require".';

      GrouparooCLI.logger.fatal(errorString);
    }
    //returns a string of the entire function
  } catch (error) {
    //if we don't have the right properties to build the function, bail
    console.log(error);
    return undefined;
  }
  let calculatedPropertyValue;

  //this works with vm and node vm... using node vm to allow for node modules in v2 of this feature
  const vm = new NodeVM({
    console: "inherit",
    sandbox: {},
    argv: [],
    env: {},
  });

  try {
    calculatedPropertyValue = vm.run(
      `const toRun = ${populatedFunction}; module.exports = toRun();`
    );
    if (calculatedPropertyValue === undefined) {
      throw Error("Calculated property's /`customFunction/` undefined");
    }
  } catch (error) {
    throw Error(`Could not calculate property: ${error}`);
  }

  return calculatedPropertyValue;
}

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  const profilePropertyValue = await calculateProfilePropertyValue(
    args.propertyOptions.customFunction,
    args.profile,
    args.property.id
  );

  return [profilePropertyValue];
};
