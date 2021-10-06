import { loadPath } from "../loadPath";
import faker from "faker";
import AppFactory from "./app";
import { Source, GrouparooModel } from "@grouparoo/core";
import ModelFactory from "./model";

const data = async (props: { modelId?: string } = {}) => {
  const { GrouparooModel } = await import(`@grouparoo/core/${loadPath}`);
  const model =
    (props.modelId
      ? await GrouparooModel.findOne({ where: { id: props.modelId } })
      : await GrouparooModel.findOne()) ??
    ((await ModelFactory({ id: props.modelId })) as GrouparooModel);

  const defaultProps = {
    name: `source ${faker.company.companyName()} - ${Math.random()}`,
    type: "test-plugin-import",
    modelId: model.id,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (app?, props: { [key: string]: any } = {}) => {
  const { Source } = await import(`@grouparoo/core/${loadPath}`);

  if (!app) app = await AppFactory();
  props.appId = app.id;

  const mergedProps = await data(props);
  const instance = new Source(mergedProps) as Source;
  await instance.save();

  return instance;
};
