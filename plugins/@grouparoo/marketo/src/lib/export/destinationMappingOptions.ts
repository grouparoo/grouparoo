import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { connect } from "./../connect";
// import { cache } from "./../cache";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const { known, required } = await getFields(client);

  return {
    labels: {
      profilePropertyRule: {
        singular: "Marketo Field",
        plural: "Marketo Fields",
      },
      group: {
        singular: "Marketo List",
        plural: "Marketo Lists",
      },
    },
    profilePropertyRules: {
      required,
      known,
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};

const mapTypesFromMarketoToGrouparoo = (marketoType) => {
  // https://developers.marketo.com/rest-api/lead-database/fields/field-types/
  const map = {
    string: "string",
    text: "string",
    textarea: "string",
    integer: "integer",
    boolean: "boolean",
    email: "email",
    float: "float",
    datetime: "date",
    score: "integer",
    // unhandled:
    reference: null,
    formula: null,
    // TODO:
    date: null, // like birthday (just date)
    phone: null,
    url: null,
    currency: null,
    percent: "integer", // 0 to 100 (should we more specific?)
  };

  // decimal: "float",
  // date: "date",
  // checkbox: "boolean",
  // regexp: "string",
  // dropdown: "string",
  const grouparooType = map[marketoType];
  if (grouparooType === undefined) {
    throw `Unknown marketo type: ${marketoType}`;
  }
  return grouparooType;
};

export const getRequiredFields = (): Array<{
  key: string;
  type: string;
}> => {
  return [
    { key: "external_id", type: "string" },
    { key: "name", type: "string" },
  ];
};

const importantFieldNames = ["firstName", "lastName"];
const isFieldImportant = function (field: any): Boolean {
  const name = field.rest.name;
  return importantFieldNames.indexOf(name) >= 0;
};

export const getFields = async (
  client: any
): Promise<{
  required: Array<{
    key: string;
    type: string;
  }>;
  known: Array<{
    key: string;
    type: string;
    important?: boolean;
  }>;
}> => {
  // const cacheKey = "grouparoo:marketo:fieldslist";
  // const cacheDuration = 1000 * 60; // 1 minute
  // const lockKey = "grouparoo:marketo:fieldslistlock";
  // const list = await cache({ cacheKey, lockKey, cacheDuration }, async () => {
  //   return (await client.lead.describe()).result;
  // });

  const required = [];
  let known = [];
  const list = (await client.lead.describe()).result;
  for (const field of list) {
    const readOnly = field.rest.readOnly;
    const key = field.rest.name;
    const type = mapTypesFromMarketoToGrouparoo(field.dataType);
    const important = isFieldImportant(field);
    if (key && readOnly === false && type) {
      if (key === "email" && type === "email") {
        required.push({ key, type });
      } else {
        known.push({ key, type, important });
      }
    }
  }

  if (known.length < 1) {
    throw "Marketo email field not found";
  }

  known = known.sort((a, b) => {
    return a.key.localeCompare(b.key);
  });
  return { required, known };
};
