import Head from "next/head";
import LogsStream from "../../components/log/Stream";
import LogsTabs from "../../components/tabs/Logs";

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
