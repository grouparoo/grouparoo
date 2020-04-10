import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Table, Badge } from "react-bootstrap";
import StateBadge from "../../stateBadge";
import Moment from "react-moment";
import Router from "next/router";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  groupHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState({
    name: "",
    type: "",
    state: "",
    calculatedAt: "",
    nextCalculatedAt: "",
    matchType: "",
    rules: [],
  });

  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/group/${guid}`);
    setLoading(false);
    if (response?.group) {
      setGroup(response.group);
    }
  }

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/group/${guid}`,
      data
    );
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
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/group/${guid}`
      );
      setLoading(false);
      if (response?.success) {
        successHandler.set({ message: "Group Deleted" });
        Router.push("/groups");
      }
    }
  }

  if (group.type === "") {
    return null;
  }

  return (
    <>
      <StateBadge state={group.state} />
      <br />
      <br />
      <Row>
        <Col md={group.type === "calculated" ? 8 : 12}>
          <Form id="form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Group Name"
                defaultValue={group.name}
                ref={register}
              />
              <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Group Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                defaultValue={group.type}
                ref={register}
              >
                <option>manual</option>
                <option>calculated</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Match Type</Form.Label>
              <Form.Control
                name="matchType"
                as="select"
                defaultValue={group.matchType}
                ref={register}
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
