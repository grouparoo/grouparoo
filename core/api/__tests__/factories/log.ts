import { Log } from "./../../src/models/Log";

const data = async (props = {}) => {
  const defaultProps = {
    topic: "test",
    verb: "create",
    message: "creating a log entry in a test",
    ownerGuid: "abc123",
    data: JSON.stringify({ thing: "stuff" }),

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  return Log.create(await data(props));
};
