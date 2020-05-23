import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button } from "react-bootstrap";
import StateBadge from "../../stateBadge";
import Moment from "react-moment";
import Router from "next/router";

import { GroupAPIData } from "../../../utils/apiData";

export default function ({
  errorHandler,
  successHandler,
  groupHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState<GroupAPIData>({
    name: "",
    type: "",
    matchType: "all",
  });

  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/group/${guid}`);
    setLoading(false);
    if (response?.group) {
      setGroup(response.group);
    }
  }

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("put", `/group/${guid}`, group);
    setLoading(false);
    if (response?.group) {
      successHandler.set({ message: "Group Updated" });
      setGroup(response.group);
      groupHandler.set();
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi("delete", `/group/${guid}`);
      setLoading(false);
      if (response?.success) {
        successHandler.set({ message: "Group Deleted" });
        Router.push("/groups");
      }
    }
  }

  function update(event) {
    const _group = Object.assign({}, group);
    _group[event.target.id] = event.target.value;
    setGroup(_group);
  }

  return (
    <>
      <StateBadge state={group.state} />
      <br />
      <br />
      <Row>
        <Col md={group.type === "calculated" ? 8 : 12}>
          <Form id="form" onSubmit={submit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Group Name"
                value={group.name}
                onChange={update}
              />
              <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Group Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={group.type}
                onChange={update}
              >
                <option>manual</option>
                <option>calculated</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="matchType">
              <Form.Label>Match Type</Form.Label>
              <Form.Control
                as="select"
                value={group.matchType}
                onChange={update}
              >
                <option>any</option>
                <option>all</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" active={!loading}>
              Update
            </Button>

            <br />
            <br />
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </Button>
          </Form>
        </Col>
        {group.type === "calculated" ? (
          <Col>
            <p>
              {group.calculatedAt ? (
                <span>
                  Last Member Calculation:{" "}
                  <Moment fromNow>{group.calculatedAt}</Moment>
                </span>
              ) : (
                "Never Calculated"
              )}
              <br />
              {group.nextCalculatedAt ? (
                <span>
                  Next Member Calculation:{" "}
                  <Moment fromNow>{group.nextCalculatedAt}</Moment>
                </span>
              ) : null}
            </p>
          </Col>
        ) : null}
      </Row>
    </>
  );
}
