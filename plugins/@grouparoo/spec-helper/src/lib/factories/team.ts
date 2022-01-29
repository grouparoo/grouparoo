import { loadPath } from "../loadPath";
import faker from "faker";
import { Team } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    name: `team ${faker.name.jobDescriptor()} - ${Math.random()}`,
    locked: false,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (props = {}) => {
  const { Team } = await import(`@grouparoo/core/${loadPath}`);
  return Team.create(await data(props)) as Team;
};
