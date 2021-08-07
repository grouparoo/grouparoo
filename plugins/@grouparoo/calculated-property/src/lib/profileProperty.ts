import {
  ProfileProperty,
  ProfilePropertyPluginMethod,
  Property,
} from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  //to make Typescript happy that we're sure it's an array
  const requiredPropertyValues: ProfileProperty[] = [];
  console.log("STEP ONE");
  console.log(
    `OPTIONS: ${JSON.stringify(args.propertyOptions.requiredProperties)}`
  );
  if (Array.isArray(args.propertyOptions)) {
    console.log("STEP TWO");
    //find the profile properties for each requiredProperty for the profile we're looking at
    args.propertyOptions.forEach(async (propertyOptionId) => {
      console.log("STEP THREE");
      console.log(
        `property id = ${propertyOptionId} //// profile id = ${args.profile.id}`
      );
      const property = await ProfileProperty.findOne({
        where: { propertyId: propertyOptionId, profileId: args.profile.id },
      });
      requiredPropertyValues.push(property);
    });
  }

  return [`CED-PROP: ${requiredPropertyValues[0].rawValue}`];
};
