import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { connect } from "./../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const contactsProperties = await client.contactsProperties.getAllContactsProperties();

  return {
    labels: {
      profilePropertyRule: {
        singular: "Hubspot Contact Property",
        plural: "Hubspot Contact Properties",
      },
      group: {
        singular: "Hubspot List",
        plural: "Hubspot Lists",
      },
    },
    profilePropertyRules: {
      required: [{ key: "email", type: "email" }],
      known: contactsProperties
        // ignore internal hubspot properties
        .filter((contactProperty) => !contactProperty.name.match(/^hs_/))
        .filter((contactProperty) => !contactProperty.name.match(/^hubspot_/))
        .sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
        .map((contactProperty) => {
          return {
            key: contactProperty.name,
            type: "any",
            // type: contactProperty.type
          };
        }),
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};
