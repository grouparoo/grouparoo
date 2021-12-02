import Head from "next/head";
import { UseApi } from "../../../../../hooks/useApi";
import ExportsList from "../../../../../components/export/List";
import { getRecordDisplayName } from "../../../../../components/record/GetRecordDisplayName";
import RecordTabs from "../../../../../components/tabs/Record";
import { Models } from "../../../../../utils/apiData";
import PageHeader from "../../../../../components/PageHeader";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import StateBadge from "../../../../../components/badges/StateBadge";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";

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
        <title>Grouparoo: {getRecordDisplayName(record)}</title>
      </Head>

      <RecordTabs record={record} />

      <ExportsList
        header={
          <PageHeader
            title={`${getRecordDisplayName(record)} - Exports`}
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { execApi } = UseApi(ctx);
  const { recordId, modelId } = ctx.query;
  const { record } = await execApi("get", `/record/${recordId}`);
  ensureMatchingModel("Record", record?.modelId, modelId.toString());
  const { properties } = await execApi("get", `/properties`, { modelId });
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { record, properties, ...exportListInitialProps };
};
