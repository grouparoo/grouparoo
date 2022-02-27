import Head from "next/head";
import ExportsList from "../../../components/export/List";
import ExportProcessorTabs from "../../../components/tabs/ExportProcessor";
import { generateClient } from "../../../client/client";
import { withServerErrorHandler } from "../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../utils/pageHelper";
import { Actions } from "../../../utils/apiData";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { id } = ctx.query;
  const { exportProcessor } = await client.request<Actions.ExportProcessorView>(
    "get",
    `/exportProcessor/${id}`
  );
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { props: { exportProcessor, ...exportListInitialProps } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  const { exportProcessor } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {exportProcessor.id}</title>
      </Head>

      <ExportProcessorTabs exportProcessor={exportProcessor} />

      <ExportsList
        header={<h1>Export Processor {exportProcessor.id} - Exports</h1>}
        {...props}
      />
    </>
  );
};

export default Page;
