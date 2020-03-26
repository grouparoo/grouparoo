import Head from "next/head";
import TotalsList from "../components/visualizations/totals";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Dashboard</title>
      </Head>

      <h1>Dashboard</h1>
      <TotalsList {...props} />
    </>
  );
}
