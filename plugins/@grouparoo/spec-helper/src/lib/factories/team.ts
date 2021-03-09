import { loadPath } from "../loadPath";
import faker from "faker";

const data = async (props = {}) => {
  const defaultProps = {
    name: `team ${faker.name.jobDescriptor()} - ${Math.random()}`,
    locked: null,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  const { Team } = await import(`@grouparoo/core/${loadPath}`);
  return Team.create(await data(props));
};
