import Head from "next/head";
import { getRecordDisplayName } from "../../../../../components/record/GetRecordDisplayName";
import RecordTabs from "../../../../../components/tabs/Record";
import ImportList from "../../../../../components/import/List";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { Actions } from "../../../../../utils/apiData";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { generateClient } from "../../../../../client/client";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { recordId, modelId } = ctx.query;
  const { record } = await client.request<Actions.RecordView>(
    "get",
    `/record/${recordId}`
  );
  ensureMatchingModel("Record", record?.modelId, modelId.toString());
  const { properties } = await client.request<Actions.PropertiesList>(
    "get",
    `/properties`,
    {
      modelId,
    }
  );
  const importListInitialProps = await ImportList.hydrate(ctx);
  return { props: { record, properties, ...importListInitialProps } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  record,
  properties,
  ...props
}) => {
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
};

export default Page;
