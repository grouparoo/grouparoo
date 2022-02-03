import { loadPath } from "../loadPath";
import { Log } from "@grouparoo/core";

const data = async (props = {}) => {
  const defaultProps = {
    topic: "test",
    verb: "create",
    message: "creating a log entry in a test",
    ownerId: "abc123",
    data: JSON.stringify({ thing: "stuff" }),

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { ...defaultProps, ...props };
};

export default async (props = {}) => {
  const { Log } = await import(`@grouparoo/core/${loadPath}`);
  return Log.create(await data(props)) as Log;
};
