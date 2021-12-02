import { UseApi } from "../../../../../hooks/useApi";
import { Row, Col, Table, Badge, Alert, Button } from "react-bootstrap";
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
import { Models } from "../../../../../utils/apiData";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";
import { formatTimestamp } from "../../../../../utils/formatTimestamp";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import LinkButton from "../../../../../components/LinkButton";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";

export default function Page({
  errorHandler,
  successHandler,
  source,
  run,
  properties,
}: {
  errorHandler: ErrorHandler;
  successHandler: SuccessHandler;
  source: Models.SourceType;
  run: Models.RunType;
  properties: Models.PropertyType[];
}) {
  const recurringFrequencyMinutes = source?.schedule?.recurringFrequency
    ? Math.round(source.schedule.recurringFrequency / 1000 / 60)
    : null;

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <PageHeader
        icon={source.app.icon}
        title={`${source.name} - Overview`}
        badges={[
          <LockedBadge object={source} />,
          <StateBadge state={source.state} />,
          <ModelBadge modelName={source.modelName} modelId={source.modelId} />,
        ]}
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
          <p>
            <strong>Options</strong>
            <br />
            {Object.keys(source.options).map((k) => (
              <span key={`opt-${k}`}>
                <strong>{k}</strong>: {source.options[k]}
                <br />
              </span>
            ))}
          </p>
          <hr />
          <h2>Properties</h2>
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
                      href={`/model/${source.modelId}/property/${rule.id}/edit`}
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
                        <Badge variant="info">primary</Badge>
                      </>
                    )}
                  </td>
                  <td>{rule.type}</td>
                  <td>
                    <input disabled type="checkbox" checked={rule.unique} />
                  </td>
                  <td>
                    <StateBadge state={rule.state} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PropertyAddButton
            source={source}
            errorHandler={errorHandler}
            successHandler={successHandler}
          />
          <PropertyAddMultipleButton source={source} />
          <hr />
          <h2>Schedule</h2>
          <br />
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
                                <li>Imports Created: {run.importsCreated}</li>
                                <li>Records Created: {run.recordsCreated}</li>
                                <li>Records Imported: {run.recordsImported}</li>
                              </ul>
                            </>
                          ) : (
                            <span>never run</span>
                          )}
                          {run.completedAt ? (
                            <p>Completed {formatTimestamp(run.completedAt)}</p>
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
              <ScheduleAddButton
                errorHandler={errorHandler}
                successHandler={successHandler}
                source={source}
              />
            )
          ) : (
            <Alert variant="warning">
              Schedule not available for this connection type or mapping
              configuration
            </Alert>
          )}
          <hr />
          <h2>Record Identification</h2>
          {source.previewAvailable && !source.connection.skipSourceMapping ? (
            Object.keys(source.mapping).length === 1 ? (
              <Row>
                <Col>
                  Remote Column: <code>{Object.keys(source.mapping)[0]}</code>
                </Col>
                <Col>▶</Col>
                <Col>
                  Record Property:{" "}
                  <code>{source.mapping[Object.keys(source.mapping)[0]]}</code>
                </Col>
              </Row>
            ) : (
              <Alert variant="warning">Mapping not set yet</Alert>
            )
          ) : source.connection.skipSourceMapping ? (
            <Alert variant="info">Automatic</Alert>
          ) : (
            <Alert variant="warning">
              Mapping not available for this connection type
            </Alert>
          )}
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { sourceId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { source } = await execApi("get", `/source/${sourceId}`);
  ensureMatchingModel("Source", source.modelId, modelId.toString());
  const { properties } = await execApi("get", `/properties`, {
    sourceId,
  });

  let run;
  if (source?.schedule?.id) {
    const { runs } = await execApi("get", `/runs`, {
      id: source.schedule.id,
      limit: 1,
    });
    run = runs[0];
  }

  return { source, run, properties };
};
