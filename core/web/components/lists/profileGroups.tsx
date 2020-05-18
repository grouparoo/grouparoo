import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import { Row, Col, Button, Form, ListGroup } from "react-bootstrap";

import { GroupAPIData } from "../../utils/apiData";

export default function ({
  apiVersion,
  errorHandler,
  profileHandler,
  successHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<GroupAPIData[]>([]);
  const [allGroups, setAllGroups] = useState<GroupAPIData[]>([]);
  const { guid } = query;

  useEffect(() => {
    load();

    profileHandler.subscribe("profile-groups-list", load);
    return () => {
      profileHandler.unsubscribe("profile-groups-list", load);
    };
  }, []);

  async function load() {
    setLoading(true);

    const profileResponse = await execApi(
      "get",
      `/api/${apiVersion}/profile/${guid}`
    );
    if (profileResponse?.groups) {
      setGroups(profileResponse.groups);
    }

    const groupsResponse = await execApi("get", `/api/${apiVersion}/groups`);
    if (groupsResponse?.groups) {
      setAllGroups(groupsResponse.groups);
    }

    setLoading(false);
  }

  async function handleRemove(group) {
    const response = await execApi(
      "put",
      `/api/${apiVersion}/group/${group.guid}/remove`,
      {
        profileGuid: guid,
      }
    );
    if (response) {
      successHandler.set({
        message: `Profile Removed from Group ${group.name}`,
      });
      load();
      profileHandler.set();
    }
  }

  async function handleAdd(event) {
    const form = event.currentTarget;
    event.preventDefault();
    const groupGuid = form.elements[0].value;

    const response = await execApi(
      "put",
      `/api/${apiVersion}/group/${groupGuid}/add`,
      {
        profileGuid: guid,
      }
    );
    if (response) {
      successHandler.set({
        message: `Profile added to Group!`,
      });
      load();
      profileHandler.set();
    }
  }

  const groupMembershipGuids = groups.map((g) => g.guid);

  return (
    <>
      <h3>Groups</h3>

      {groups.length > 0 ? null : <p>None</p>}

      <ListGroup>
        {groups.map((group) => (
          <ListGroup.Item key={`groupMember-${group.guid}`} variant="info">
            {group.type === "manual" ? (
              <>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    handleRemove(group);
                  }}
                >
                  X
                </Button>
                &nbsp; &nbsp;
              </>
            ) : null}
            <Link href="/group/[guid]" as={`/group/${group.guid}`}>
              <a>{group.name}</a>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <hr />

      <Form onSubmit={(event) => handleAdd(event)}>
        <Row>
          <Col md={9}>
            <Form.Group controlId="groupGuid">
              <Form.Label>Add Group</Form.Label>
              <Form.Control as="select">
                {allGroups.map((group) => {
                  const disabled =
                    group.type !== "manual" ||
                    groupMembershipGuids.includes(group.guid);
                  return (
                    <option
                      disabled={disabled}
                      value={group.guid}
                      key={`group-${group.guid}`}
                    >
                      {group.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <br />
            <br />
            <Button variant="primary" size="sm" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
