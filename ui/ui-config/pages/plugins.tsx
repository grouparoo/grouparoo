import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { Table, Alert, Button } from "react-bootstrap";
import { useState } from "react";

export default function PluginsPage(props) {
  const { successHandler, errorHandler } = props;
  const [installedPlugins, setInstalledPlugins] = useState<
    Actions.PluginsInstalledList["plugins"]
  >(props.installedPlugins);
  const availablePlugins: Actions.PluginsAvailableList["plugins"] =
    props.availablePlugins;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function installPlugin(name: string) {
    setLoading(true);
    const response: Actions.PluginInstall = await execApi(
      "post",
      `/plugin/install`,
      { plugin: name }
    );
    setLoading(false);
    if (response.success) {
      successHandler.set({ message: "Plugin Installed" });
      loadInstalledPlugins();
    }
  }

  async function uninstallPlugin(name: string) {
    setLoading(true);
    const response: Actions.PluginInstall = await execApi(
      "post",
      `/plugin/uninstall`,
      { plugin: name }
    );
    setLoading(false);
    if (response.success) {
      successHandler.set({ message: "Plugin Uninstalled" });
      loadInstalledPlugins();
    }
  }

  async function loadInstalledPlugins() {
    setLoading(true);
    const response: Actions.PluginsInstalledList = await execApi(
      "get",
      `/plugins/installed`
    );
    setLoading(false);
    if (response.plugins) setInstalledPlugins(response.plugins);
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1>Config / Plugins</h1>
        </Col>
      </Row>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Installed</th>
          </tr>
        </thead>
        <tbody>
          {availablePlugins.map((plugin) => {
            const installedPlugin = installedPlugins.find(
              (p) => p.name === plugin.name
            );
            return (
              <tr key={`plugin-${plugin.name}`}>
                <td>{plugin.name}</td>
                <td>
                  {plugin.description}
                  <br />
                  <a href={plugin.links.repository} target="_blank">
                    Learn More
                  </a>
                </td>
                <td>
                  {installedPlugin ? (
                    <Alert variant="success">
                      {installedPlugin.currentVersion}
                    </Alert>
                  ) : (
                    <Button
                      disabled={loading}
                      onClick={() => installPlugin(plugin.name)}
                    >
                      Install v{plugin.version}
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

PluginsPage.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { plugins: installedPlugins } = await execApi(
    "get",
    `/plugins/installed`
  );
  const { plugins: availablePlugins } = await execApi(
    "get",
    `/plugins/available`
  );
  return { installedPlugins, availablePlugins };
};
