import Head from "next/head";
import ExportsList from "../components/export/List";
import { NextPageWithInferredProps } from "../utils/pageHelper";
import { withServerErrorHandler } from "../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  return { props: await ExportsList.hydrate(ctx) };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  return (
    <>
      <Head>
        <title>Grouparoo: Destinations</title>
      </Head>

      <ExportsList {...props} />
    </>
  );
};

export default Page;
