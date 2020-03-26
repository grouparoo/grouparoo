import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { usePlugins } from "../../hooks/usePlugin";
import { Card, Alert } from "react-bootstrap";
import ProfilePropertyRuleEditForm from "../../components/forms/profilePropertyRule/edit";
import ProfilesList from "../../components/lists/profiles";
import ProfilePropertyRulesGroupsList from "../../components/lists/profilePropertyRuleGroups";
import RunsList from "../../components/lists/runs";
import Loader from "../../components/loader";
import Link from "next/link";

export default function (props) {
  const [profilePropertyRule, setProfilePropertyRule] = useState({
    key: "",
    source: { name: "", guid: "" },
  });
  const { execApi } = useApi(props.errorHandler);
  const [plugins, pluginMetadata] = usePlugins("profilePropertyRules/tabs");
  const profilesListProps = Object.assign({}, props);
  profilesListProps.hideSearch = true;
  profilesListProps.query.searchKey = profilePropertyRule.key;
  profilesListProps.query.searchValue = "*";

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/profilePropertyRule/${props.query.guid}`
    );
    if (response?.profilePropertyRule) {
      setProfilePropertyRule(response.profilePropertyRule);
    }
  }

  const Tabs = [
    <Fragment key="edit">
      <h1>Edit Profile Property Rule</h1>
      <Card border="success">
        <Card.Body>
          <ProfilePropertyRuleEditForm {...props} />
        </Card.Body>
      </Card>
    </Fragment>,

    <Fragment key="profiles">
      {profilePropertyRule.key === "" ? (
        <Loader />
      ) : (
        <ProfilesList {...profilesListProps} />
      )}
    </Fragment>,

    <Fragment key="groups">
      <ProfilePropertyRulesGroupsList {...props} />
    </Fragment>,

    <Fragment key="runs">
      <RunsList {...props} />
    </Fragment>,
  ];

  {
    plugins.map((PluginComponent, idx) => {
      Tabs.push(
        <Fragment key={pluginMetadata[idx].key}>
          <PluginComponent {...props} useApi={useApi} />
        </Fragment>
      );
    });
  }

  return (
    <>
      <Alert variant="info">
        <Link
          href="/source/[guid]"
          as={`/source/${profilePropertyRule.source.guid}`}
        >
          <a>↞ Back to Source {profilePropertyRule.source.name}</a>
        </Link>
      </Alert>

      <TabbedContainer
        errorHandler={props.errorHandler}
        apiVersion={props.apiVersion}
        type="profilePropertyRule"
        defaultTab="edit"
        query={props.query}
      >
        {Tabs}
      </TabbedContainer>
    </>
  );
}
