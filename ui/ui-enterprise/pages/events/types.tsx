import Head from "next/head";
import EventTypesList from "@grouparoo/ui-components/components/events/types";
import { Alert } from "react-bootstrap";
import Link from "next/link";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Event Types</title>
      </Head>

      <Alert variant="info">
        <Link href="/events/overview">
          <a>← Back to Event Overview</a>
        </Link>
      </Alert>

      <h1>Event Types</h1>

      <EventTypesList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return EventTypesList.hydrate(ctx);
};
