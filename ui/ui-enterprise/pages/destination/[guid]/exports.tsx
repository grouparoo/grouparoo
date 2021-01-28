import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import ExportsList from "@grouparoo/ui-components/components/export/list";
import DestinationTabs from "@grouparoo/ui-components/components/tabs/destination";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";

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
            ]}
          />
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { destination } = await execApi("get", `/destination/${guid}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { destination, ...exportListInitialProps };
};
