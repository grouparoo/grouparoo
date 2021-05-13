import { loadPath } from "../loadPath";
import faker from "faker";
import AppFactory from "./app";

const data = async (props = {}) => {
  const defaultProps = {
    name: `source ${faker.company.companyName()} - ${Math.random()}`,
    type: "test-plugin-import",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (app?, props: { [key: string]: any } = {}) => {
  const { Source } = await import(`@grouparoo/core/${loadPath}`);
  if (!app) app = await AppFactory();

  props.appId = app.id;
  const mergedProps = await data(props);
  const instance = new Source(mergedProps);
  await instance.save();

  return instance;
};
