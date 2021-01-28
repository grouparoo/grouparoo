import Head from "next/head";
import LogsStream from "../../components/log/stream";
import LogsTabs from "../../components/tabs/logs";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <LogsTabs active="stream" />
      <LogsStream {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return LogsStream.hydrate(ctx);
};
