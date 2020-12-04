import { useApi } from "../../../hooks/useApi";
import Head from "next/head";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";
import ProfilesList from "../../../components/profile/list";
import { Row, Col } from "react-bootstrap";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/stateBadge";
import LockedBadge from "../../../components/lockedBadge";
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
          <Row>
            <Col md={1}>
              <AppIcon src={source.app.icon} fluid size={100} />
            </Col>
            <Col md={8}>
              <h1>{profilePropertyRule.key} - Profiles</h1>
              <StateBadge state={profilePropertyRule.state} />{" "}
              <LockedBadge object={profilePropertyRule} />
            </Col>
          </Row>
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
