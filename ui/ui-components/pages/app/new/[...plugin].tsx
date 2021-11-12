import Head from "next/head";
import { UseApi } from "../../../hooks/useApi";
import { Fragment, useState } from "react";
import { Alert, Badge, Card, Col, Form, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { ErrorHandler } from "../../../utils/errorHandler";
import { Actions } from "../../../utils/apiData";
import LoadingButton from "../../../components/LoadingButton";
import PageHeader from "../../../components/PageHeader";

export default function Page(props) {
  const {
    errorHandler,
    plugins,
  }: {
    errorHandler: ErrorHandler;
    plugins: Actions.PluginsList["plugins"];
  } = props;
  const router = useRouter();
  const pluginName = router.asPath.replace(`/app/new/`, "");
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  const create = async (
    app: Actions.PluginsList["plugins"][number]["apps"][number]
  ) => {
    setLoading(true);
    const response: Actions.AppCreate = await execApi("post", `/app`, {
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
                disabled={loading}
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { plugins }: Actions.PluginsList = await execApi("get", `/plugins`, {
    includeInstalled: true,
    includeAvailable: false,
    includeVersions: false,
  });
  return { plugins };
};
