import Head from "next/head";
import RunsList from "../components/runs/List";
import { NextPageWithInferredProps } from "../utils/pageHelper";
import { withServerErrorHandler } from "../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  return { props: RunsList.hydrate(ctx) };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  return (
    <>
      <Head>
        <title>Grouparoo: Runs</title>
      </Head>

      <RunsList {...props} />
    </>
  );
};

export default Page;
