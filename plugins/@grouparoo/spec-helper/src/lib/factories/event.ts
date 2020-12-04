import faker from "faker";
import * as UUID from "uuid";
import { Event } from "@grouparoo/core/src";

const data = async (props = {}) => {
  const defaultProps = {
    producerGuid: "test-event",
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
  const mergedProps = await data(props);
  const instance = new Event(mergedProps);

  await instance.save();
  await instance.setData(mergedProps.data);

  return instance;
};
