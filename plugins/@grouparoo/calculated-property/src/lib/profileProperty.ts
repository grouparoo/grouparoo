import {
  plugin,
  Profile,
  ProfileProperty,
  ProfilePropertyPluginMethod,
} from "@grouparoo/core";
const { NodeVM } = require("vm2");

export interface RequiredPropertiesObject {
  [propertyId: string]: ProfileProperty;
}

async function calculateProfilePropertyValue(
  customFunction,
  profile: Profile
): Promise<string> {
  let populatedFunction;
  try {
    populatedFunction = await plugin.replaceTemplateProfileVariables(
      customFunction,
      profile,
      false
    );
  } catch (error) {
    //if we don't have the right properties to build the function, bail
    console.log(error);
    return undefined;
  }
  let calculation;

  //this works with vm and node vm... using node vm to allow for node modules in v2 of this feature
  const vm = new NodeVM({
    require: {
      console: "inherit",
    },
  });

  try {
    calculation = vm.run(`module.exports = ${populatedFunction}`);
    if (calculation === undefined) {
      throw Error("Calculated property's /`customFunction/` undefined");
    }
  } catch (error) {
    throw Error(`Could not calculate property: ${error}`);
  }

  return calculation(populatedFunction);
}

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  const profilePropertyValue = await calculateProfilePropertyValue(
    args.propertyOptions.customFunction,
    args.profile
  );

  return [profilePropertyValue];
};
