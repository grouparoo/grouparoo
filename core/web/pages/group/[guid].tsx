import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { usePlugins } from "../../hooks/usePlugin";
import { Card } from "react-bootstrap";
import GroupEditForm from "../../components/forms/group/edit";
import GroupRulesEditForm from "../../components/forms/group/rulesEdit";
import GroupProfilesList from "../../components/lists/groupProfiles";
import RunsList from "../../components/lists/runs";
import LogsList from "./../../components/lists/logs";
import GroupDestinationsList from "../../components/lists/groupDestinations";

export default function (props) {
  const [group, setGroup] = useState({ name: "" });
  const [plugins, pluginMetadata] = usePlugins("group/tabs");
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/group/${props.query.guid}`
    );
    if (response?.group) {
      setGroup(response.group);
    }
  }

  const Tabs = [
    <Fragment key="edit">
      <h1>Edit Group</h1>
      <Card border="success">
        <Card.Body>
          <GroupEditForm {...props} />
        </Card.Body>
      </Card>
    </Fragment>,

    <Fragment key="rules">
      <h1>Rules</h1>
      <Card border="success">
        <Card.Body>
          <GroupRulesEditForm {...props} />
        </Card.Body>
      </Card>
    </Fragment>,

    <Fragment key="members">
      <h1>Group Members</h1>
      <GroupProfilesList {...props} />
    </Fragment>,

    <Fragment key="runs">
      <h1>Runs</h1>
      <RunsList {...props} />
    </Fragment>,

    <Fragment key="destinations">
      <h1>Group Destinations</h1>
      <GroupDestinationsList {...props} />
    </Fragment>,

    <Fragment key="logs">
      <h1>Group Logs</h1>
      <LogsList {...props} ownerType="group" />
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
    <TabbedContainer
      name={group.name}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="group"
      defaultTab="rules"
      query={props.query}
    >
      {Tabs}
    </TabbedContainer>
  );
}
