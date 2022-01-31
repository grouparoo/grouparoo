import { Notification } from "@grouparoo/core";
import { loadPath } from "../loadPath";

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

  return { ...defaultProps, ...props };
};

export default async (props = {}) => {
  const { Notification } = await import(`@grouparoo/core/${loadPath}`);
  return Notification.create(await data(props)) as Notification;
};
