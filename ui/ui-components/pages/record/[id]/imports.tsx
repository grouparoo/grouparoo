import Head from "next/head";
import { UseApi } from "../../../hooks/useApi";
import {
  getRecordDisplayName,
  getRecordPageTitle,
} from "../../../components/record/getRecordDisplayName";
import RecordTabs from "../../../components/tabs/record";
import ImportList from "../../../components/import/list";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import ModelBadge from "../../../components/badges/modelBadge";
import { Models } from "../../../utils/apiData";

export default function Page(props) {
  const {
    record,
    properties,
  }: { record: Models.GrouparooRecordType; properties: Models.PropertyType[] } =
    props;

  const uniqueRecordProperties = [];
  let email: string;
  properties.forEach((rule) => {
    if (rule.unique) {
      uniqueRecordProperties.push(rule.key);
    }

    if (rule.type === "email" && record.properties[rule.key]) {
      email = record.properties[rule.key].values.join(", ");
    }
  });

  return (
    <>
      <Head>
        <title>Grouparoo: {getRecordPageTitle(record)}</title>
      </Head>

      <RecordTabs record={record} />

      <ImportList
        header={
          <PageHeader
            title={`${getRecordDisplayName(record)} - Imports`}
            iconType="grouparooRecord"
            email={email}
            badges={[
              <StateBadge state={record.state} />,
              <ModelBadge
                modelName={record.modelName}
                modelId={record.modelId}
              />,
            ]}
          />
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { id } = ctx.query;
  const { record } = await execApi("get", `/record/${id}`);
  const { properties } = await execApi("get", `/properties`);
  const importListInitialProps = await ImportList.hydrate(ctx);
  return { record, properties, ...importListInitialProps };
};
