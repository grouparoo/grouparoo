import Head from "next/head";
import ImportsList from "../components/lists/imports";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Imports</title>
      </Head>

      <h1>Imports</h1>
      <ImportsList {...props} />
    </>
  );
}
