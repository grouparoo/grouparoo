import { NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";
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
  }: {
    connectionApps: Actions.SourceConnectionApps["connectionApps"];
    model: Actions.ModelView["model"];
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const { appId } = router.query;

  const relevantConnectionApps = connectionApps.filter(
    (ca) => ca.app.id === appId
  );

  const create = async (connection) => {
    setLoading(true);
    const response: Actions.DestinationCreate = await client.request(
      "post",
      `/destination`,
      {
        appId,
        type: connection.name,
        modelId: model.id,
      }
    );
    if (response?.destination) {
      router.push(
        `/model/${response.destination.modelId}/destination/${response.destination.id}/edit`
      );
    } else {
      setLoading(false);
    }
  };

  if (relevantConnectionApps.length === 0) {
    return <p>No Destination Connections for this App</p>;
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Destination</title>
      </Head>

      <Row>
        <Col md={1}>
          <AppIcon src={relevantConnectionApps[0].app.icon} fluid size={100} />
        </Col>
        <Col>
          <h1>Add Destination</h1>
          <ModelBadge modelName={model.name} modelId={model.id} />
          &nbsp;
          <AppBadge
            appName={relevantConnectionApps[0].app.name}
            appId={relevantConnectionApps[0].app.id}
          />
        </Col>
      </Row>

      <br />

      {relevantConnectionApps.map(({ connection }) => (
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
                Create Destination
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
    `/destinations/connectionApps`
  );
  const { model } = await client.request("get", `/model/${modelId}`);
  return { connectionApps, model };
};
