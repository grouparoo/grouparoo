import { loadPath } from "../loadPath";
import faker from "faker";
import AppFactory from "./app";
import { Destination } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    name: `destination ${faker.company.companyName()} - ${Math.random()}`,
    type: "test-plugin-export",
    options: { table: "out table" },
    syncMode: "sync",
    mapping: {},

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (app?, props: { [key: string]: any } = {}) => {
  const { Destination } = await import(`@grouparoo/core/${loadPath}`);
  if (!app) app = await AppFactory();

  props.appId = app.id;
  const mergedProps = await data(props);
  const instance = new Destination(mergedProps) as Destination;
  await instance.save();

  if (Object.keys(mergedProps.options).length > 0) {
    await instance.setOptions(mergedProps.options);
  }

  if (Object.keys(mergedProps.mapping).length > 0) {
    await instance.setMapping(mergedProps.mapping);
  }

  await instance.update({ state: "ready" });

  return instance;
};
