import Head from "next/head";
import { UseApi } from "../../../../../hooks/useApi";
import ExportsList from "../../../../../components/export/List";
import DestinationTabs from "../../../../../components/tabs/Destination";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { NextPageContext } from "next";
import { Actions } from "../../../../../utils/apiData";

export default function Page(props) {
  const { destination, model } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs destination={destination} model={model} />

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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { execApi } = UseApi(ctx);
  const { destinationId, modelId } = ctx.query;
  const { destination } = await execApi("get", `/destination/${destinationId}`);
  ensureMatchingModel("Destination", destination.modelId, modelId.toString());

  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const exportListInitialProps = await ExportsList.hydrate(ctx);

  return { destination, model, ...exportListInitialProps };
};
