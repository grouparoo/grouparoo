import faker from "faker";
import { Schedule } from "./../../src/models/Schedule";
import SourceFactory from "./source";

const data = async (props = {}) => {
  const defaultProps = {
    name: `schedule ${faker.company.companyName()} - ${Math.random()}`,
    options: { maxColumn: "updated_at" },
    mapping: {},
    recurring: false,
    recurringFrequency: null,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (source?, props: { [key: string]: any } = {}) => {
  if (!source) {
    source = await SourceFactory();
    await source.setOptions({ table: "__testTable" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });
  }

  props.sourceGuid = source.guid;
  const mergedProps = await data(props);
  const instance = new Schedule(mergedProps);
  await instance.save();

  if (Object.keys(mergedProps.options).length > 0) {
    await instance.setOptions(mergedProps.options);
  }

  await instance.update({ state: "ready" });

  return instance;
};
