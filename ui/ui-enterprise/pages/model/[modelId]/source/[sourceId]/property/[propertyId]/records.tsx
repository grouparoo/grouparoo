import Head from "next/head";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/Property";
import RecordsList from "@grouparoo/ui-components/components/record/List";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import { Actions, Models } from "@grouparoo/ui-components/utils/apiData";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { NextPageContext } from "next";
import { generateClient } from "@grouparoo/ui-components/client/client";

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
        <title>Grouparoo: {property.key} Records</title>
      </Head>

      <PropertyTabs property={property} source={source} model={model} />

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
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { propertyId, modelId } = ctx.query;
  const client = generateClient(ctx);
  const { property } = await client.request("get", `/property/${propertyId}`);
  const { source } = await client.request(
    "get",
    `/source/${property.sourceId}`
  );
  const { model } = await client.request<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const recordListInitialProps = await RecordsList.hydrate(
    ctx,
    property.key,
    "%"
  );

  return { model, property, source, ...recordListInitialProps };
};
