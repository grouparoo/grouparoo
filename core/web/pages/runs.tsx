import Head from "next/head";
import RunsList from "../components/lists/runs";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Runs</title>
      </Head>

      <h1>Runs</h1>
      <RunsList {...props} />
    </>
  );
}
