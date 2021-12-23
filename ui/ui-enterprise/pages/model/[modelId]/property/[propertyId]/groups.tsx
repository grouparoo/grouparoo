import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import Head from "next/head";
import Link from "next/link";
import LoadingTable from "@grouparoo/ui-components/components/LoadingTable";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/Property";
import { Models } from "@grouparoo/ui-components/utils/apiData";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { NextPageContext } from "next";

export default function Page({
  property,
  groups,
  source,
}: {
  property: Models.PropertyType;
  groups: Models.GroupType[];
  source: Models.SourceType;
}) {
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
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { propertyId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { property } = await execApi("get", `/property/${propertyId}`);
  const { source } = await execApi("get", `/source/${property.sourceId}`);
  const { groups } = await execApi("get", `/property/${propertyId}/groups`);

  return { property, source, groups };
};
