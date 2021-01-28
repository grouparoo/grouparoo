import Head from "next/head";
import EventsList from "../../components/events/list";
import { Alert } from "react-bootstrap";
import Link from "next/link";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Event Stream</title>
      </Head>

      <Alert variant="info">
        <Link href="/events/overview">
          <a>← Back to Event Overview</a>
        </Link>
      </Alert>

      <EventsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return EventsList.hydrate(ctx);
};
