import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import Head from "next/head";
import Link from "next/link";
import LoadingTable from "@grouparoo/ui-components/components/loadingTable";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import PropertyTabs from "@grouparoo/ui-components/components/tabs/property";
import { Models } from "@grouparoo/ui-components/utils/apiData";

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
          <LockedBadge object={property} />,
          <StateBadge state={property.state} />,
        ]}
      />

      <LoadingTable loading={false}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Profiles Count</th>
            <th>Rules</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            return (
              <tr key={`group-${group.guid}`}>
                <td>
                  {group.type === "calculated" ? (
                    <Link
                      href="/group/[guid]/rules"
                      as={`/group/${group.guid}/rules`}
                    >
                      <a>{group.name}</a>
                    </Link>
                  ) : (
                    <Link
                      href="/group/[guid]/edit"
                      as={`/group/${group.guid}/edit`}
                    >
                      <a>{group.name}</a>
                    </Link>
                  )}
                </td>
                <td>{group.profilesCount}</td>
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

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { property } = await execApi("get", `/property/${guid}`);
  const { source } = await execApi("get", `/source/${property.sourceGuid}`);
  const { groups } = await execApi("get", `/property/${guid}/groups`);

  return { property, source, groups };
};
