import { loadPath } from "../loadPath";
import faker from "@faker-js/faker";
import SourceFactory from "./source";
import { Schedule, Source } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    name: `schedule ${faker.company.companyName()} - ${Math.random()}`,
    options: { maxColumn: "updated_at" },
    mapping: {},
    recurring: false,
    incremental: true,
    recurringFrequency: null,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (source?: Source, props: { [key: string]: any } = {}) => {
  const { Schedule } = await import(`@grouparoo/core/${loadPath}`);

  if (!source) {
    source = await SourceFactory();
    await source.setOptions({ table: "__testTable" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });
  }

  props.sourceId = source.id;
  const mergedProps = await data(props);
  const instance = new Schedule(mergedProps) as Schedule;
  await instance.save();

  if (Object.keys(mergedProps.options).length > 0) {
    await instance.setOptions(mergedProps.options);
  }

  await instance.update({ state: "ready" });

  return instance;
};
