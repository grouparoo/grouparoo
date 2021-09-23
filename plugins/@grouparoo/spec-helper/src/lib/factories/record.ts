import { GrouparooRecord } from "@grouparoo/core";
import faker from "faker";
import { loadPath } from "../loadPath";

const data = async (props = {}) => {
  const { GrouparooModel } = await import(`@grouparoo/core/${loadPath}`);

  const defaultProps = {
    createdAt: new Date(),
    updatedAt: new Date(),
    modelId: (await GrouparooModel.findOne()).id,
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props?: { [key: string]: any }, properties = {}) => {
  const { GrouparooRecord } = await import(`@grouparoo/core/${loadPath}`);
  const record = (await GrouparooRecord.create(
    await data(props)
  )) as GrouparooRecord;

  const { Property } = await import(`@grouparoo/core/${loadPath}`);
  const allProperties = await Property.findAllWithCache(record.modelId);
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

  return record;
};
