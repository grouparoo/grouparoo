import { loadPath } from "../loadPath";
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
  const { Run } = await import(`@grouparoo/core/${loadPath}`);
  if (!owner) owner = await ScheduleFactory();

  props.creatorId = owner.id;
  props.creatorType = owner.id.match(/^sch_/) ? "schedule" : "property";

  const instance = await Run.create(await data(props));
  return instance;
};
