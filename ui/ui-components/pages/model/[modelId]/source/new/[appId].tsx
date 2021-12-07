import Head from "next/head";
import { useState, Fragment } from "react";
import { UseApi } from "../../../../../hooks/useApi";
import { Row, Col, Card } from "react-bootstrap";
import LoadingButton from "../../../../../components/LoadingButton";
import AppIcon from "../../../../../components/AppIcon";
import { useRouter } from "next/router";
import { humanizePluginName } from "../../../../../utils/languageHelper";
import { Actions } from "../../../../../utils/apiData";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import AppBadge from "../../../../../components/badges/AppBadge";
import { NextPageContext } from "next";

export default function Page(props) {
  const {
    errorHandler,
    connectionApps,
    model,
  }: {
    errorHandler: ErrorHandler;
    connectionApps: Actions.SourceConnectionApps["connectionApps"];
    model: Actions.ModelView["model"];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const { appId } = router.query;

  const relevantConnectionApps = connectionApps.filter(
    (ca) => ca.app.id === appId
  );

  const create = async (connection) => {
    setLoading(true);
    const response: Actions.SourceCreate = await execApi("post", `/source`, {
      appId,
      modelId: model.id,
      type: connection.name,
    });
    if (response?.source) {
      router.push(
        `/model/${response.source.modelId}/source/${response.source.id}/edit`
      );
    } else {
      setLoading(false);
    }
  };

  if (relevantConnectionApps.length === 0) {
    return <p>No Source Connections for this App</p>;
  }

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
  const { execApi } = UseApi(ctx);
  const { modelId } = ctx.query;
  const { connectionApps } = await execApi("get", `/sources/connectionApps`);
  const { model } = await execApi("get", `/model/${modelId}`);
  return { connectionApps, model };
};
