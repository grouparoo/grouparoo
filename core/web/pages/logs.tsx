import Head from "next/head";
import LogsList from "../components/logs/list";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <LogsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return LogsList.hydrate(ctx);
};
