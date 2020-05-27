import { useApi } from "../../../hooks/useApi";
import Head from "next/head";
import Link from "next/link";
import LoadingTable from "../../../components/loadingTable";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";

export default function Page({ profilePropertyRule, groups }) {
  return (
    <>
      <Head>
        <title>Grouparoo: {profilePropertyRule.key}</title>
      </Head>

      <ProfilePropertyRuleTabs name={profilePropertyRule.key} />

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
                  <Link
                    href="/group/[guid]/edit"
                    as={`/group/${group.guid}/edit`}
                  >
                    <a>{group.name}</a>
                  </Link>
                  <br />
                  {group.guid}
                </td>
                <td>{group.profilesCount}</td>
                <td>
                  <ul>
                    {group.rules.map((rule, idx) => (
                      <li key={`rule-${idx}`}>
                        {rule.key}: {rule.op} {rule.match}
                      </li>
                    ))}
                  </ul>
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
  const { execApi } = useApi(null, ctx);
  const { profilePropertyRule, pluginOptions } = await execApi(
    "get",
    `/profilePropertyRule/${guid}`
  );
  const { groups } = await execApi(
    "get",
    `/profilePropertyRule/${guid}/groups`
  );

  return { profilePropertyRule, groups };
};
