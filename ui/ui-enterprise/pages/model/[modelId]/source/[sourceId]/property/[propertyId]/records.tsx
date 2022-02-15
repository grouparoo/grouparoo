import Head from "next/head";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/Property";
import RecordsList from "@grouparoo/ui-components/components/record/List";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { generateClient } from "@grouparoo/ui-components/client/client";
import { withServerErrorHandler } from "@grouparoo/ui-components/utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "@grouparoo/ui-components/utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const { propertyId } = ctx.query;
  const client = generateClient(ctx);
  const { property } = await client.request<Actions.PropertyView>(
    "get",
    `/property/${propertyId}`
  );
  const { source } = await client.request<Actions.SourceView>(
    "get",
    `/source/${property.sourceId}`
  );
  const recordListInitialProps = await RecordsList.hydrate(
    ctx,
    property.key,
    "%"
  );

  return {
    props: {
      property,
      source,
      ...recordListInitialProps,
    },
  };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  const { property, source } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {property.key} Records</title>
      </Head>

      <PropertyTabs property={property} source={source} />

      <RecordsList
        {...props}
        header={
          <PageHeader
            icon={source.app.icon}
            title={`${property.key} - Records`}
            badges={[
              <LockedBadge key="header-badge-1" object={property} />,
              <StateBadge key="header-badge-2" state={property.state} />,
              <ModelBadge
                key="header-badge-3"
                modelName={source.modelName}
                modelId={source.modelId}
              />,
            ]}
          />
        }
        searchKey={property.key}
        searchValue="%"
      />
    </>
  );
};

export default Page;
