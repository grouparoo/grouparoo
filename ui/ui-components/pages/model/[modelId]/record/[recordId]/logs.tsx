import Head from "next/head";
import { UseApi } from "../../../../../hooks/useApi";
import LogsList from "../../../../../components/log/List";
import RecordTabs from "../../../../../components/tabs/Record";
import { getRecordDisplayName } from "../../../../../components/record/GetRecordDisplayName";
import { Actions, Models } from "../../../../../utils/apiData";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";

export default function Page(props) {
  const {
    record,
    model,
    properties,
  }: {
    record: Models.GrouparooRecordType;
    model: Models.GrouparooModelType;
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

      <RecordTabs record={record} model={model} />

      <LogsList
        header={
          <PageHeader
            title={`${getRecordDisplayName(record)} - Logs`}
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
  const { recordId, modelId } = ctx.query;
  const { client } = useApi();
  const { record } = await client.request("get", `/record/${recordId}`);
  ensureMatchingModel("Record", record?.modelId, modelId.toString());
  const { model } = await client.request<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const { properties } = await client.request("get", `/properties`, {
    modelId,
  });
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { record, model, properties, ...logListInitialProps };
};
