import faker from "faker";
import { Source } from "./../../src/models/Source";
import AppFactory from "./app";

const data = async (props = {}) => {
  const defaultProps = {
    name: `schedule ${faker.company.companyName()} - ${Math.random()}`,
    type: "test-plugin-import",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (app?, props: { [key: string]: any } = {}) => {
  if (!app) {
    app = await AppFactory();
  }

  props.appGuid = app.guid;
  const mergedProps = await data(props);
  const instance = new Source(mergedProps);
  await instance.save();

  return instance;
};
