import Head from "next/head";
import Link from "next/link";
import LoadingTable from "@grouparoo/ui-components/components/LoadingTable";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/Property";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { generateClient } from "@grouparoo/ui-components/client/client";
import { withServerErrorHandler } from "@grouparoo/ui-components/utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "@grouparoo/ui-components/utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const { propertyId } = ctx.query;
  const client = generateClient(ctx);
  const { property } = await client.request<Actions.PropertyView>(
    "get",
    `/property/${propertyId}`
  );
  const { source } = await client.request<Actions.SourceView>(
    "get",
    `/source/${property.sourceId}`
  );
  const { groups } = await client.request<Actions.PropertyGroups>(
    "get",
    `/property/${propertyId}/groups`
  );

  return {
    props: {
      property,
      source,
      groups,
    },
  };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  property,
  groups,
  source,
}) => {
  return (
    <>
      <Head>
        <title>Grouparoo: {property.key}</title>
      </Head>

      <PropertyTabs property={property} source={source} />

      <PageHeader
        icon={source.app.icon}
        title={`${property.key} - Groups`}
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

      <LoadingTable loading={false}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Records Count</th>
            <th>Rules</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            return (
              <tr key={`group-${group.id}`}>
                <td>
                  <Link
                    href={`/model/${group.modelId}/group/${group.id}/rules`}
                  >
                    <a>{group.name}</a>
                  </Link>
                </td>
                <td>{group.recordsCount}</td>
                <td>
                  {group.rules.map((rule, idx) => (
                    <span key={`rule-${idx}`}>
                      <strong>{rule.key}</strong> {rule.operation.description}:{" "}
                      <code>
                        {rule.match
                          ? rule.match
                          : `${rule.relativeMatchNumber} ${rule.relativeMatchUnit} ${rule.relativeMatchDirection}`}
                      </code>
                      <br />
                    </span>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
    </>
  );
};

export default Page;
