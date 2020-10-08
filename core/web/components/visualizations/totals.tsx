import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparklines, SparklinesLine } from "react-sparklines";
import {
  Row,
  Col,
  CardGroup,
  Card,
  Table,
  Badge,
  ProgressBar,
} from "react-bootstrap";
import { useApi } from "../../hooks/useApi";
import { Models } from "../../utils/apiData";
import { useRealtimeModelStream } from "../../hooks/useRealtimeModelStream";
import Loader from "../loader";

const TIMEOUT = 15 * 1000;

function SparkCard({ execApi, model, title, href = null }) {
  const [total, setTotal] = useState(null);
  const [rolling, setRolling] = useState([]);
  let timer;

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timer);
    };
  }, []);

  function startTimer() {
    load();
    timer = setInterval(load, TIMEOUT);
  }

  async function load() {
    const response = await execApi("get", `/totals`, {
      model,
    });

    if (response) {
      setRolling(response?.rolling);
      setTotal(response?.total);
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {href ? (
            <Link href={href}>
              <a>{title}</a>
            </Link>
          ) : (
            title
          )}
        </Card.Title>
        {rolling.length > 0 ? (
          <Sparklines
            data={rolling.map((r) => r.count)}
            width={100}
            height={20}
            margin={5}
          >
            <SparklinesLine color="#4BBF73" />
          </Sparklines>
        ) : (
          <Loader />
        )}
      </Card.Body>
      <Card.Footer>Total: {total ? total : "..."}</Card.Footer>
    </Card>
  );
}

function BigNumber({ execApi, model, title, href = null }) {
  const [total, setTotal] = useState(null);
  let timer;

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timer);
    };
  }, []);

  function startTimer() {
    load();
    timer = setInterval(load, TIMEOUT);
  }

  async function load() {
    const response = await execApi("get", `/totals`, {
      model,
    });

    if (response) {
      setTotal(response?.total);
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {href ? (
            <Link href={href}>
              <a>{title}</a>
            </Link>
          ) : (
            title
          )}
        </Card.Title>
        <span style={{ fontSize: 25 }}>{total ? total : "..."}</span>
      </Card.Body>
    </Card>
  );
}

function PendingExports({ execApi }) {
  const [destinations, setDestinations] = useState([]);
  let timer;

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timer);
    };
  }, []);

  function startTimer() {
    load();
    timer = setInterval(load, TIMEOUT);
  }

  async function load() {
    const response = await execApi("get", `/destinations`, { state: "ready" });
    if (response) {
      setDestinations(response.destinations);
    }
  }

  if (destinations.length === 0) {
    return <p>No Destinations</p>;
  }

  return (
    <Table borderless size="sm">
      <tbody>
        {destinations.map((destination) => {
          const pendingExports =
            destination.exportTotals.created + destination.exportTotals.started;

          return (
            <tr key={`destination-${destination.guid}`}>
              <td>
                <Link
                  href="/destination/[guid]/edit"
                  as={`/destination/${destination.guid}/edit`}
                >
                  <a>{destination.name}</a>
                </Link>
              </td>
              <td>
                {
                  <Badge variant={pendingExports > 0 ? "warning" : "info"}>
                    {pendingExports}
                  </Badge>
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function RunningRuns({ execApi }) {
  useRealtimeModelStream("run", "totals-runs-list", load);
  const [runs, setRuns] = useState<Models.RunType[]>([]);
  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { runs } = await execApi("get", `/runs`, { state: "running" });
    setRuns(runs);
  }

  if (runs.length === 0) {
    return <p>No active Runs</p>;
  }

  return (
    <Table borderless size="sm">
      <tbody>
        {runs.map((run) => (
          <tr key={`run-${run.guid}`}>
            <td>
              <Link href="/run/[guid]/edit" as={`/run/${run.guid}/edit`}>
                <a>
                  {run.creatorType}: {run.creatorName}
                </a>
              </Link>
            </td>
            <td>
              <ProgressBar
                variant="info"
                style={{ minWidth: 300 }}
                animated={run.percentComplete > 0 ? true : false}
                now={run.percentComplete}
                label={`${run.percentComplete}%`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default function Totals(props) {
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  return (
    <>
      <h2>Totals</h2>

      <Row>
        <Col>
          <BigNumber
            execApi={execApi}
            href="profiles"
            model="Profile"
            title="Profiles"
          />
        </Col>

        <Col>
          <BigNumber
            execApi={execApi}
            href="groups"
            model="Group"
            title="Groups"
          />
        </Col>
      </Row>

      <br />
      <h3>System</h3>
      <CardGroup>
        <SparkCard
          execApi={execApi}
          href="events/overview"
          model="Event"
          title="Events"
        />
        <SparkCard execApi={execApi} href="runs" model="Run" title="Runs" />
        <SparkCard
          execApi={execApi}
          href="imports"
          model="Import"
          title="Imports"
        />
        <SparkCard
          execApi={execApi}
          href="exports"
          model="Export"
          title="Exports"
        />
        <SparkCard
          execApi={execApi}
          href="logs/list"
          model="Log"
          title="Logs"
        />
      </CardGroup>

      <br />

      <Row>
        <Col>
          <h3>Active Runs</h3>
          <RunningRuns execApi={execApi} />
        </Col>
        <Col>
          <h3>Pending Exports</h3>
          <PendingExports execApi={execApi} />
        </Col>
      </Row>
    </>
  );
}
