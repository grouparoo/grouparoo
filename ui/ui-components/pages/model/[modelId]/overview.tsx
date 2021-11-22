import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";
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
import PageHeader from "../../../components/PageHeader";
import AppIcon from "../../../components/AppIcon";
import StateBadge from "../../../components/badges/StateBadge";
import { UseApi } from "../../../hooks/useApi";
import { Actions, Models } from "../../../utils/apiData";
import { formatName } from "../../../utils/formatName";
import { formatSchedule } from "../../../utils/formatSchedule";

interface SummaryHeadingProps {
  entity: Parameters<typeof formatName>[0];
}

const SummaryHeading: React.FC<SummaryHeadingProps> = ({ entity }) => {
  return (
    <div>
      <strong>{formatName(entity)}</strong>{" "}
      <StateBadge state={entity.state} marginBottom={0} />
    </div>
  );
};

interface SummaryContainerProps {
  app?: Models.AppType;
}

const SummaryContainer: React.FC<SummaryContainerProps> = ({
  app,
  children,
}) => {
  return app && app.icon ? (
    <Media>
      <AppIcon src={app.icon} size={42} className="mr-3" />
      <Media.Body>{children}</Media.Body>
    </Media>
  ) : (
    <>{children}</>
  );
};

const renderMapping = (mapping: Record<string, string>): React.ReactNode => {
  const keys = Object.keys(mapping);
  if (!keys.length) return null;
  return `${keys} → ${mapping[keys[0]]}`;
};

const SourceSummary: React.FC<{
  source: Models.SourceType;
  isPrimarySource?: boolean;
}> = ({ source, isPrimarySource }) => {
  const { app, connection, schedule, mapping } = source;

  return (
    <SummaryContainer app={isPrimarySource ? undefined : app}>
      <SummaryHeading entity={source} />
      <div>{connection?.displayName}</div>
      {isPrimarySource && <div>Primary Key: {renderMapping(mapping)}</div>}
      <div>Schedule: {formatSchedule(schedule)}</div>
    </SummaryContainer>
  );
};

const DestinationSummary: React.FC<{ destination: Models.DestinationType }> = ({
  destination,
}) => {
  const { app, connection, exportTotals } = destination;

  return (
    <SummaryContainer app={app}>
      <SummaryHeading entity={destination} />
      <div>{connection?.displayName}</div>
      <div>Pending Exports: {exportTotals.pending}</div>
      <div>Syncing: TODO</div>
    </SummaryContainer>
  );
};

interface SectionContainerProps {
  title: string;
  description: string;
  iconType?: "app" | "icon";
  icon: string | IconProp;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  iconType,
  icon,
  description,
  children,
}) => {
  return (
    <Media>
      {icon && iconType === "app" ? (
        <AppIcon src={icon as string} size={42} className="mr-3" />
      ) : (
        icon && (
          <FontAwesomeIcon icon={icon as IconProp} size="3x" className="mr-3" />
        )
      )}
      <Media.Body>
        <h6>{title}</h6>
        <p>{description}</p>
        {children}
      </Media.Body>
    </Media>
  );
};

const PrimarySourceOverview: React.FC<{ source: Models.SourceType }> = ({
  source,
}) => {
  return (
    <SectionContainer
      title="Primary Source"
      iconType="app"
      icon={source.app?.icon}
      description="The primary source defines the core properties and primary key for your records."
    >
      <p>
        <Button variant="outline-primary" size="sm">
          Learn more
        </Button>{" "}
        <Button variant="primary" size="sm">
          Add primary source
        </Button>
      </p>
      {source && (
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <SourceSummary source={source} isPrimarySource />
          </ListGroupItem>
        </ListGroup>
      )}
    </SectionContainer>
  );
};

const SecondarySourcesOverview: React.FC<{ sources: Models.SourceType[] }> = ({
  sources,
}) => {
  return (
    <SectionContainer
      title="Secondary Sources"
      icon="file-import"
      description="Secondary sources can be used to enrich your records with additional data."
    >
      <p>
        <Button variant="outline-primary" size="sm">
          Add secondary source
        </Button>
      </p>
      {sources.length > 0 && (
        <ListGroup className="list-group-flush">
          {sources.map((source, index) => (
            <ListGroupItem key={index}>
              <SourceSummary source={source} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

const GroupSummary: React.FC<{ group: Models.GroupType }> = ({ group }) => {
  return (
    <SummaryContainer>
      <SummaryHeading entity={group} />
      <div>{group.type}</div>
      <div>Records: {group.recordsCount || 0}</div>
    </SummaryContainer>
  );
};

const ModelGroupOverview: React.FC<{ groups: Models.GroupType[] }> = ({
  groups,
}) => {
  return (
    <SectionContainer
      title="Groups"
      icon="users"
      description="Segment your data using groups to enrich your destinations."
    >
      {groups.length > 0 && (
        <ListGroup className="list-group-flush">
          {groups.map((group, index) => (
            <ListGroupItem key={index}>
              <GroupSummary group={group} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

const ScheduleSummary: React.FC<{
  schedule: Models.ScheduleType;
  source?: Models.SourceType;
}> = ({ schedule, source }) => {
  return (
    <SummaryContainer app={source.app}>
      <SummaryHeading entity={schedule} />
      <div>Source: {formatName(source)}</div>
      <div>Schedule: {formatSchedule(schedule)}</div>
    </SummaryContainer>
  );
};

const ModelSchedulesOverview: React.FC<{
  schedules: Models.ScheduleType[];
  sources?: Models.SourceType[];
}> = ({ schedules, sources }) => {
  const sourcesById = useMemo<Record<string, Models.SourceType>>(() => {
    const result: Record<string, Models.SourceType> = {};

    if (!sources) return result;

    return sources.reduce((acc, source) => {
      acc[source.id] = source;
      return acc;
    }, result);
  }, [sources]);

  return (
    <SectionContainer
      title="Schedules"
      icon="sync-alt"
      description="Checks for new data from your Sources."
    >
      {schedules.length > 0 && (
        <ListGroup className="list-group-flush">
          {schedules.map((group, index) => (
            <ListGroupItem key={index}>
              <ScheduleSummary
                schedule={group}
                source={sourcesById[group.sourceId]}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

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
            <DestinationSummary destination={destination} />
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
    <>
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
        <Row>
          <Col>
            <ModelOverviewCard title="Model Data">
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <PrimarySourceOverview source={primarySource} />
                </ListGroupItem>

                <ListGroupItem>
                  <SecondarySourcesOverview sources={secondarySources} />
                </ListGroupItem>

                <ListGroupItem>
                  <ModelGroupOverview groups={groups} />
                </ListGroupItem>

                <ListGroupItem>
                  <ModelSchedulesOverview
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

  const { schedules } = await execApi<Actions.SchedulesList>(
    "get",
    `/schedules`,
    {
      modelId,
      limit,
      offset,
    }
  );

  const primaryKeyProperty = properties.find((p) => p.isPrimaryKey);
  const primarySource = primaryKeyProperty
    ? sources.find(({ id }) => id === primaryKeyProperty.sourceId)
    : undefined;
  const secondarySources = primarySource
    ? sources.filter(({ id }) => id !== primarySource.id)
    : sources;

  // TODO: Need whole model for icon

  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );

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
