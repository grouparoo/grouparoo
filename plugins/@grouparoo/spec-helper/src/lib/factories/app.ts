import { loadPath } from "../loadPath";
import faker from "@faker-js/faker";
import { App } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    name: `app ${faker.name.jobDescriptor()} - ${Math.random()}`,
    type: "test-plugin-app",
    options: { fileId: faker.finance.bitcoinAddress() },

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (props = {}) => {
  const { App } = await import(`@grouparoo/core/${loadPath}`);
  const mergedProps = await data(props);
  const instance = (await App.create(mergedProps)) as App;

  if (Object.keys(mergedProps.options).length > 0) {
    await instance.setOptions(mergedProps.options);
  }

  await instance.update({ state: "ready" });

  return instance;
};
