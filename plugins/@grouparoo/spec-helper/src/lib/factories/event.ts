import { loadPath } from "../loadPath";
import faker from "faker";
import * as UUID from "uuid";

const data = async (props = {}) => {
  const defaultProps = {
    producerId: "test-event",
    ipAddress: faker.internet.ip(),
    type: faker.lorem.slug(),
    anonymousId: UUID.v4(),
    data: {},

    occurredAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  const { Event } = await import(`@grouparoo/core/${loadPath}`);
  const mergedProps = await data(props);
  const instance = new Event(mergedProps);

  await instance.save();
  await instance.setData(mergedProps.data);

  return instance;
};
