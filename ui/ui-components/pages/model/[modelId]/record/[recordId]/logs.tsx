import Head from "next/head";
import { UseApi } from "../../../../../hooks/useApi";
import LogsList from "../../../../../components/log/list";
import RecordTabs from "../../../../../components/tabs/record";
import {
  getRecordDisplayName,
  getRecordPageTitle,
} from "../../../../../components/record/getRecordDisplayName";
import { Models } from "../../../../../utils/apiData";
import PageHeader from "../../../../../components/pageHeader";
import StateBadge from "../../../../../components/badges/stateBadge";
import ModelBadge from "../../../../../components/badges/modelBadge";
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
        <title>Grouparoo: {getRecordPageTitle(record)}</title>
      </Head>

      <RecordTabs record={record} />

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
  const { execApi } = UseApi(ctx);
  const { record } = await execApi("get", `/record/${recordId}`);
  ensureMatchingModel("Record", record?.modelId, modelId.toString());
  const { properties } = await execApi("get", `/properties`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { record, properties, ...logListInitialProps };
};
