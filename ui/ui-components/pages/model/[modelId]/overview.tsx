import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ManagedCard from "../../../components/lib/ManagedCard";
import ModelOverviewDestinations from "../../../components/model/overview/ModelOverviewDestinations";
import ModelOverviewGroups from "../../../components/model/overview/ModelOverviewGroups";
import ModelOverviewPrimarySource from "../../../components/model/overview/ModelOverviewPrimarySource";
import ModelOverviewSampleRecord from "../../../components/model/overview/ModelOverviewSampleRecord";
import ModelOverviewSchedules from "../../../components/model/overview/ModelOverviewSchedules";
import ModelOverviewSecondarySources from "../../../components/model/overview/ModelOverviewSecondarySources";
import PageHeader from "../../../components/PageHeader";
import { GrouparooModelContextProvider } from "../../../contexts/grouparooModel";
import { UseApi } from "../../../hooks/useApi";
import { Actions, Models } from "../../../utils/apiData";

interface Props {
  model: Models.GrouparooModelType;
  primarySource?: Models.SourceType;
  secondarySources: Models.SourceType[];
  properties: Models.PropertyType[];
  groups: Models.GroupType[];
  schedules: Models.ScheduleType[];
  destinations?: Models.DestinationType[];
}

const Page: NextPage<Props & { ctx: any; errorHandler: any }> = ({
  ctx,
  errorHandler,
  model,
  primarySource,
  secondarySources,
  properties,
  groups,
  schedules,
  destinations,
}) => {
  const { execApi } = UseApi(ctx, errorHandler);
  const sources = useMemo(() => {
    const result = [...secondarySources];
    if (primarySource) {
      result.unshift(primarySource);
    }
    return result;
  }, [primarySource, secondarySources]);

  const hasReadyProperties = useMemo<boolean>(
    () => !!properties.find((property) => property.state === "ready"),
    [properties]
  );

  return (
    <GrouparooModelContextProvider model={model}>
      <Head>
        <title>Grouparoo: {model.name}</title>
      </Head>

      <PageHeader
        iconType="grouparooModel"
        icon={model.icon}
        title={model.name}
        actions={[<Link href={`/model/${model.id}/edit`}>Edit</Link>]}
      />
      <p>
        Define your {model.name} Model here with Sources, Groups, and
        Destinations.
      </p>

      <Row className="mb-4">
        <Col>
          <ManagedCard title="Model Data">
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <ModelOverviewPrimarySource source={primarySource} />
              </ListGroupItem>

              <ListGroupItem>
                <ModelOverviewSecondarySources
                  sources={secondarySources}
                  disabled={!primarySource}
                />
              </ListGroupItem>

              <ListGroupItem>
                <ModelOverviewGroups
                  groups={groups}
                  disabled={!sources.length || !hasReadyProperties}
                />
              </ListGroupItem>

              <ListGroupItem>
                <ModelOverviewSchedules
                  schedules={schedules}
                  sources={sources}
                  execApi={execApi}
                />
              </ListGroupItem>
            </ListGroup>
          </ManagedCard>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <ModelOverviewSampleRecord
            modelId={model.id}
            properties={properties}
            execApi={execApi}
            disabled={!sources.length}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModelOverviewDestinations
            destinations={destinations}
            disabled={!destinations.length && !groups.length}
          />
        </Col>
      </Row>
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
  const primarySource =
    sources.length === 1
      ? sources[0] // If there is only one source this will be the primary source
      : primaryKeyProperty
      ? sources.find(({ id }) => id === primaryKeyProperty.sourceId)
      : null;
  const secondarySources = primarySource
    ? sources.filter(({ id }) => id !== primarySource.id)
    : sources;

  return {
    props: {
      model,
      primarySource,
      secondarySources,
      properties,
      groups,
      schedules,
      destinations,
    },
  };
};

export default Page;
