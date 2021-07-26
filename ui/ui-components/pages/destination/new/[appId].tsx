import Head from "next/head";
import { useState, Fragment } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Card } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import AppIcon from "../../../components/appIcon";
import { useRouter } from "next/router";
import { humanizePluginName } from "../../../utils/languageHelper";
import { Actions, Models } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";

export default function Page(props) {
  const {
    errorHandler,
    connectionApps,
  }: {
    errorHandler: ErrorHandler;
    connectionApps: Actions.SourceConnectionApps["connectionApps"];
  } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const { appId } = router.query;

  const relevantConnectionApps = connectionApps.filter(
    (ca) => ca.app.id === appId
  );

  const create = async (connection) => {
    setLoading(true);
    const response: Actions.DestinationCreate = await execApi(
      "post",
      `/destination`,
      { appId, type: connection.name }
    );
    if (response?.destination) {
      router.push(
        "/destination/[id]/edit",
        `/destination/${response.destination.id}/edit`
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

      <h1>Choose how to connect to {relevantConnectionApps[0].app.name}</h1>

      <Row>
        <Col md={1}>
          <br />
          <AppIcon src={relevantConnectionApps[0].app.icon} fluid size={100} />
        </Col>
        <Col>
          {relevantConnectionApps.map(({ app, connection }) => (
            <Fragment key={`connectionApp-${connection.name}`}>
              <Card>
                <Card.Body>
                  <Card.Title>{humanizePluginName(connection.name)}</Card.Title>
                  <Card.Text>{connection.description}</Card.Text>
                  <LoadingButton
                    disabled={loading}
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
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { connectionApps } = await execApi(
    "get",
    `/destinations/connectionApps`
  );
  return { connectionApps };
};
