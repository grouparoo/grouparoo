import { loadPath } from "../loadPath";

const data = async (props = {}) => {
  const defaultProps = {
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  const { Profile } = await import(`@grouparoo/core/${loadPath}`);
  return Profile.create(await data(props));
};
