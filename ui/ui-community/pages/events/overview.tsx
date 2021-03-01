import Head from "next/head";
import { Alert, Button, Card } from "react-bootstrap";
import EventsTotals from "@grouparoo/ui-components/components/visualizations/eventsTotals";
import EventsList from "@grouparoo/ui-components/components/events/list";
import EventsTypesList from "@grouparoo/ui-components/components/events/types";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Events</title>
      </Head>

      <h1>Events</h1>

      <Card>
        <Card.Body>
          <h2>Overview</h2>
          <EventsTotals {...props} />
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body>
          <h2>Types</h2>
          <Button href="/events/types">See All Types</Button>
          <br />
          <EventsTypesList {...props} hidePagination limit={25} />
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body>
          <h2>Stream</h2>
          <Button href="/events/stream">See Full Stream</Button>
          <br />
          <EventsList
            header={" "}
            {...props}
            hideSearch
            hidePagination
            limit={25}
          />
        </Card.Body>
      </Card>

      <br />

      <Alert variant="info">
        Looking for deeper event insights? Contact{" "}
        <a target="_new" href="https://www.grouparoo.com/meet">
          Grouparoo Sales
        </a>
        .
      </Alert>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const eventTotalsInitialProps = await EventsTotals.hydrate(ctx);
  const eventsStreamInitialProps = await EventsList.hydrate(ctx, { limit: 25 });
  const eventsTypesInitialProps = await EventsTypesList.hydrate(ctx, {
    limit: 25,
  });

  return {
    ...eventsStreamInitialProps,
    ...eventsTypesInitialProps,
    ...eventTotalsInitialProps,
  };
};
