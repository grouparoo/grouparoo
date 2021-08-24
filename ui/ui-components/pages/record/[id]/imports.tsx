import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import {
  getRecordDisplayName,
  getRecordPageTitle,
} from "../../../components/record/getRecordDisplayName";
import RecordTabs from "../../../components/tabs/record";
import ImportList from "../../../components/import/list";

export default function Page(props) {
  const { record } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getRecordPageTitle(record)}</title>
      </Head>

      <RecordTabs record={record} />

      <ImportList
        header={
          <>
            <h1>{getRecordDisplayName(record)} - Imports</h1>
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
  const importListInitialProps = await ImportList.hydrate(ctx);
  return { record, ...importListInitialProps };
};
