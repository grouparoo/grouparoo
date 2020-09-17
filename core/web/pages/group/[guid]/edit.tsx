import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button } from "react-bootstrap";
import StateBadge from "../../../components/stateBadge";
import Moment from "react-moment";
import Router from "next/router";
import Head from "next/head";
import GroupTabs from "../../../components/tabs/group";

import { GroupAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, groupHandler } = props;
  const [group, setGroup] = useState<GroupAPIData>(props.group);
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.groupHandler.subscribe("group-edit", (_group) => {
      setGroup(_group);
    });

    return () => {
      props.groupHandler.unsubscribe("group-edit");
    };
  }, []);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("put", `/group/${group.guid}`, group);
    setLoading(false);
    if (response?.group) {
      successHandler.set({ message: "Group Updated" });
      setGroup(response.group);
      groupHandler.set(response.group);
    }
  }

  async function handleDelete(force = false) {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi("delete", `/group/${group.guid}`, {
        force,
      });
      setLoading(false);
      if (response?.success) {
        successHandler.set({
          message: force ? "Group Deleted" : "Group scheduled to be deleted",
        });
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
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>

      <GroupTabs group={group} />

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
                disabled
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

            {group.state === "deleted" ? (
              <>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    handleDelete(true);
                  }}
                >
                  Force Delete
                </Button>
                <p>
                  <br />
                  <em>
                    Force-Deleting this Group will immediately remove all Group
                    Members, but not export them to Destinations. Only use this
                    if there is a problem with your Group.
                  </em>
                </p>
              </>
            ) : (
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </Button>
            )}
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

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { group } = await execApi("get", `/group/${guid}`);
  return { group };
};
