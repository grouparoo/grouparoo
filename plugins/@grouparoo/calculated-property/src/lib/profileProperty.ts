import {
  ProfileProperty,
  ProfilePropertyPluginMethod,
  Property,
} from "@grouparoo/core";

export interface RequiredPropertiesObject {
  [propertyId: string]: ProfileProperty;
}

const getRequiredProperties = async (
  i,
  args,
  arrayedProperties,
  requiredPropertyObjects
) => {
  const propertyOptionId = arrayedProperties[i];
  console.log("STEP TWO");
  console.log(
    `property id = ${propertyOptionId} //// profile id = ${args.profile.id}`
  );
  const property = await ProfileProperty.findOne({
    where: { propertyId: propertyOptionId, profileId: args.profile.id },
  });

  console.log(`propertyValue = ${property.rawValue}`);
  requiredPropertyObjects[property.propertyId] = property;

  console.log(
    `SAVED = ${requiredPropertyObjects[property.propertyId].rawValue}`
  );
};

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  const requiredPropertyObjects: RequiredPropertiesObject = {};
  let arrayedProperties: string[] = [];

  console.log("STEP ONE");

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

  console.log(JSON.stringify(requiredPropertyObjects, null, 2));

  console.log(
    `JUST TO BE SURE: ${requiredPropertyObjects["last_name"].rawValue}`
  );
  return [
    `CALCULATED-PROPERTY-HERE ${requiredPropertyObjects["last_name"].rawValue}`,
  ];
};
