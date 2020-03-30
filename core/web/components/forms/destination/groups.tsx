import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Link from "next/link";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [groups, setGroups] = useState([]);
  const [destination, setDestination] = useState({
    guid: "",
    trackAllGroups: false,
    destinationGroups: [],
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const groupsResponse = await execApi("get", `/api/${apiVersion}/groups`);
    if (groupsResponse?.groups) {
      setGroups(groupsResponse.groups);
    }

    const destinationResponse = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}`
    );
    if (destinationResponse?.destination) {
      setDestination(destinationResponse.destination);
    }
  }

  const updateAllGroups = async (event) => {
    const response = await execApi(
      "put",
      `/api/${apiVersion}/destination/${guid}`,
      { trackAllGroups: !destination.trackAllGroups }
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination updated" });
      setDestination(response.destination);
    }
  };

  async function toggleDestinationGroup(group, add) {
    const path = `/api/${apiVersion}/destination/${guid}/${
      add ? "track" : "unTrack"
    }`;
    const response = await execApi("post", path, { groupGuid: group.guid });
    if (response) {
      successHandler.set({ message: "Group Updated" });
      await load();
    }
  }

  const destinationGroupGuids = destination.destinationGroups.map(
    (dsg) => dsg.guid
  );

  return (
    <>
      <Row>
        <Col md={2}>
          <Form id="form">
            <Form.Group controlId="trackAllGroups">
              <Form.Check
                checked={destination.trackAllGroups}
                type="checkbox"
                label="Track All Groups?"
                onChange={(e) => updateAllGroups(e)}
              />
            </Form.Group>
          </Form>
        </Col>

        {!destination.trackAllGroups ? (
          <Col md={10}>
            <h4>Groups</h4>

            <ListGroup>
              {groups.map((group) => {
                const tracked = destinationGroupGuids.indexOf(group.guid) >= 0;

                return (
                  <ListGroup.Item
                    key={group.guid}
                    variant={tracked ? "success" : "info"}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Button
                              size="sm"
                              variant={tracked ? "warning" : "info"}
                              onClick={() => {
                                toggleDestinationGroup(group, !tracked);
                              }}
                            >
                              {!tracked ? "track" : "stop tracking"}
                            </Button>
                          </td>
                          <td>&nbsp;</td>
                          <td>
                            <Link
                              href="/group/[guid]"
                              as={`/group/${group.guid}`}
                            >
                              <a>{group.name}</a>
                            </Link>
                            <br />
                            <small>{group.profilesCount} members</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        ) : null}
      </Row>
    </>
  );
}
