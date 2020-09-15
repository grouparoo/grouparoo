import { Run } from "@grouparoo/core";
import ScheduleFactory from "./schedule";

const data = async (props = {}) => {
  const defaultProps = {
    error: null,
    state: "complete",
    profilesCount: 0,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (owner?, props: { [key: string]: any } = {}) => {
  if (!owner) {
    owner = await ScheduleFactory();
  }

  props.creatorGuid = owner.guid;
  props.creatorType = owner.guid.match(/^sch_/)
    ? "schedule"
    : "profilePropertyRule";

  const instance = await Run.create(await data(props));
  return instance;
};
