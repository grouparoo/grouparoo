import Head from "next/head";
import RecordsList from "../components/record/list";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Records</title>
      </Head>

      <RecordsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return RecordsList.hydrate(ctx);
};
