import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Media,
  Row,
} from "react-bootstrap";
import AppIcon from "../../../components/AppIcon";
import { UseApi } from "../../../hooks/useApi";
import { Actions, Models } from "../../../utils/apiData";
import { formatSchedule } from "../../../utils/formatSchedule";

interface SourceOrDestinationItemContainerProps {
  app: Models.AppType;
}

const SourceOrDestinationItemContainer: React.FC<SourceOrDestinationItemContainerProps> =
  ({ app, children }) => {
    return (
      <Media>
        <AppIcon src={app.icon} size={50} className="mr-3" />
        <Media.Body>{children}</Media.Body>
      </Media>
    );
  };

const renderMapping = (mapping: Record<string, string>): React.ReactNode => {
  const keys = Object.keys(mapping);
  if (!keys.length) return null;
  return `${keys} → ${mapping[keys[0]]}`;
};

const SourceItem: React.FC<{
  item: Models.SourceType;
  isPrimarySource?: boolean;
}> = ({ item, isPrimarySource }) => {
  const { name, app, connection, schedule, mapping } = item;

  return (
    <SourceOrDestinationItemContainer app={app}>
      <div>{name}</div>
      <div>{connection?.displayName}</div>
      {isPrimarySource && <div>Primary Key: {renderMapping(mapping)}</div>}
      <div>Schedule: {formatSchedule(schedule)}</div>
    </SourceOrDestinationItemContainer>
  );
};

const DestinationItem: React.FC<{ item: Models.DestinationType }> = ({
  item,
}) => {
  const { name, app, connection, exportTotals } = item;

  return (
    <SourceOrDestinationItemContainer app={app}>
      <div>{name}</div>
      <div>{connection?.displayName}</div>
      <div>Pending Exports: {exportTotals.pending}</div>
      <div>Syncing: TODO</div>
    </SourceOrDestinationItemContainer>
  );
};

interface ModelOverviewSourcesProps {
  primarySource?: Models.SourceType;
  secondarySources: Models.SourceType[];
}

const ModelOverviewData: React.FC<ModelOverviewSourcesProps> = ({
  primarySource,
  secondarySources,
}) => {
  return (
    <>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Media>
            <FontAwesomeIcon icon="file-import" size="3x" className="mr-3" />
            <Media.Body>
              <h6>Primary Source</h6>
              <p>
                The primary source defines the core properties and primary key
                for your records.
              </p>
              <p>
                <Button variant="outline-primary" size="sm">
                  Learn more
                </Button>{" "}
                <Button variant="primary" size="sm">
                  Add primary source
                </Button>
              </p>
              {primarySource && (
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <SourceItem item={primarySource} isPrimarySource />
                  </ListGroupItem>
                </ListGroup>
              )}
            </Media.Body>
          </Media>
        </ListGroupItem>
        <ListGroupItem>
          <Media>
            <FontAwesomeIcon icon="file-import" size="2x" className="mr-4" />
            <Media.Body>
              <h6>Secondary Sources</h6>
              <p>
                Secondary sources can be used to enrich your records with
                additional data.
              </p>
              <p>
                <Button variant="outline-primary" size="sm">
                  Add secondary source
                </Button>
              </p>
              {secondarySources.length > 0 && (
                <ListGroup className="list-group-flush">
                  {secondarySources.map((source, index) => (
                    <ListGroupItem key={index}>
                      <SourceItem item={source} />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </Media.Body>
          </Media>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

const ModelOverviewSampleRecord: React.FC = () => <>TODO: Sample Records</>;

interface ModelOverviewDestinationsProps {
  destinations?: Models.DestinationType[];
}

const ModelOverviewDestinations: React.FC<ModelOverviewDestinationsProps> = ({
  destinations,
}) => {
  if (!destinations || !destinations.length) {
    return null;
  }

  return (
    <>
      <ListGroup className="list-group-flush">
        {destinations.map((destination, index) => (
          <ListGroupItem key={index}>
            <DestinationItem item={destination} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

interface ModelOverviewCardProps {
  title: string;
}

const ModelOverviewCard: React.FC<ModelOverviewCardProps> = ({
  title,
  children,
}) => {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      {children}
    </Card>
  );
};

interface Props {
  modelName: string;
  primarySource?: Models.SourceType;
  secondarySources: Models.SourceType[];
  groups: Models.GroupType[];
  destinations?: Models.DestinationType[];
}

const Page: NextPage<Props> = ({
  modelName,
  primarySource,
  secondarySources,
  groups,
  destinations,
}) => {
  console.log("groups", groups);
  return (
    <>
      <Head>
        <title>Grouparoo: Model {modelName}</title>
      </Head>

      <Container>
        <h1>
          <FontAwesomeIcon icon="user" /> {modelName}
        </h1>
        <p>
          Define your {modelName} model here with sources, groups, and
          destinations.
        </p>
        <Row>
          <Col>
            <ModelOverviewCard title="Model Data">
              <ModelOverviewData
                primarySource={primarySource}
                secondarySources={secondarySources}
              />
              <pre>{JSON.stringify(groups, null, 2)}</pre>
            </ModelOverviewCard>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <ModelOverviewCard title="Sample Record">
              <ModelOverviewSampleRecord />
            </ModelOverviewCard>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <ModelOverviewCard title="Destinations">
              <ModelOverviewDestinations destinations={destinations} />
            </ModelOverviewCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { modelId, limit, offset } = context.query;
  const { execApi } = UseApi(context);
  const { sources, total } = await execApi<Actions.SourcesList>(
    "get",
    `/sources`,
    {
      limit,
      offset,
      modelId,
    }
  );

  const { destinations } = await execApi<Actions.DestinationsList>(
    "get",
    `/destinations`,
    {
      limit,
      offset,
      modelId,
    }
  );

  const { properties } = await execApi<Actions.PropertiesList>(
    "get",
    `/properties`,
    {
      modelId,
    }
  );

  const { groups } = await execApi<Actions.GroupsList>("get", `/groups`, {
    limit,
    offset,
    modelId,
  });

  const primaryKeyProperty = properties.find((p) => p.isPrimaryKey);
  const primarySource = primaryKeyProperty
    ? sources.find(({ id }) => id === primaryKeyProperty.sourceId)
    : undefined;
  const secondarySources = primarySource
    ? sources.filter(({ id }) => id !== primarySource.id)
    : sources;

  let modelName: string = sources?.[0]?.modelName ?? undefined;
  if (!modelName) {
    ({
      model: { modelName },
    } = await execApi("get", `/model/${modelId}`));
  }

  return {
    props: {
      modelName,
      primarySource,
      secondarySources,
      groups,
      destinations,
    },
  };
};

export default Page;
