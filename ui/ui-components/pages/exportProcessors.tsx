import Head from "next/head";
import ExportProcessorsList from "../components/exportProcessors/list";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Export Processors</title>
      </Head>

      <ExportProcessorsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return ExportProcessorsList.hydrate(ctx);
};
