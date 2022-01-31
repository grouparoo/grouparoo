import { Run } from "@grouparoo/core";
import { loadPath } from "../loadPath";
import ScheduleFactory from "./schedule";

const data = async (props = {}) => {
  const defaultProps = {
    error: null,
    state: "complete",
    recordsCount: 0,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (owner?, props: { [key: string]: any } = {}) => {
  const { Run } = await import(`@grouparoo/core/${loadPath}`);
  if (!owner) owner = await ScheduleFactory();

  props.creatorId = owner.id;
  props.creatorType = owner.constructor.name.toLowerCase();

  const instance = (await Run.create(await data(props))) as Run;
  return instance;
};
