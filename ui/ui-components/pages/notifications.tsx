import { useState } from "react";
import { UseApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Pagination from "../components/Pagination";
import LoadingTable from "../components/LoadingTable";
import { Models, Actions } from "../utils/apiData";
import { Badge } from "react-bootstrap";
import { formatTimestamp } from "../utils/formatTimestamp";
import { ErrorHandler } from "../utils/errorHandler";

export default function Page(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [notifications, setNotifications] = useState<Models.NotificationType[]>(
    props.notifications
  );
  const [total, setTotal] = useState<number>(props.total);
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  useSecondaryEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response: Actions.NotificationsList = await execApi(
      "get",
      `/notifications`,
      {
        limit,
        offset,
      }
    );
    setLoading(false);
    if (response?.notifications) {
      setNotifications(response.notifications);
      setTotal(response.total);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Notifications</title>
      </Head>

      <h1>Notifications</h1>
      <p>{total} notifications</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th></th>
            <th>Subject</th>
            <th>From</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => {
            return (
              <tr key={`notification-${notification.id}`}>
                <td>
                  {notification.readAt ? null : <Badge bg="warning">new</Badge>}
                </td>
                <td>
                  <Link href={`/notification/${notification.id}/edit`}>
                    <a>
                      {notification.readAt ? (
                        notification.subject
                      ) : (
                        <strong>{notification.subject}</strong>
                      )}
                    </a>
                  </Link>
                </td>
                <td>{notification.from}</td>
                <td>{formatTimestamp(notification.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { limit, offset } = ctx.query;
  const { notifications, total } = await execApi("get", `/notifications`, {
    limit,
    offset,
  });
  return { notifications, total };
};
