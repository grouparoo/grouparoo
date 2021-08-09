import {
  ProfileProperty,
  ProfilePropertyPluginMethod,
  Property,
} from "@grouparoo/core";

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
  requiredPropertyObjects[args.profile.id] = property;
  console.log(`SAVED = ${requiredPropertyObjects[args.profile.id].rawValue}`);
};

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  //to make Typescript happy that we're sure it's an array
  const requiredPropertyObjects = {};
  let arrayedProperties: string[] = [];
  console.log("STEP ONE");
  console.log(
    `OPTIONS: ${JSON.stringify(args.propertyOptions.requiredPropertyObjects)}`
  );
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

  return [
    `CALCULATED-PROPERTY-HERE ${
      requiredPropertyObjects[args.profile.id].rawValue
    }`,
  ];
};
