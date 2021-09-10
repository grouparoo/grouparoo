import Head from "next/head";
import { UseApi } from "../../../hooks/useApi";
import ExportsList from "../../../components/export/list";
import ExportProcessorTabs from "../../../components/tabs/exportProcessor";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";

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
  const { execApi } = UseApi(ctx);
  const { id } = ctx.query;
  const { exportProcessor } = await execApi("get", `/exportProcessor/${id}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { exportProcessor, ...exportListInitialProps };
};
