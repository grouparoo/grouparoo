import Head from "next/head";
import { getRecordDisplayName } from "../../../../../components/record/GetRecordDisplayName";
import RecordTabs from "../../../../../components/tabs/Record";
import ImportList from "../../../../../components/import/List";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { Actions, Models } from "../../../../../utils/apiData";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { generateClient } from "../../../../../client/client";

export default function Page(props) {
  const {
    record,
    properties,
  }: {
    record: Models.GrouparooRecordType;
    properties: Models.PropertyType[];
  } = props;

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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const client = generateClient(ctx);
  const { recordId, modelId } = ctx.query;
  const { record } = await client.request("get", `/record/${recordId}`);
  ensureMatchingModel("Record", record?.modelId, modelId.toString());
  const { properties } = await client.request("get", `/properties`, {
    modelId,
  });
  const importListInitialProps = await ImportList.hydrate(ctx);
  return { record, properties, ...importListInitialProps };
};
