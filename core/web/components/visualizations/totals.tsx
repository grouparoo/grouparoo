import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Row, Col, CardGroup, Card } from "react-bootstrap";
import { useApi } from "../../hooks/useApi";
import Loader from "../loader";

const TIMEOUT = 30 * 1000;

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

export default function (props) {
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
          href="events"
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
        <SparkCard execApi={execApi} href="logs" model="Log" title="Logs" />
      </CardGroup>
    </>
  );
}
