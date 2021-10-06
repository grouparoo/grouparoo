import Head from "next/head";
import { UseApi } from "../../../../../hooks/useApi";
import ExportsList from "../../../../../components/export/list";
import DestinationTabs from "../../../../../components/tabs/destination";
import PageHeader from "../../../../../components/pageHeader";
import StateBadge from "../../../../../components/badges/stateBadge";
import LockedBadge from "../../../../../components/badges/lockedBadge";
import ModelBadge from "../../../../../components/badges/modelBadge";

export default function Page(props) {
  const { destination } = props;

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
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { destinationId } = ctx.query;
  const { destination } = await execApi("get", `/destination/${destinationId}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { destination, ...exportListInitialProps };
};
