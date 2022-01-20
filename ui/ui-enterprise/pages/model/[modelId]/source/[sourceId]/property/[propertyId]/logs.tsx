import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import LogsList from "@grouparoo/ui-components/components/log/List";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/Property";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import { Actions, Models } from "@grouparoo/ui-components/utils/apiData";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { NextPageContext } from "next";

export default function Page(props) {
  const {
    model,
    property,
    source,
  }: {
    model: Models.GrouparooModelType;
    property: Models.PropertyType;
    source: Models.SourceType;
  } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <PropertyTabs property={property} source={source} model={model} />

      <LogsList
        header={
          <PageHeader
            icon={source.app.icon}
            title={`${property.key} - Logs`}
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
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { propertyId, modelId } = ctx.query;
  const { client } = useApi();
  const { model } = await client.request<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const { property } = await client.request("get", `/property/${propertyId}`);
  const { source } = await client.request(
    "get",
    `/source/${property.sourceId}`
  );
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { model, property, source, ...logListInitialProps };
};
