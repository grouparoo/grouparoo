import { Run } from "./../../src/models/Run";
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

export default async (schedule?, props: { [key: string]: any } = {}) => {
  if (!schedule) {
    schedule = await ScheduleFactory();
  }

  props.creatorGuid = schedule.guid;
  props.creatorType = "schedule";

  const instance = await Run.create(await data(props));
  return instance;
};
