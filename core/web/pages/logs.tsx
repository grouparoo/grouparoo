import Head from "next/head";
import LogsList from "../components/log/list";

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
