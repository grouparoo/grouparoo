import { Profile } from "@grouparoo/core/src";

const data = async (props = {}) => {
  const defaultProps = {
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  return Profile.create(await data(props));
};
