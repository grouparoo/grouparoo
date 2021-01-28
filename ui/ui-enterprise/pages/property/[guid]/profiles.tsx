import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import Head from "next/head";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/property";
import ProfilesList from "@grouparoo/ui-components/components/profile/list";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
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
        <title>Grouparoo: {property.key} Profiles</title>
      </Head>

      <PropertyTabs property={property} source={source} />

      <ProfilesList
        {...props}
        header={
          <PageHeader
            icon={source.app.icon}
            title={`${property.key} - Profiles`}
            badges={[
              <LockedBadge object={property} />,
              <StateBadge state={property.state} />,
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
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { property } = await execApi("get", `/property/${guid}`);
  const { source } = await execApi("get", `/source/${property.sourceGuid}`);
  const profileListInitialProps = await ProfilesList.hydrate(
    ctx,
    property.key,
    "%"
  );

  return { property, source, ...profileListInitialProps };
};
