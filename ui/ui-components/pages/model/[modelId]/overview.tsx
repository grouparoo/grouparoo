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
import PageHeader from "../../../components/PageHeader";
import AppIcon from "../../../components/AppIcon";
import { UseApi } from "../../../hooks/useApi";
import { Actions, Models } from "../../../utils/apiData";
import { formatSchedule } from "../../../utils/formatSchedule";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { Group } from "@grouparoo/core";
import StateBadge from "../../../components/badges/StateBadge";
import { useMemo } from "react";

interface SourceOrDestinationItemContainerProps {
  app: Models.AppType;
}

const ItemContainer: React.FC<SourceOrDestinationItemContainerProps> = ({
  app,
  children,
}) => {
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
    <ItemContainer app={app}>
      <div>{name}</div>
      <div>{connection?.displayName}</div>
      {isPrimarySource && <div>Primary Key: {renderMapping(mapping)}</div>}
      <div>Schedule: {formatSchedule(schedule)}</div>
    </ItemContainer>
  );
};

const DestinationItem: React.FC<{ item: Models.DestinationType }> = ({
  item,
}) => {
  const { name, app, connection, exportTotals } = item;

  return (
    <ItemContainer app={app}>
      <div>{name}</div>
      <div>{connection?.displayName}</div>
      <div>Pending Exports: {exportTotals.pending}</div>
      <div>Syncing: TODO</div>
    </ItemContainer>
  );
};

interface SectionContainerProps {
  title: string;
  description: string;
  icon: IconProp;
  iconSize?: SizeProp;
  iconMarginRight?: number;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  icon,
  iconSize = "3x",
  iconMarginRight = 3,
  description,
  children,
}) => {
  return (
    <Media>
      <FontAwesomeIcon
        icon={icon}
        size={iconSize}
        className={`mr-${iconMarginRight}`}
      />
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
      icon="file-import"
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
            <SourceItem item={source} isPrimarySource />
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
      iconSize="2x"
      iconMarginRight={4}
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
              <SourceItem item={source} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

const GroupItem: React.FC<{ group: Models.GroupType }> = ({ group }) => {
  return (
    <div>
      <div>
        {group.name} <StateBadge state={group.state} />
      </div>
      <div>{group.type}</div>
      <div>Records: {group.recordsCount || 0}</div>
    </div>
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
              <GroupItem group={group} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

const ScheduleItem: React.FC<{
  schedule: Models.ScheduleType;
  source?: Models.SourceType;
}> = ({ schedule, source }) => {
  return (
    <div>
      <div>
        {schedule.name} <StateBadge state={schedule.state} />
      </div>
      <div>Source: {(source && source.name) || "Unknown"}</div>
      <div>Schedule: {formatSchedule(schedule)}</div>
    </div>
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
              <ScheduleItem
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
