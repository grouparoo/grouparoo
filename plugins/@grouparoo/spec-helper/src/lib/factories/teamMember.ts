import { loadPath } from "../loadPath";
import faker from "faker";
import TeamFactory from "./team";
import { Team, TeamMember } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    passwordHash: faker.random.alphaNumeric(10),
    lastLoginAt: new Date(),

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (team: Team, props: { [key: string]: any } = {}) => {
  const { TeamMember } = await import(`@grouparoo/core/${loadPath}`);
  if (!team) team = await TeamFactory();

  props.teamId = team.id;
  return TeamMember.create(await data(props)) as TeamMember;
};
