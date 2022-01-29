import { loadPath } from "../loadPath";
import { GrouparooModel } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    id: undefined,
    type: "profile",
    name: "Profiles",

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (props = {}) => {
  const { GrouparooModel } = await import(`@grouparoo/core/${loadPath}`);
  return GrouparooModel.create(await data(props)) as GrouparooModel;
};
