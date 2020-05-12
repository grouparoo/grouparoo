import EventStream from "../../components/lists/eventStream";
import Head from "next/head";

export default (props) => {
  return (
    <>
      <Head>
        <title>Grouparoo: Event Stream</title>
      </Head>

      <h1> Event Stream</h1>
      <EventStream {...props} />
    </>
  );
};
