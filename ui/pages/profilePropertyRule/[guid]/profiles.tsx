import { useApi } from "../../../hooks/useApi";
import Head from "next/head";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";
import ProfilesList from "../../../components/profile/list";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";
import { Models } from "../../../utils/apiData";

export default function Page(props) {
  const {
    profilePropertyRule,
    source,
  }: {
    profilePropertyRule: Models.ProfilePropertyRuleType;
    source: Models.SourceType;
  } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {profilePropertyRule.key} Profiles</title>
      </Head>

      <ProfilePropertyRuleTabs
        profilePropertyRule={profilePropertyRule}
        source={source}
      />

      <ProfilesList
        {...props}
        header={
          <PageHeader
            icon={source.app.icon}
            title={`${profilePropertyRule.key} - Profiles`}
            badges={[
              <LockedBadge object={profilePropertyRule} />,
              <StateBadge state={profilePropertyRule.state} />,
            ]}
          />
        }
        searchKey={profilePropertyRule.key}
        searchValue="%"
      />
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
  const { source } = await execApi(
    "get",
    `/source/${profilePropertyRule.sourceGuid}`
  );
  const profileListInitialProps = await ProfilesList.hydrate(
    ctx,
    profilePropertyRule.key,
    "%"
  );

  return { profilePropertyRule, source, ...profileListInitialProps };
};
