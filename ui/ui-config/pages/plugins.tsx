import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { Table, Alert, Button } from "react-bootstrap";

export default function PluginsPage(props) {
  const installedPlugins: Actions.PluginsInstalledList["plugins"] =
    props.installedPlugins;
  const availablePlugins: Actions.PluginsAvailableList["plugins"] =
    props.availablePlugins;

  async function installPlugin(name: string) {}

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
                    <Button onClick={() => installPlugin(plugin.name)}>
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
