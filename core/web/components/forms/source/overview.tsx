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
import Link from "next/link";
import ProfilePropertyRuleAddModal from "./../../modals/profilePropertyRuleAdd";
import ScheduleAddButton from "./../schedule/add";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [source, setSource] = useState({
    name: "",
    mapping: {},
    options: {},
    scheduleAvailable: false,
    schedule: { name: "", guid: "", recurring: false, recurringFrequency: 0 },
    connection: { name: "", description: "" },
    app: { icon: "", name: "", guid: "" },
    profilePropertyRules: [],
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const sourceResponse = await execApi(
      "get",
      `/api/${apiVersion}/source/${guid}`
    );
    if (sourceResponse?.source) {
      setSource(sourceResponse.source);
    }
  }

  return (
    <>
      <Jumbotron>
        <Row>
          <Col md={1}>
            <AppIcon src={source.app.icon} fluid size={100} />
          </Col>
          <Col>
            <h1>{source.name}</h1>
            <p>
              <strong>App</strong>:{" "}
              <Link href="/app/[guid]" as={`/app/${source.app.guid}`}>
                <a>
                  {source.app.name} ({source.app.guid})
                </a>
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
                <th>Passive</th>
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
                        <strong>{rule.key}</strong>
                        <br />
                        <small>{rule.guid}</small>
                      </a>
                    </Link>
                  </td>
                  <td>{rule.type}</td>
                  <td>
                    <input readOnly type="checkbox" checked={rule.unique} />
                  </td>
                  <td>
                    <input readOnly type="checkbox" checked={rule.passive} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <ProfilePropertyRuleAddModal
            apiVersion={apiVersion}
            errorHandler={errorHandler}
            successHandler={successHandler}
            query={query}
            sourceGuid={guid}
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
              <p>
                <Link
                  href="/schedule/[guid]"
                  as={`/schedule/${source.schedule.guid}`}
                >
                  <a>
                    <strong>Name</strong>: {source.schedule.name} (
                    {source.schedule.guid})
                  </a>
                </Link>
                <br />
                <strong>Recurring</strong>:{" "}
                <Badge
                  variant={source.schedule.recurring ? "success" : "secondary"}
                >
                  {source.schedule.recurring.toString()}
                </Badge>
                <br />
                <strong>Frequency</strong>: {source.schedule.recurringFrequency}
              </p>
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
          {Object.keys(source.mapping).length === 1 ? (
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
            <Alert variant="warning">
              Mapping not available for this connection type
            </Alert>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
