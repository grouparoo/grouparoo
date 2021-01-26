import { loadPath } from "../loadPath";
import faker from "faker";

const data = async (props = {}) => {
  const defaultProps = {
    name: `group ${faker.company.companyName()} - ${Math.random()}`,
    type: "manual",

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  const { Group } = await import(`@grouparoo/core/${loadPath}`);
  const instance = await Group.create(await data(props));
  await instance.update({ state: "ready" });

  return instance;
};
