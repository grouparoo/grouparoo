import Head from "next/head";
import RunsList from "@grouparoo/ui-components/components/runs/list";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/property";
import { Models } from "@grouparoo/ui-components/utils/apiData";

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
        <title>Grouparoo: {property.key} Runs</title>
      </Head>

      <PropertyTabs property={property} source={source} />

      <RunsList
        header={
          <PageHeader
            icon={source.app.icon}
            title={`${property.key} - Runs`}
            badges={[
              <LockedBadge object={property} />,
              <StateBadge state={property.state} />,
            ]}
          />
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { property } = await execApi("get", `/property/${guid}`);
  const { source } = await execApi("get", `/source/${property.sourceGuid}`);
  const runsListInitialProps = await RunsList.hydrate(ctx);
  return { property, source, ...runsListInitialProps };
};
