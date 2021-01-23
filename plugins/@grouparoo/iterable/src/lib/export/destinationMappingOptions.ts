import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { connect } from "./../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const contactsProperties = await client.contactsProperties.getAllContactsProperties();

  return {
    labels: {
      property: {
        singular: "Hubspot Contact Property",
        plural: "Hubspot Contact Properties",
      },
      group: {
        singular: "Hubspot List",
        plural: "Hubspot Lists",
      },
    },
    properties: {
      required: [{ key: "email", type: "email" }],
      known: contactsProperties
        .filter((contactProperty) => contactProperty.name !== "email")
        .sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
        .map((contactProperty) => {
          let important = true;
          if (contactProperty.name.match(/^hs_/)) important = false;
          if (contactProperty.name.match(/^hubspot_/)) important = false;
          if (contactProperty.name.match(/^ip_/)) important = false;
          if (contactProperty.name.match(/^notes_/)) important = false;
          if (contactProperty.name.match(/^num/)) important = false;
          if (contactProperty.name.match(/^first_/)) important = false;
          if (contactProperty.name.match(/^recent_/)) important = false;
          if (contactProperty.name.match(/^engagements_/)) important = false;

          return {
            key: contactProperty.name,
            type: "any",
            // type: contactProperty.type
            important,
          };
        }),
      allowOptionalFromProperties: false,
    },
  };
};
