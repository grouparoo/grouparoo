import { ProfileProperty, ProfilePropertyPluginMethod } from "@grouparoo/core";
const { NodeVM } = require("vm2");

export interface RequiredPropertiesObject {
  [propertyId: string]: ProfileProperty;
}

async function getRequiredProperties(
  i,
  args,
  arrayedProperties,
  requiredPropertyObjects
) {
  const propertyOptionId = arrayedProperties[i];
  const property = await ProfileProperty.findOne({
    where: { propertyId: propertyOptionId, profileId: args.profile.id },
  });

  requiredPropertyObjects[property.propertyId] = property;
}

async function calculateProfilePropertyValue(
  requiredProperties: RequiredPropertiesObject,
  customFunction
): Promise<string> {
  console.log(JSON.stringify(requiredProperties));
  let calculation;

  //this works with vm and node vm... using node vm to allow for node modules in v2 of this feature
  const vm = new NodeVM({
    require: {
      console: "inherit",
    },
  });
  try {
    calculation = vm.run(`module.exports = ${customFunction}`);
    // Should these really be throws?  Is this the right place for the validation?
    if (calculation === undefined) {
      throw Error("Calculated property returned undefined");
    }
    // Should we also check that return type is string here?
  } catch (error) {
    throw Error("Could not calculate property");
  }

  return calculation(requiredProperties);
}

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  const requiredPropertyObjects: RequiredPropertiesObject = {};
  let arrayedProperties: string[] = [];

  //make array
  if (typeof args.propertyOptions.requiredProperties === "string") {
    arrayedProperties = args.propertyOptions.requiredProperties.split(",");
  }

  //find the profile properties for each requiredProperty for the profile we're looking at
  for (const i in arrayedProperties) {
    await getRequiredProperties(
      i,
      args,
      arrayedProperties,
      requiredPropertyObjects
    );
  }

  const profilePropertyValue = await calculateProfilePropertyValue(
    requiredPropertyObjects,
    args.propertyOptions.customFunction
  );

  return [profilePropertyValue];
};
