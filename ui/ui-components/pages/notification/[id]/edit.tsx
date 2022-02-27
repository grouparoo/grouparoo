import NotificationTabs from "../../../components/tabs/Notification";
import Head from "next/head";
import { Button } from "react-bootstrap";
import { Actions } from "../../../utils/apiData";
import Markdown from "react-markdown";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { generateClient } from "../../../client/client";
import { withServerErrorHandler } from "../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const { id } = ctx.query;
  const client = generateClient(ctx);
  const { notification } = await client.request<Actions.NotificationView>(
    "get",
    `/notification/${id}`
  );
  return { props: { notification } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  notification,
}) => {
  return (
    <>
      <Head>
        <title>Grouparoo: Notification - {notification.subject}</title>
      </Head>

      <NotificationTabs notification={notification} />

      <h1>{notification.subject}</h1>

      <p>
        From: {notification.from}
        <br />
        Created At: {formatTimestamp(notification.createdAt)}
      </p>

      <hr />

      <p>
        <Markdown>{notification.body}</Markdown>
      </p>

      {notification.cta && notification.ctaLink ? (
        <Button size="sm" href={notification.ctaLink}>
          {notification.cta}
        </Button>
      ) : null}
    </>
  );
};

export default Page;
