import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Badge } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Moment from "react-moment";
import EventTabs from "../../../components/tabs/event";

import { EventAPIData } from "../../../utils/apiData";

export default function Page({ event }: { event: EventAPIData }) {
  return (
    <>
      <Head>
        <title>Grouparoo: {event.guid}</title>
      </Head>

      <EventTabs name={event.guid} />

      <h1>Event {event.guid}</h1>

      <p>
        Type: <Badge variant="secondary">{event.type}</Badge>
        <br />
        Producer:{" "}
        <Link
          href=""
          as={
            event?.producerGuid?.indexOf("key") === 0
              ? `/apiKey/${event.producerGuid}`
              : `/teamMember/${event.producerGuid}`
          }
          prefetch={false}
        >
          <a>{event.producerGuid}</a>
        </Link>
        <br />
        Profile:{" "}
        <Link href="/profile/[guid]" as={`/profile/${event.profileGuid}`}>
          <a>{event.profileGuid}</a>
        </Link>
      </p>

      <hr />
      <Row>
        <Col>
          <h2>Data</h2>

          <Table size="sm">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(event.data).map((k) => (
                <tr key={`data-${k}`}>
                  <td>
                    <strong>{k}</strong>
                  </td>
                  <td>{event.data[k]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Timeline</h2>
          <p>
            Total duration:{" "}
            <strong>
              <Moment
                duration={event.occurredAt}
                date={event.profileAssociatedAt}
              />
            </strong>
          </p>
          <Table size="sm">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Time</th>
                <th>Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Occurred At</td>
                <td>{new Date(event.occurredAt).toLocaleString()}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Created At</td>
                <td>{new Date(event.createdAt).toLocaleString()}</td>
                <td>
                  ⇣
                  <Moment duration={event.occurredAt} date={event.createdAt} />
                </td>
              </tr>
              <tr>
                <td>Associated at</td>
                <td>{new Date(event.profileAssociatedAt).toLocaleString()}</td>
                <td>
                  ⇣
                  <Moment
                    duration={event.createdAt}
                    date={event.profileAssociatedAt}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2>Properties</h2>

          <ul>
            <li>
              <strong>User Id</strong>: {event.userId}
            </li>
            <li>
              <strong>Anonymous Id</strong>: {event.anonymousId}
            </li>
            <li>
              <strong>IP Address</strong>: {event.ipAddress}
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { event } = await execApi("get", `/event/${guid}`);
  return { event };
};
