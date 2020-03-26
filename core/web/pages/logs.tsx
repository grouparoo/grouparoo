import Head from "next/head";
import LogsList from "../components/lists/logs";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <h1>Logs</h1>
      <LogsList {...props} />
    </>
  );
}
