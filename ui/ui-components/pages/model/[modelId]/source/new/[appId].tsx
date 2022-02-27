import Head from "next/head";
import { useRouter } from "next/router";
import { useState, Fragment, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import LoadingButton from "../../../../../components/LoadingButton";
import AppIcon from "../../../../../components/AppIcon";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import AppBadge from "../../../../../components/badges/AppBadge";
import { generateClient } from "../../../../../client/client";
import { useApi } from "../../../../../contexts/api";
import { useGrouparooModel } from "../../../../../contexts/grouparooModel";
import { humanizePluginName } from "../../../../../utils/languageHelper";
import { Actions } from "../../../../../utils/apiData";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { modelId } = ctx.query;
  const { connectionApps } = await client.request<Actions.SourceConnectionApps>(
    "get",
    `/sources/connectionApps`
  );
  const { sources, total: totalSources } =
    await client.request<Actions.SourcesList>("get", "/sources", {
      modelId,
      limit: 1,
    });
  const isPrimarySourceNotReady =
    totalSources === 1 && sources[0].state !== "ready";

  return { props: { connectionApps, isPrimarySourceNotReady } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  connectionApps,
  isPrimarySourceNotReady,
}) => {
  const router = useRouter();
  const { client } = useApi();
  const { model } = useGrouparooModel();
  const [loading, setLoading] = useState(false);
  const { appId } = router.query;

  const relevantConnectionApps = connectionApps.filter(
    (ca) => ca.app.id === appId
  );

  useEffect(() => {
    if (isPrimarySourceNotReady) {
      router.push(`/model/${model.id}/overview`);
    }
  }, [isPrimarySourceNotReady, model, router]);

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
};

export default Page;
