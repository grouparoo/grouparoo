import { NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, Fragment, useEffect } from "react";
import { UseApi } from "../../../../../hooks/useApi";
import { Row, Col, Card } from "react-bootstrap";
import LoadingButton from "../../../../../components/LoadingButton";
import AppIcon from "../../../../../components/AppIcon";
import { errorHandler } from "../../../../../eventHandlers";
import { humanizePluginName } from "../../../../../utils/languageHelper";
import { Actions } from "../../../../../utils/apiData";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import AppBadge from "../../../../../components/badges/AppBadge";

export default function Page(props) {
  const {
    connectionApps,
    model,
    isPrimarySourceNotReady,
  }: {
    connectionApps: Actions.SourceConnectionApps["connectionApps"];
    model: Actions.ModelView["model"];
    isPrimarySourceNotReady: boolean;
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const { appId } = router.query;

  const relevantConnectionApps = connectionApps.filter(
    (ca) => ca.app.id === appId
  );

  useEffect(() => {
    if (isPrimarySourceNotReady) {
      router.push(`/model/${model.id}/overview`);
    }
  }, [isPrimarySourceNotReady, model]);

  if (isPrimarySourceNotReady) {
    return null;
  }

  if (relevantConnectionApps.length === 0) {
    return <p>No Source Connections for this App</p>;
  }

  const create = async (connection) => {
    setLoading(true);
    const response: Actions.SourceCreate = await client.request(
      "post",
      `/source`,
      {
        appId,
        modelId: model.id,
        type: connection.name,
      }
    );
    if (response?.source) {
      router.push(
        `/model/${response.source.modelId}/source/${response.source.id}/edit`
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Grouparoo: New Source</title>
      </Head>

      <Row>
        <Col md={1}>
          <AppIcon src={relevantConnectionApps[0].app.icon} fluid size={100} />
        </Col>
        <Col>
          <h1>Add Source</h1>
          <ModelBadge modelName={model.name} modelId={model.id} />
          &nbsp;
          <AppBadge
            appName={relevantConnectionApps[0].app.name}
            appId={relevantConnectionApps[0].app.id}
          />
        </Col>
      </Row>

      <br />

      {relevantConnectionApps.map(({ app, connection }) => (
        <Fragment key={`connectionApp-${connection.name}`}>
          <Card>
            <Card.Body>
              <Card.Title>{humanizePluginName(connection.name)}</Card.Title>
              <Card.Text>{connection.description}</Card.Text>
              <LoadingButton
                loading={loading}
                variant="primary"
                onClick={() => create(connection)}
              >
                Create Source
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
  const { client } = useApi();
  const { modelId } = ctx.query;
  const { connectionApps } = await client.request(
    "get",
    `/sources/connectionApps`
  );
  const { model } = await client.request("get", `/model/${modelId}`);
  const { sources, total: totalSources } =
    await client.request<Actions.SourcesList>("get", "/sources", {
      modelId,
      limit: 1,
    });
  const isPrimarySourceNotReady =
    totalSources === 1 && sources[0].state !== "ready";

  return { connectionApps, model, isPrimarySourceNotReady };
};
