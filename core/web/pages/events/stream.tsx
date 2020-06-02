import Head from "next/head";
import EventsList from "../../components/events/list";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Events</title>
      </Head>

      <EventsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return EventsList.hydrate(ctx);
};
