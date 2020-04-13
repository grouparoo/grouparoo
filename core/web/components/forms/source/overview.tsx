import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import {
  Jumbotron,
  Row,
  Col,
  Table,
  Card,
  Badge,
  Alert,
} from "react-bootstrap";
import AppIcon from "./../../appIcon";
import StateBadge from "./../../stateBadge";
import Link from "next/link";
import Moment from "react-moment";
import ScheduleAddButton from "./../schedule/add";
import ProfilePropertyRuleAddButton from "./../profilePropertyRule/add";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [source, setSource] = useState({
    name: "",
    type: "",
    state: "",
    mapping: {},
    options: {},
    scheduleAvailable: false,
    previewAvailable: false,
    schedule: {
      name: "",
      guid: "",
      recurring: false,
      state: "ready",
      recurringFrequency: 0,
    },
    connection: { name: "", description: "" },
    app: { icon: "", name: "", guid: "" },
    profilePropertyRules: [],
  });
  const [run, setRun] = useState({
    guid: "",
    state: "",
    createdAt: "",
    updatedAt: "",
    completedAt: "",
    importsCreated: 0,
    profilesCreated: 0,
    profilesImported: 0,
    profilesExported: 0,
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi("get", `/api/${apiVersion}/source/${guid}`);
    if (response?.source) {
      setSource(response.source);

      if (response.source?.schedule?.guid) {
        loadRun(response.source.schedule.guid);
      }
    }
  }

  async function loadRun(scheduleGuid = source.schedule.guid) {
    const response = await execApi("get", `/api/${apiVersion}/runs`, {
      guid: scheduleGuid,
      limit: 1,
    });
    if (response?.runs) {
      setRun(response.runs[0]);
    }
  }

  const recurringFrequencyMinutes = source?.schedule?.recurringFrequency
    ? Math.round(source.schedule.recurringFrequency / 1000 / 60)
    : null;

  return (
    <>
      <Jumbotron>
        <Row>
          <Col md={1}>
            <AppIcon src={source.app.icon} fluid size={100} />
          </Col>
          <Col>
            <h1>{source.name}</h1>
            <StateBadge state={source.state} />
            <br />
            <br />
            <p>
              <strong>App</strong>:{" "}
              <Link href="/app/[guid]" as={`/app/${source.app.guid}`}>
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
          </Col>
        </Row>
      </Jumbotron>

      <Card border="info">
        <Card.Body>
          <h2>Profile Property Rules</h2>

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
              {source.profilePropertyRules.map((rule) => (
                <tr key={`rule-${rule.guid}`}>
                  <td>
                    <Link
                      href="/profilePropertyRule/[guid]"
                      as={`/profilePropertyRule/${rule.guid}`}
                    >
                      <a>
                        <strong>
                          {rule.key ||
                            `${rule.state} created on ${
                              rule.createdAt.split("T")[0]
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

          <ProfilePropertyRuleAddButton
            apiVersion={apiVersion}
            errorHandler={errorHandler}
            successHandler={successHandler}
            source={source}
          />
        </Card.Body>
      </Card>

      <br />

      <Card border="info">
        <Card.Body>
          <h2>Schedule</h2>
          <br />
          {source.scheduleAvailable ? (
            source.schedule ? (
              <Row>
                <Col>
                  <p>
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
                              <li>Profiles Exported: {run.profilesExported}</li>
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
                          <Link href="/run/[guid]" as={`/run/${run.guid}`}>
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
                      Date.parse(run.updatedAt) +
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
                        Date.parse(run.updatedAt) +
                          source.schedule.recurringFrequency <=
                          new Date().getTime() &&
                        recurringFrequencyMinutes) ||
                      !run ? (
                        source.schedule.recurring ? (
                          <strong>ASAP</strong>
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
                apiVersion={apiVersion}
                errorHandler={errorHandler}
                successHandler={successHandler}
                source={source}
              />
            )
          ) : (
            <Alert variant="warning">
              Schedule not available for this connection type
            </Alert>
          )}
        </Card.Body>
      </Card>

      <br />

      <Card border="info">
        <Card.Body>
          <h2>Profile Identification</h2>
          {source.previewAvailable ? (
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
          ) : (
            <Alert variant="warning">
              Mapping not available for this connection type
            </Alert>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
