import Head from "next/head";
import RunsList from "../../../components/runs/list";
import { useApi } from "../../../hooks/useApi";
import { Row, Col } from "react-bootstrap";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/stateBadge";
import LockedBadge from "../../../components/lockedBadge";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";
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
        <title>Grouparoo: {profilePropertyRule.key} Runs</title>
      </Head>

      <ProfilePropertyRuleTabs
        profilePropertyRule={profilePropertyRule}
        source={source}
      />

      <RunsList
        header={
          <Row>
            <Col md={1}>
              <AppIcon src={source.app.icon} fluid size={100} />
            </Col>
            <Col md={8}>
              <h1>{profilePropertyRule.key} - Runs</h1>
              <StateBadge state={profilePropertyRule.state} />{" "}
              <LockedBadge object={profilePropertyRule} />
            </Col>
          </Row>
        }
        {...props}
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
  const runsListInitialProps = await RunsList.hydrate(ctx);
  return { profilePropertyRule, source, ...runsListInitialProps };
};
