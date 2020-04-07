import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Table } from "react-bootstrap";
import { useApi } from "../hooks/useApi";

function formatUrl(s) {
  let url = s;
  url = url.replace(/\.git$/, "");

  return (
    <a target="_blank" href={url}>
      {url}
    </a>
  );
}

export default function ({ apiVersion, errorHandler }) {
  const year = new Date().getFullYear();
  const [version, setVersion] = useState("...");
  const [plugins, setPlugins] = useState([]);
  const { execApi } = useApi(errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const statusResponse = await execApi("get", `/api/${apiVersion}/status`);
    setVersion(`v${statusResponse.version}`);

    const pluginsResponse = await execApi("get", `/api/${apiVersion}/plugins`);
    setPlugins(pluginsResponse.plugins);
  }

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
      <p>Connected to {version} of the Grouparoo API</p>

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
              <td>{plugin.version}</td>
              <td>{plugin.license}</td>
              <td>{formatUrl(plugin.url)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
