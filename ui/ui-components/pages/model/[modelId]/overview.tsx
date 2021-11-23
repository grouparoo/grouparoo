import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import ModelOverviewDestinations from "../../../components/model/overview/ModelOverviewDestinations";
import ModelOverviewGroups from "../../../components/model/overview/ModelOverviewGroups";
import ModelOverviewPrimarySource from "../../../components/model/overview/ModelOverviewPrimarySource";
import ModelOverviewSchedules from "../../../components/model/overview/ModelOverviewSchedules";
import ModelOverviewSecondarySources from "../../../components/model/overview/ModelOverviewSecondarySources";
import PageHeader from "../../../components/PageHeader";
import { GrouparooModelContextProvider } from "../../../contexts/GrouparooModelContext";
import { UseApi } from "../../../hooks/useApi";
import { Actions, Models } from "../../../utils/apiData";

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
  model: Models.GrouparooModelType;
  primarySource?: Models.SourceType;
  secondarySources: Models.SourceType[];
  groups: Models.GroupType[];
  schedules: Models.ScheduleType[];
  destinations?: Models.DestinationType[];
}

const Page: NextPage<Props> = ({
  model,
  primarySource,
  secondarySources,
  groups,
  schedules,
  destinations,
}) => {
  const sources = useMemo(
    () => [primarySource, ...secondarySources],
    [primarySource, secondarySources]
  );

  return (
    <GrouparooModelContextProvider model={model}>
      <Head>
        <title>Grouparoo: {model.name}</title>
      </Head>

      <Container>
        <PageHeader
          iconType="grouparooModel"
          icon={model.icon}
          title={model.name}
        />
        <p>
          Define your {model.name} model here with sources, groups, and
          destinations.
        </p>

        <Row className="mb-4">
          <Col>
            <ModelOverviewCard title="Model Data">
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <ModelOverviewPrimarySource source={primarySource} />
                </ListGroupItem>

                <ListGroupItem>
                  <ModelOverviewSecondarySources sources={secondarySources} />
                </ListGroupItem>

                <ListGroupItem>
                  <ModelOverviewGroups groups={groups} />
                </ListGroupItem>

                <ListGroupItem>
                  <ModelOverviewSchedules
                    schedules={schedules}
                    sources={sources}
                  />
                </ListGroupItem>
              </ListGroup>
            </ModelOverviewCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <ModelOverviewCard title="Destinations">
              <ModelOverviewDestinations destinations={destinations} />
            </ModelOverviewCard>
          </Col>
        </Row>
      </Container>
    </GrouparooModelContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { modelId, limit, offset } = context.query;
  const { execApi } = UseApi(context);

  const params = {
    limit,
    offset,
    modelId,
  };

  // TODO: Create a single api call that requests all data for the model overview page.
  const [
    { sources },
    { destinations },
    { properties },
    { groups },
    { schedules },
    { model },
  ] = await Promise.all([
    execApi<Actions.SourcesList>("get", `/sources`, params),
    execApi<Actions.DestinationsList>("get", `/destinations`, params),
    execApi<Actions.PropertiesList>("get", `/properties`, params),
    execApi<Actions.GroupsList>("get", `/groups`, params),
    execApi<Actions.SchedulesList>("get", `/schedules`, params),
    execApi<Actions.ModelView>("get", `/model/${modelId}`),
  ]);

  const primaryKeyProperty = properties.find((p) => p.isPrimaryKey);
  const primarySource = primaryKeyProperty
    ? sources.find(({ id }) => id === primaryKeyProperty.sourceId)
    : undefined;
  const secondarySources = primarySource
    ? sources.filter(({ id }) => id !== primarySource.id)
    : sources;

  return {
    props: {
      model,
      primarySource,
      secondarySources,
      groups,
      schedules,
      destinations,
    },
  };
};

export default Page;
