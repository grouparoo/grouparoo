import Head from "next/head";
import { Table, Badge, Alert } from "react-bootstrap";
import { Actions } from "../utils/apiData";
import LinkButton from "../components/LinkButton";
import { getRequestContext, useApi } from "../contexts/api";
import { Client } from "../client/client";

const upgradeHelpPage =
  "https://www.grouparoo.com/docs/support/upgrading-grouparoo";

function formatUrl(s = "unknown", label: string) {
  const url = s.replace(/\.git$/, "");

  return (
    <a target="_blank" href={url === "unknown" ? "#" : url} rel="noreferrer">
      {label}
    </a>
  );
}

export default function Page({
  plugins,
}: {
  plugins: Actions.PluginsList["plugins"];
}) {
  const { client } = useApi();
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
        <a target="_blank" href="https://www.grouparoo.com" rel="noreferrer">
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
          <LinkButton
            variant="warning"
            size="sm"
            href={upgradeHelpPage}
            target="_new"
          >
            Learn about upgrading your Grouparoo cluster
          </LinkButton>
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
          {plugins.map((plugin) => (
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
  const client = new Client(getRequestContext(ctx));
  const { plugins }: Actions.PluginsList = await client.action(
    "get",
    `/plugins`,
    {
      includeInstalled: true,
      includeAvailable: false,
    }
  );
  return { plugins };
};
