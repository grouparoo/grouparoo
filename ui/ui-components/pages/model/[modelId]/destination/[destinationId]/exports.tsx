import Head from "next/head";
import ExportsList from "../../../../../components/export/List";
import DestinationTabs from "../../../../../components/tabs/Destination";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { Actions } from "../../../../../utils/apiData";
import { generateClient } from "../../../../../client/client";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { destinationId, modelId } = ctx.query;
  const { destination } = await client.request<Actions.DestinationView>(
    "get",
    `/destination/${destinationId}`
  );
  ensureMatchingModel("Destination", destination.modelId, modelId.toString());

  const exportListInitialProps = await ExportsList.hydrate(ctx);

  return { props: { destination, ...exportListInitialProps } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  destination,
  ...props
}) => {
  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs destination={destination} />

      <ExportsList
        header={
          <PageHeader
            icon={destination.app.icon}
            title={destination.name}
            badges={[
              <LockedBadge object={destination} />,
              <StateBadge state={destination.state} />,
              <ModelBadge
                modelName={destination.modelName}
                modelId={destination.modelId}
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
