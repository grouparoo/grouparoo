import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Row, Col, Jumbotron, CardGroup, Card } from "react-bootstrap";
import { useApi } from "../../hooks/useApi";
import Loader from "../loader";

function SparkCard({ errorHandler, model, title, href = null }) {
  const [total, setTotal] = useState(null);
  const [rolling, setRolling] = useState([]);
  const { execApi } = useApi(errorHandler);

  useEffect(() => {
    load();
  }, []);

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

function BigNumber({ errorHandler, model, title, href = null }) {
  const [total, setTotal] = useState(null);
  const { execApi } = useApi(errorHandler);

  useEffect(() => {
    load();
  }, []);

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

export default function ({ errorHandler }) {
  return (
    <>
      <Jumbotron>
        <h3>Totals</h3>

        <Row>
          <Col>
            <BigNumber
              errorHandler={errorHandler}
              href="profiles"
              model="Profile"
              title="Profiles"
            />
          </Col>
          <Col>
            <BigNumber
              errorHandler={errorHandler}
              href="groups"
              model="Group"
              title="Groups"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <BigNumber
              errorHandler={errorHandler}
              model="ProfileProperty"
              title="Profile Properties"
            />
          </Col>
          <Col>
            <BigNumber
              errorHandler={errorHandler}
              model="GroupMember"
              title="Group Members"
            />
          </Col>
        </Row>

        <br />
        <h3>System</h3>
        <CardGroup>
          <SparkCard
            errorHandler={errorHandler}
            href="events"
            model="Event"
            title="Events"
          />
          <SparkCard
            errorHandler={errorHandler}
            href="runs"
            model="Run"
            title="Runs"
          />
          <SparkCard
            errorHandler={errorHandler}
            href="imports"
            model="Import"
            title="Imports"
          />
          <SparkCard
            errorHandler={errorHandler}
            href="exports"
            model="Export"
            title="Exports"
          />
          <SparkCard
            errorHandler={errorHandler}
            href="logs"
            model="Log"
            title="Logs"
          />
        </CardGroup>
      </Jumbotron>
    </>
  );
}
