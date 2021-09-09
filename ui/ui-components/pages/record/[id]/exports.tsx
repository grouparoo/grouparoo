import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import ExportsList from "../../../components/export/list";
import {
  getRecordDisplayName,
  getRecordPageTitle,
} from "../../../components/record/getRecordDisplayName";
import RecordTabs from "../../../components/tabs/record";

export default function Page(props) {
  const { record } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getRecordPageTitle(record)}</title>
      </Head>

      <RecordTabs record={record} />

      <ExportsList
        header={
          <>
            <h1>{getRecordDisplayName(record)} - Exports</h1>
            <br />
          </>
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { id } = ctx.query;
  const { record } = await execApi("get", `/record/${id}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { record, ...exportListInitialProps };
};
