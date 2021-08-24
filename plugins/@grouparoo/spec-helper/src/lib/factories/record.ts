import faker from "faker";
import { loadPath } from "../loadPath";

const data = async (props = {}) => {
  const defaultProps = {
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}, properties = {}) => {
  const { GrouparooRecord } = await import(`@grouparoo/core/${loadPath}`);
  const record = await GrouparooRecord.create(await data(props));

  const { Property } = await import(`@grouparoo/core/${loadPath}`);
  const allProperties = await Property.findAllWithCache();
  const directlyMappedProperty = allProperties.find((p) => p.directlyMapped);

  if (directlyMappedProperty) {
    properties[directlyMappedProperty.key] = faker.unique(
      faker.datatype.number,
      [{ min: 1, max: 999999999999 }]
    );
  }

  await record.addOrUpdateProperties({
    ...properties,
  });

  return;
};
