import { loadPath } from "../loadPath";
import faker from "faker";
import { ApiKey } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    name: `ApiKey ${faker.name.jobDescriptor()} - ${Math.random()}`,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (props = {}) => {
  const { ApiKey } = await import(`@grouparoo/core/${loadPath}`);
  return ApiKey.create(await data(props)) as ApiKey;
};
