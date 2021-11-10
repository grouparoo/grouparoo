import Head from "next/head";
import RunsList from "../components/runs/List";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Runs</title>
      </Head>

      <RunsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return RunsList.hydrate(ctx);
};
