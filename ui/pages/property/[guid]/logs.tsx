import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import LogsList from "../../../components/log/list";
import PropertyTabs from "../../../components/tabs/property";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";
import { Models } from "../../../utils/apiData";

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
        <title>Grouparoo: Logs</title>
      </Head>

      <PropertyTabs property={property} source={source} />

      <LogsList
        header={
          <PageHeader
            icon={source.app.icon}
            title={`${property.key} - Logs`}
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
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { property, source, ...logListInitialProps };
};
