import { useApi } from "../../../hooks/useApi";
import Head from "next/head";
import Link from "next/link";
import LoadingTable from "../../../components/loadingTable";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";
import {
  ProfilePropertyRuleAPIData,
  GroupAPIData,
} from "../../../utils/apiData";

export default function Page({
  profilePropertyRule,
  groups,
  ops,
}: {
  profilePropertyRule: ProfilePropertyRuleAPIData;
  groups: GroupAPIData[];
  ops: any;
}) {
  return (
    <>
      <Head>
        <title>Grouparoo: {profilePropertyRule.key}</title>
      </Head>

      <ProfilePropertyRuleTabs profilePropertyRule={profilePropertyRule} />

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
                      <strong>{rule.key}</strong> {ops._dictionary[rule.op]}:{" "}
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
  const { profilePropertyRule } = await execApi(
    "get",
    `/profilePropertyRule/${guid}`
  );
  const { groups } = await execApi(
    "get",
    `/profilePropertyRule/${guid}/groups`
  );
  const { ops } = await execApi("get", `/groups/ruleOptions`);

  return { profilePropertyRule, groups, ops };
};
