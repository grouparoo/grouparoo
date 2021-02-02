import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { Row, Col, Table, Badge, Alert } from "react-bootstrap";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import Link from "next/link";
import Moment from "react-moment";
import ScheduleAddButton from "@grouparoo/ui-components/components/schedule/add";
import PropertyAddButton from "@grouparoo/ui-components/components/property/add";
import SourceTabs from "@grouparoo/ui-components/components/tabs/source";
import Head from "next/head";
import { Models } from "@grouparoo/ui-components/utils/apiData";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";

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
        ]}
      />

      <Row>
        <Col>
          <p>
            <strong>App</strong>:{" "}
            <Link href="/app/[guid]/edit" as={`/app/${source.app.guid}/edit`}>
              <a>{source.app.name}</a>
            </Link>
            <br />
            <strong>Connection</strong>: {source.connection.name}:{" "}
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
                <tr key={`rule-${rule.guid}`}>
                  <td>
                    <Link
                      href="/property/[guid]/edit"
                      as={`/property/${rule.guid}/edit`}
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
                  </td>
                  <td>{rule.type}</td>
                  <td>
                    <input readOnly type="checkbox" checked={rule.unique} />
                  </td>
                  <td>
                    <StateBadge state={rule.state} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PropertyAddButton
            errorHandler={errorHandler}
            successHandler={successHandler}
            source={source}
          />
          <hr />
          <h2>Schedule</h2>
          <br />
          {source.scheduleAvailable ? (
            source.schedule ? (
              <Row>
                <Col>
                  <p>
                    <Link
                      href="/source/[guid]/schedule"
                      as={`/source/${source.guid}/schedule`}
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
                <Col>
                  <Alert variant="success">
                    <strong>Most Recent Run</strong>
                    {run ? (
                      <>
                        <br /> State: {run.state}
                        <br />
                        {run.createdAt ? (
                          <>
                            Started <Moment fromNow>{run.createdAt}</Moment>
                            <ul>
                              <li>Imports Created: {run.importsCreated}</li>
                              <li>Profiles Created: {run.profilesCreated}</li>
                              <li>Profiles Imported: {run.profilesImported}</li>
                            </ul>
                          </>
                        ) : (
                          <span>never run</span>
                        )}
                        {run.completedAt ? (
                          <p>
                            Completed <Moment fromNow>{run.completedAt}</Moment>
                          </p>
                        ) : null}
                        <p>
                          <Link
                            href="/run/[guid]/edit"
                            as={`/run/${run.guid}/edit`}
                          >
                            <a>See More</a>
                          </Link>
                        </p>
                      </>
                    ) : (
                      <p>no runs yet</p>
                    )}{" "}
                  </Alert>
                </Col>
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
              </Row>
            ) : (
              <ScheduleAddButton
                errorHandler={errorHandler}
                successHandler={successHandler}
                source={source}
              />
            )
          ) : source.connection.name === "events-table-import" ? (
            <Alert variant="info">
              A schedule is not needed when using Grouparoo events as a source.
              Events are automatically processed and linked to profiles as they
              come in.
            </Alert>
          ) : (
            <Alert variant="warning">
              Schedule not available for this connection type
            </Alert>
          )}
          <hr />
          <h2>Profile Identification</h2>
          {source.previewAvailable && !source.connection.skipSourceMapping ? (
            Object.keys(source.mapping).length === 1 ? (
              <Row>
                <Col>
                  Remote Column: <code>{Object.keys(source.mapping)[0]}</code>
                </Col>
                <Col>▶</Col>
                <Col>
                  Profile Property:{" "}
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

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${guid}`);
  const { properties } = await execApi("get", `/properties`, {
    sourceGuid: guid,
  });

  let run;
  if (source?.schedule?.guid) {
    const { runs } = await execApi("get", `/runs`, {
      guid: source.schedule.guid,
      limit: 1,
    });
    run = runs[0];
  }

  return { source, run, properties };
};
