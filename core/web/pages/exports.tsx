import Head from "next/head";
import ExportsList from "../components/lists/exports";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Exports</title>
      </Head>

      <h1>Exports</h1>
      <ExportsList {...props} />
    </>
  );
}
