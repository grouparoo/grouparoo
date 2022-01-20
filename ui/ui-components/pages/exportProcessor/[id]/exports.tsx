import Head from "next/head";
import { UseApi } from "../../../hooks/useApi";
import ExportsList from "../../../components/export/List";
import ExportProcessorTabs from "../../../components/tabs/ExportProcessor";
import PageHeader from "../../../components/PageHeader";
import StateBadge from "../../../components/badges/StateBadge";
import LockedBadge from "../../../components/badges/LockedBadge";

export default function Page(props) {
  const { exportProcessor } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {exportProcessor.name}</title>
      </Head>

      <ExportProcessorTabs exportProcessor={exportProcessor} />

      <ExportsList
        header={<h1>Export Processor {exportProcessor.id} - Exports</h1>}
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { client } = useApi();
  const { id } = ctx.query;
  const { exportProcessor } = await client.request(
    "get",
    `/exportProcessor/${id}`
  );
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { exportProcessor, ...exportListInitialProps };
};
