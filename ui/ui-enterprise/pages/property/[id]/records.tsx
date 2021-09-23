import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import Head from "next/head";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/property";
import RecordsList from "@grouparoo/ui-components/components/record/list";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import { Models } from "@grouparoo/ui-components/utils/apiData";
import ModelBadge from "@grouparoo/ui-components/components/badges/modelBadge";

export default function Page(props) {
  const {
    property,
    source,
  }: {
    property: Models.PropertyType;
    source: Models.SourceType;
  } = props;

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
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { property } = await execApi("get", `/property/${id}`);
  const { source } = await execApi("get", `/source/${property.sourceId}`);
  const recordListInitialProps = await RecordsList.hydrate(
    ctx,
    property.key,
    "%"
  );

  return { property, source, ...recordListInitialProps };
};
