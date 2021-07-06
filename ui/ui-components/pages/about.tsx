import Head from "next/head";
import { client } from "../hooks/useApi";
import { Table, Badge, Alert, Button } from "react-bootstrap";
import { useApi } from "../hooks/useApi";
import { Actions } from "../utils/apiData";

const upgradeHelpPage =
  "https://www.grouparoo.com/docs/support/upgrading-grouparoo";

function formatUrl(s = "unknown", label: string) {
  const url = s.replace(/\.git$/, "");

  return (
    <a target="_blank" href={url === "unknown" ? "#" : url}>
      {label}
    </a>
  );
}

export default function Page({
  plugins,
}: {
  plugins: Actions.PluginsInstalledList["plugins"];
}) {
  const hasOutOfDatePlugin = plugins.find((p) => !p.upToDate) ? true : false;

  return (
    <>
      <Head>
        <title>Grouparoo: About</title>
      </Head>

      <h1>About this Grouparoo Instance</h1>
      <p>Welcome to your Grouparoo instance!</p>

      <p>
        You can learn more and get help by visiting{" "}
        <a target="_blank" href="https://www.grouparoo.com">
          www.grouparoo.com
        </a>
        .
      </p>

      <h2>API Version</h2>
      <p>
        <strong>
          Connected to{" "}
          <Badge variant="info" data-testid="apiVersion">
            {client.apiVersion}
          </Badge>{" "}
          of the Grouparoo API.
        </strong>
      </p>

      <h2>Plugins</h2>

      {hasOutOfDatePlugin ? (
        <Alert variant="warning">
          Some of the plugins installed in this Grouparoo cluster are out of
          date.
          <br />
          <br />
          <Button
            variant="warning"
            size="sm"
            href={upgradeHelpPage}
            target="_new"
          >
            Learn about upgrading your Grouparoo cluster
          </Button>
        </Alert>
      ) : null}

      <p>The following plugins are active:</p>
      <Table size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Installed Version</th>
            <th>Latest Version</th>
            <th>Links</th>
            <th>License</th>
          </tr>
        </thead>
        <tbody>
          {plugins.map((plugin, idx) => (
            <tr key={`plugin-${plugin.name}`}>
              <td>{plugin.name}</td>
              <td>
                {plugin.currentVersion}{" "}
                {!plugin.upToDate ? (
                  <Badge variant={"warning"}>Out of Date</Badge>
                ) : null}
              </td>
              <td>{plugin.latestVersion}</td>
              <td>
                {formatUrl(plugin.url, "homepage")} |{" "}
                {formatUrl(`https://www.npmjs.com/${plugin.name}`, "npm")}
              </td>
              <td>{plugin.license}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { plugins } = await execApi("get", `/plugins/installed`);
  return { plugins };
};
