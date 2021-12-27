import { loadPath } from "../loadPath";
import faker from "faker";
import { Group, GrouparooModel } from "@grouparoo/core";
import ModelFactory from "./model";

const data = async (props: { modelId?: string } = {}) => {
  const { GrouparooModel } = await import(`@grouparoo/core/${loadPath}`);
  const model =
    (await GrouparooModel.findOne(
      props.modelId ? { where: { id: props.modelId } } : undefined
    )) ?? ((await ModelFactory({ id: props.modelId })) as GrouparooModel);

  const defaultProps = {
    name: `group ${faker.company.companyName()} - ${Math.random()}`,
    modelId: model.id,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props: { [key: string]: any } = {}) => {
  const { Group } = await import(`@grouparoo/core/${loadPath}`);
  const instance = (await Group.create(await data(props))) as Group;
  await instance.update({ state: "ready" });

  return instance;
};
