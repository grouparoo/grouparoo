import { Notification } from "@grouparoo/core/api/src";

const data = async (props = {}) => {
  const defaultProps = {
    from: "grouparoo",
    subject: "A notification from Grouparoo",
    body: `# A notification
Another Line.
`,
    cta: "Click Me!",
    ctaLink: "https://www.grouparoo.com",

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  return Notification.create(await data(props));
};
