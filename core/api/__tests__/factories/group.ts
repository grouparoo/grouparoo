import faker from "faker";
import { Group } from "./../../src/models/Group";

const data = async (props = {}) => {
  const defaultProps = {
    name: faker.company.companyName(),
    type: "manual",

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  return Group.create(await data(props));
};
