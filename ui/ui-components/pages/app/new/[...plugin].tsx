import { useApi } from "../../../contexts/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Alert, Badge, Card } from "react-bootstrap";
import { errorHandler } from "../../../eventHandlers";
import { Actions } from "../../../utils/apiData";
import LoadingButton from "../../../components/LoadingButton";
import PageHeader from "../../../components/PageHeader";
import { generateClient } from "../../../client/client";
import { NextPageContext } from "next";

export default function Page(props) {
  const {
    plugins,
  }: {
    plugins: Actions.PluginsList["plugins"];
  } = props;
  const router = useRouter();
  const pluginName = router.asPath.replace(`/app/new/`, "");
  const { client } = useApi();
  const [loading, setLoading] = useState(false);

  const create = async (
    app: Actions.PluginsList["plugins"][number]["apps"][number]
  ) => {
    setLoading(true);
    const response: Actions.AppCreate = await client.request("post", `/app`, {
      type: app.name,
    });
    if (response?.app) {
      return router.push(`/app/${response.app.id}/edit`);
    } else {
      setLoading(false);
    }
  };

  const plugin = plugins.find((p) => p.name === pluginName);
  if (!plugin || !plugin.apps || plugin.apps.length === 0) {
    return (
      <Alert variant="warning">
        Plugin <code>{pluginName}</code> not installed or has no apps
      </Alert>
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New {pluginName} App</title>
      </Head>

      <PageHeader
        icon={plugin.icon}
        title={[
          <span>
            Add new <code>{plugin.name}</code> App
          </span>,
        ]}
        badges={[
          plugin.source ? <Badge variant="primary">Source</Badge> : null,
          plugin.destination ? (
            <Badge variant="primary">Destination</Badge>
          ) : null,
        ]}
      />

      <br />

      {plugin.apps.map((app) => (
        <Fragment key={`app-${app.name}`}>
          <Card>
            <Card.Body>
              <Card.Title>{app.displayName}</Card.Title>
              <Card.Text>
                <strong>Requires</strong>:{" "}
                {app.options
                  .filter((o) => o.required)
                  .map((o, idx, arr) => (
                    <Fragment key={`${app.name}-${o.displayName}`}>
                      {o.displayName}
                      {idx === arr.length - 1 ? "" : ", "}
                    </Fragment>
                  ))}
                <br />
                <strong>Other Options</strong>:{" "}
                {app.options
                  .filter((o) => !!!o.required)
                  .map((o, idx, arr) => (
                    <Fragment key={`${app.name}-${o.displayName}`}>
                      {o.displayName}
                      {idx === arr.length - 1 ? "" : ", "}
                    </Fragment>
                  ))}
              </Card.Text>
              <LoadingButton
                loading={loading}
                variant="primary"
                onClick={() => create(app)}
              >
                Create App
              </LoadingButton>
            </Card.Body>
          </Card>
          <br />
        </Fragment>
      ))}
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const client = generateClient(ctx);
  const { plugins }: Actions.PluginsList = await client.request(
    "get",
    `/plugins`,
    {
      includeInstalled: true,
      includeAvailable: false,
      includeVersions: false,
    }
  );
  return { plugins };
};
