import faker from "faker";
import { ApiKey } from "@grouparoo/core/src";

const data = async (props = {}) => {
  const defaultProps = {
    name: faker.name.jobDescriptor(),

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  return ApiKey.create(await data(props));
};
