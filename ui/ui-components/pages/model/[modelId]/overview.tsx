import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ManagedCard from "../../../components/lib/ManagedCard";
import ModelOverviewDestinations from "../../../components/model/overview/ModelOverviewDestinations";
import ModelOverviewGroups from "../../../components/model/overview/ModelOverviewGroups";
import ModelOverviewPrimarySource from "../../../components/model/overview/ModelOverviewPrimarySource";
import ModelOverviewSchedules from "../../../components/model/overview/ModelOverviewSchedules";
import ModelOverviewSecondarySources from "../../../components/model/overview/ModelOverviewSecondarySources";
import PageHeader from "../../../components/PageHeader";
import SampleRecordCard from "../../../components/record/SampleRecordCard";
import { GrouparooModelContextProvider } from "../../../contexts/grouparooModel";
import { UseApi } from "../../../hooks/useApi";
import { Actions, Models } from "../../../utils/apiData";

interface Props {
  model: Models.GrouparooModelType;
  primarySource?: Models.SourceType;
  secondarySources: Models.SourceType[];
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
                    disabled={!sources.length}
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
            <SampleRecordCard execApi={execApi} />
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
    : null;
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
