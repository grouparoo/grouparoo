import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import LogsList from "../../../components/log/list";
import RecordTabs from "../../../components/tabs/record";
import {
  getRecordDisplayName,
  getRecordPageTitle,
} from "../../../components/record/getRecordDisplayName";

export default function Page(props) {
  const { record } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getRecordPageTitle(record)}</title>
      </Head>

      <RecordTabs record={record} />

      <LogsList
        header={
          <>
            <h1>{getRecordDisplayName(record)} - Logs</h1>
            <br />
          </>
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { record } = await execApi("get", `/record/${id}`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { record, ...logListInitialProps };
};
