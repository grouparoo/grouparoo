import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form } from "react-bootstrap";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";
import { useRouter } from "next/router";
import Head from "next/head";
import GroupTabs from "../../../components/tabs/group";
import LoadingButton from "../../../components/loadingButton";

import { Models, Actions } from "../../../utils/apiData";
import { formatTimestamp } from "../../../utils/formatTimestamp";

export default function Page(props) {
  const { errorHandler, successHandler, groupHandler } = props;
  const router = useRouter();
  const [group, setGroup] = useState<Models.GroupType>(props.group);
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
    const response: Actions.GroupEdit = await execApi(
      "put",
      `/group/${group.id}`,
      group
    );

    if (response?.group) {
      successHandler.set({ message: "Group Updated" });
      setGroup(response.group);
      groupHandler.set(response.group);
    }
    setLoading(false);
  }

  async function handleDelete(force = false) {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.GroupDestroy = await execApi(
        "delete",
        `/group/${group.id}`,
        { force }
      );
      if (response?.success) {
        successHandler.set({
          message: force ? "Group Deleted" : "Group scheduled to be deleted",
        });
        router.push("/groups");
      } else {
        setLoading(false);
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
      <h1>{group.name}</h1>
      <StateBadge state={group.state} /> <LockedBadge object={group} />
      {group.type === "calculated" &&
      process.env.GROUPAROO_UI_EDITION !== "config" ? (
        <Row>
          <Col>
            <p>
              {group.calculatedAt ? (
                <span>
                  Last Member Calculation: {formatTimestamp(group.calculatedAt)}
                </span>
              ) : (
                "Never Calculated"
              )}
              <br />
              {group.nextCalculatedAt ? (
                <span>
                  Next Member Calculation:{" "}
                  {formatTimestamp(group.nextCalculatedAt)}
                </span>
              ) : null}
            </p>
          </Col>
        </Row>
      ) : null}
      <Row>
        <Col>
          <Form id="form" onSubmit={submit} autoComplete="off">
            <fieldset disabled={group.locked !== null}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Group Name"
                  value={group.name}
                  disabled={loading}
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
                  disabled={loading}
                >
                  <option>any</option>
                  <option>all</option>
                </Form.Control>
              </Form.Group>

              <LoadingButton variant="primary" type="submit" disabled={loading}>
                Update
              </LoadingButton>

              <br />
              <br />

              {group.state === "deleted" ? (
                <>
                  <LoadingButton
                    variant="danger"
                    disabled={loading}
                    size="sm"
                    onClick={() => {
                      handleDelete(true);
                    }}
                  >
                    Force Delete
                  </LoadingButton>
                  <p>
                    <br />
                    <em>
                      Force-Deleting this Group will immediately remove all
                      Group Members, but not export them to Destinations. Only
                      use this if there is a problem with your Group.
                    </em>
                  </p>
                </>
              ) : (
                <LoadingButton
                  variant="danger"
                  disabled={loading}
                  size="sm"
                  onClick={() => {
                    handleDelete(process.env.GROUPAROO_UI_EDITION === "config");
                  }}
                >
                  Delete
                </LoadingButton>
              )}
            </fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { group } = await execApi("get", `/group/${id}`);
  return { group };
};
