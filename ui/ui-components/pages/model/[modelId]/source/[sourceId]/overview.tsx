import { useMemo } from "react";
import { Row, Col, Table, Badge, Alert, Card } from "react-bootstrap";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import Link from "next/link";
import Moment from "react-moment";
import ScheduleAddButton from "../../../../../components/schedule/Add";
import PropertyAddButton from "../../../../../components/property/Add";
import PropertyAddMultipleButton from "../../../../../components/property/AddMultiple";
import SourceTabs from "../../../../../components/tabs/Source";
import Head from "next/head";
import { Actions, Models } from "../../../../../utils/apiData";
import { formatTimestamp } from "../../../../../utils/formatTimestamp";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";
import ManagedCard from "../../../../../components/lib/ManagedCard";
import PrimaryKeyBadge from "../../../../../components/badges/PrimaryKeyBadge";
import { generateClient } from "../../../../../client/client";
import { NextPageWithInferredProps } from "../../../../../utils/pageHelper";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const { sourceId, modelId } = ctx.query;
  const client = generateClient(ctx);
  const { source } = await client.request<Actions.SourceView>(
    "get",
    `/source/${sourceId}`
  );
  ensureMatchingModel("Source", source.modelId, modelId.toString());

  const { total: totalSources } = await client.request<Actions.SourcesList>(
    "get",
    `/sources`,
    {
      modelId,
      limit: 1,
    }
  );
  const { properties } = await client.request<Actions.PropertiesList>(
    "get",
    `/properties`,
    {
      sourceId,
    }
  );

  let run: Models.RunType = null;
  if (source?.schedule?.id) {
    const { runs } = await client.request<Actions.RunsList>("get", `/runs`, {
      id: source.schedule.id,
      limit: 1,
    });
    run = runs[0];
  }

  return { props: { source, totalSources, run, properties } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  source,
  totalSources,
  run,
  properties,
}) => {
  const recurringFrequencyMinutes = source?.schedule?.recurringFrequency
    ? Math.round(source.schedule.recurringFrequency / 1000 / 60)
    : null;

  const isPrimarySource = useMemo<boolean>(
    () =>
      (totalSources === 1 && source.state !== "ready") ||
      !!properties.find((property) => property.isPrimaryKey),
    [properties, totalSources, source.state]
  );

  const sourceBadges = useMemo(() => {
    const badges = [
      <LockedBadge object={source} />,
      <StateBadge state={source.state} />,
      <ModelBadge modelName={source.modelName} modelId={source.modelId} />,
    ];
    if (isPrimarySource) {
      badges.unshift(<PrimaryKeyBadge isSource />);
    }
    return badges;
  }, [source, isPrimarySource]);

  const optionKeys = useMemo(
    () => Object.keys(source.options),
    [source.options]
  );

  const showMapping =
    source.previewAvailable && !source.connection.skipSourceMapping;

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <PageHeader
        icon={source.app.icon}
        title={source.name}
        badges={sourceBadges}
      />

      <Row>
        <Col>
          <p>
            <strong>App</strong>:{" "}
            <Link href={`/app/${source.app.id}/edit`}>
              <a>{source.app.name}</a>
            </Link>
            <br />
            <strong>Connection</strong>:{" "}
            <code>{source.connection.displayName}</code>.{" "}
            {source.connection.description}
          </p>
          {!!optionKeys.length && (
            <p>
              <strong>Options:</strong>
              <br />
              {optionKeys.map((k) => (
                <span key={`opt-${k}`}>
                  <strong>{k}</strong>: {source.options[k]}
                  <br />
                </span>
              ))}
            </p>
          )}
          {showMapping &&
            (Object.keys(source.mapping).length === 1 ? (
              <p>
                <strong>Mapping:</strong>{" "}
                <code>{Object.keys(source.mapping)[0]}</code> →{" "}
                <code>{source.mapping[Object.keys(source.mapping)[0]]}</code>
              </p>
            ) : (
              <Alert variant="warning">
                Mapping not set.{" "}
                <Link
                  href={`/model/${source.modelId}/source/${source.id}/edit`}
                >
                  <a>Set mapping</a>
                </Link>
              </Alert>
            ))}
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <ManagedCard title="Properties">
            <Card.Body>
              {!!properties.length && (
                <Table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Type</th>
                      <th>Unique</th>
                      <th>State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((rule) => (
                      <tr key={`rule-${rule.id}`}>
                        <td>
                          <Link
                            href={`/model/${source.modelId}/source/${source.id}/property/${rule.id}/edit`}
                          >
                            <a>
                              <strong>
                                {rule.key ||
                                  `${rule.state} created on ${
                                    new Date(rule.createdAt)
                                      .toLocaleString()
                                      .split(",")[0]
                                  }`}
                              </strong>
                            </a>
                          </Link>
                          {rule.isPrimaryKey && (
                            <>
                              {" "}
                              <PrimaryKeyBadge />
                            </>
                          )}
                        </td>
                        <td>{rule.type}</td>
                        <td>
                          <input
                            disabled
                            type="checkbox"
                            checked={rule.unique}
                          />
                        </td>
                        <td>
                          <StateBadge state={rule.state} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
              <div>
                <PropertyAddButton source={source} />
                <PropertyAddMultipleButton source={source} />
              </div>
            </Card.Body>
          </ManagedCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <ManagedCard title="Schedule">
            <Card.Body>
              {source.scheduleAvailable ? (
                source.schedule ? (
                  <Row>
                    <Col>
                      <p>
                        <Link
                          href={`/model/${source.modelId}/source/${source.id}/schedule`}
                        >
                          <a>{source.schedule.name}</a>
                        </Link>
                        <br />
                        <strong>Recurring</strong>:{" "}
                        <Badge
                          variant={
                            source.schedule.recurring ? "success" : "secondary"
                          }
                        >
                          {source.schedule.recurring.toString()}
                        </Badge>
                        <br />
                        <strong>Frequency</strong>:{" "}
                        {source.schedule.recurringFrequency
                          ? `${recurringFrequencyMinutes} minutes`
                          : "N/A"}
                        <br />
                        <strong>State</strong>:{" "}
                        <StateBadge state={source.schedule.state} />
                      </p>
                    </Col>
                    {grouparooUiEdition() !== "config" && (
                      <Col>
                        <Alert variant="success">
                          <strong>Most Recent Run</strong>
                          {run ? (
                            <>
                              <br /> State: {run.state}
                              <br />
                              {run.createdAt ? (
                                <>
                                  Started {formatTimestamp(run.createdAt)}
                                  <ul>
                                    <li>
                                      Imports Created: {run.importsCreated}
                                    </li>
                                    <li>
                                      Records Created: {run.recordsCreated}
                                    </li>
                                    <li>
                                      Records Imported: {run.recordsImported}
                                    </li>
                                  </ul>
                                </>
                              ) : (
                                <span>never run</span>
                              )}
                              {run.completedAt ? (
                                <p>
                                  Completed {formatTimestamp(run.completedAt)}
                                </p>
                              ) : null}
                              <p>
                                <Link href={`/run/${run.id}/edit`}>
                                  <a>See More</a>
                                </Link>
                              </p>
                            </>
                          ) : (
                            <p>no runs yet</p>
                          )}{" "}
                        </Alert>
                      </Col>
                    )}
                    {grouparooUiEdition() !== "config" && (
                      <Col>
                        <Alert variant="info">
                          <p>
                            <strong>Next Run</strong>
                            <br />
                            {run?.updatedAt &&
                            new Date(run.updatedAt).getTime() +
                              source.schedule.recurringFrequency >
                              new Date().getTime() &&
                            recurringFrequencyMinutes > 0 ? (
                              <>
                                in{" "}
                                <Moment
                                  add={{
                                    minutes: recurringFrequencyMinutes,
                                  }}
                                  toNow
                                  ago
                                >
                                  {run.updatedAt}
                                </Moment>
                              </>
                            ) : null}

                            {(run?.updatedAt &&
                              new Date(run.updatedAt).getTime() +
                                source.schedule.recurringFrequency <=
                                new Date().getTime() &&
                              recurringFrequencyMinutes) ||
                            !run ? (
                              source.schedule.recurring ? (
                                <strong>Soon</strong>
                              ) : (
                                "N/A"
                              )
                            ) : null}
                          </p>
                        </Alert>
                      </Col>
                    )}
                  </Row>
                ) : (
                  <ScheduleAddButton source={source} />
                )
              ) : (
                <div>
                  Schedule not available for this connection type or mapping
                  configuration.
                </div>
              )}
            </Card.Body>
          </ManagedCard>
        </Col>
      </Row>
    </>
  );
};

export default Page;
