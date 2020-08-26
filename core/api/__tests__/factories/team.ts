import faker from "faker";
import { Team } from "./../../src/models/Team";

const data = async (props = {}) => {
  const defaultProps = {
    name: `team ${faker.name.jobDescriptor()} - ${Math.random()}`,
    locked: false,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  return Team.create(await data(props));
};
