import Head from "next/head";
import LogsList from "../../components/log/list";
import LogsTabs from "../../components/tabs/logs";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <LogsTabs active="list" />
      <LogsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return LogsList.hydrate(ctx);
};
