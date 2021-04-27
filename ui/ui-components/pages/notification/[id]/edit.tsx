import NotificationTabs from "../../../components/tabs/notification";
import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import { Button } from "react-bootstrap";
import Moment from "react-moment";
import { Models } from "../../../utils/apiData";
import Markdown from "react-markdown";

export default function Page(props) {
  const { notification }: { notification: Models.NotificationType } = props;

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
        Created At: <Moment fromNow>{notification.createdAt}</Moment>
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
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { notification } = await execApi("get", `/notification/${id}`);
  return { notification };
};
