import Head from "next/head";
import ImportList from "../components/import/List";
import { NextPageWithInferredProps } from "../utils/pageHelper";
import { withServerErrorHandler } from "../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  return { props: await ImportList.hydrate(ctx) };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  return (
    <>
      <Head>
        <title>Grouparoo: Imports</title>
      </Head>

      <ImportList {...props} />
    </>
  );
};

export default Page;
