import { Message } from "@grouparoo/core/api/src";

const data = async (props = {}) => {
  const defaultProps = {
    from: "grouparoo",
    subject: "a message",
    body: `# A message
Another Line.
`,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  return Message.create(await data(props));
};
