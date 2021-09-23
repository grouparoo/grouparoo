import { loadPath } from "../loadPath";
import { GrouparooModel } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    name: "test-model",
    type: "profile",

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  const { GrouparooModel } = await import(`@grouparoo/core/${loadPath}`);
  return GrouparooModel.create(await data(props)) as GrouparooModel;
};
