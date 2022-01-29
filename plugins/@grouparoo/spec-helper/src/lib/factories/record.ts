import { GrouparooModel, GrouparooRecord } from "@grouparoo/core";
import faker from "faker";
import { loadPath } from "../loadPath";
import ModelFactory from "./model";

const data = async (props: { modelId?: string } = {}) => {
  const { GrouparooModel } = await import(`@grouparoo/core/${loadPath}`);
  const model =
    (await GrouparooModel.findOne(
      props.modelId ? { where: { id: props.modelId } } : undefined
    )) ?? ((await ModelFactory({ id: props.modelId })) as GrouparooModel);

  const defaultProps = {
    createdAt: new Date(),
    updatedAt: new Date(),
    modelId: model.id,
  };

  return { ...defaultProps, ...props };
};

export default async (props?: { [key: string]: any }, properties = {}) => {
  const { GrouparooRecord } = await import(`@grouparoo/core/${loadPath}`);
  const record = (await GrouparooRecord.create(
    await data(props)
  )) as GrouparooRecord;

  const { Property } = await import(`@grouparoo/core/${loadPath}`);
  const allProperties = await Property.findAllWithCache(record.modelId);
  const primaryKeyProperty = allProperties.find((p) => p.isPrimaryKey);

  if (primaryKeyProperty) {
    properties[primaryKeyProperty.key] = faker.unique(faker.datatype.number, [
      { min: 1, max: 999999999999 },
    ]);
  }

  await record.addOrUpdateProperties({
    ...properties,
  });

  return record;
};
