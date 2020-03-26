import faker from "faker";
import { TeamMember } from "./../../src/models/TeamMember";
import TeamFactory from "./team";

const data = async (props = {}) => {
  const defaultProps = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    passwordHash: faker.random.uuid(),
    lastLoginAt: new Date(),

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (team, props: { [key: string]: any } = {}) => {
  if (!team) {
    team = await TeamFactory();
  }
  props.teamGuid = team.guid;
  return TeamMember.create(await data(props));
};
