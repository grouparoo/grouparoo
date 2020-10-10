import Head from "next/head";
import { Table, Badge } from "react-bootstrap";
import { useApi } from "../hooks/useApi";
import { Actions } from "../utils/apiData";

function formatUrl(s = "unknown") {
  const url = s.replace(/\.git$/, "");

  return (
    <a target="_blank" href={url === "unknown" ? "#" : url}>
      {url}
    </a>
  );
}

export default function Page({
  version,
  plugins,
}: {
  version: string;
  plugins: Actions.PluginsList["plugins"];
}) {
  return (
    <>
      <Head>
        <title>Grouparoo: About</title>
      </Head>

      <h1>About this Grouparoo Instance</h1>
      <p>Welcome to your Grouparoo instance!</p>

      <p>
        You can learn more and get help by visiting our website,{" "}
        <a target="_blank" href="https://www.grouparoo.com">
          www.grouparoo.com
        </a>
        .
      </p>

      <h2>Version</h2>
      <p>
        <strong>
          Connected to <Badge variant="info">{version}</Badge> of the Grouparoo
          API.
        </strong>
      </p>

      <h2>Plugins</h2>
      <p>The following plugins are active:</p>
      <Table size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
            <th>License</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {plugins.map((plugin) => (
            <tr key={`plugin-${plugin.name}`}>
              <td>{plugin.name}</td>
              <td>
                <Badge
                  variant={
                    plugin.version === plugin.latestVersion ||
                    plugin.latestVersion === "unknown"
                      ? "success"
                      : "warning"
                  }
                >
                  {plugin.version}
                </Badge>
              </td>
              <td>{plugin.license}</td>
              <td>{formatUrl(plugin.url)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { version } = await execApi("get", `/status/private`);
  const { plugins } = await execApi("get", `/plugins`);
  return { version, plugins };
};
