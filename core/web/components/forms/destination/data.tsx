import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Badge, Button, Table } from "react-bootstrap";
import ProfilePreview from "./profilePreview";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [groups, setGroups] = useState([]);
  const [trackedGroupGuid, setTrackedGroupGuid] = useState("_none");
  const [mappingOptions, setMappingOptions] = useState({
    profilePropertyRules: {
      required: [],
      known: [],
      allowOptionalFromProfilePropertyRules: false,
    },
    labels: {
      profilePropertyRule: {
        singular: "",
        plural: "",
      },
      group: {
        singular: "",
        plural: "",
      },
    },
  });
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const [destination, setDestination] = useState({
    guid: "",
    name: "",
    trackAllGroups: false,
    destinationGroups: [],
    destinationGroupMemberships: [],
    mapping: {},
  });
  const { guid } = query;

  useEffect(() => {
    loadGroups();
    loadMappingOptions();
    loadProfilePropertyRules();
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}`,
      null,
      null,
      null,
      false
    );
    if (response?.destination) {
      setDestination(response.destination);
      setTrackedGroupGuid(
        response.destination.trackAllGroups
          ? "_all"
          : response.destination.destinationGroups[0]
          ? response.destination.destinationGroups[0].guid
          : "_none"
      );
    }
  }

  async function loadGroups() {
    const response = await execApi("get", `/api/${apiVersion}/groups`, {
      state: "ready",
    });
    if (response?.groups) {
      setGroups(response.groups);
    }
  }

  async function loadProfilePropertyRules() {
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`,
      { state: "ready" }
    );
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
    }
  }

  async function loadMappingOptions() {
    const response = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}/mappingOptions`
    );
    if (response?.options) {
      setMappingOptions(response.options);
    }
  }

  const update = async (event) => {
    event.preventDefault();

    const filteredMapping = {};
    for (const k in destination.mapping) {
      if (destination.mapping[k] && destination.mapping[k] !== "") {
        filteredMapping[k] = destination.mapping[k];
      }
    }

    // update mapping
    await execApi("put", `/api/${apiVersion}/destination/${guid}`, {
      mapping: filteredMapping,
    });

    // handle tracking
    if (trackedGroupGuid === "_all") {
      await execApi("put", `/api/${apiVersion}/destination/${guid}`, {
        trackAllGroups: true,
      });
    } else if (trackedGroupGuid === "_none") {
      // un track
      await execApi("post", `/api/${apiVersion}/destination/${guid}/untrack`);
      await execApi("put", `/api/${apiVersion}/destination/${guid}`, {
        trackAllGroups: false,
      });
    } else if (trackedGroupGuid) {
      // track
      await execApi("post", `/api/${apiVersion}/destination/${guid}/track`, {
        groupGuid: trackedGroupGuid,
      });
    }

    // handle group mappings
    const destinationGroupMembershipsObject = {};
    destination.destinationGroupMemberships.forEach(
      (dgm) =>
        (destinationGroupMembershipsObject[dgm.groupGuid] = dgm.remoteKey)
    );
    await execApi("put", `/api/${apiVersion}/destination/${guid}`, {
      destinationGroupMemberships: destinationGroupMembershipsObject,
    });

    successHandler.set({ message: "Destination Updated" });
    await load();
  };

  const optionalMappingKeys = Object.keys(destination.mapping).filter((key) => {
    if (
      mappingOptions.profilePropertyRules.required
        .map((opt) => opt.key)
        .includes(key)
    ) {
      return false;
    }
    if (
      mappingOptions.profilePropertyRules.known
        .map((opt) => opt.key)
        .includes(key)
    ) {
      return false;
    }
    return true;
  });

  function updateMapping(key, value, oldKey = null) {
    const _destination = Object.assign({}, destination);
    if (key) {
      _destination.mapping[key] = value;
    }
    if (oldKey) {
      delete _destination.mapping[oldKey];
    }
    setDestination(_destination);
  }

  function updateDestinationGroupMembership(
    groupGuid,
    remoteKey,
    oldGroupGuid = null
  ) {
    const _destination = Object.assign({}, destination);
    _destination.destinationGroupMemberships = _destination.destinationGroupMemberships.filter(
      (dgm) => dgm.groupGuid !== oldGroupGuid
    );

    const groupName = groups.filter((g) => g.guid === groupGuid)[0]?.name;

    let found = false;
    for (const i in _destination.destinationGroupMemberships) {
      if (_destination.destinationGroupMemberships[i].groupGuid === groupGuid) {
        _destination.destinationGroupMemberships[i] = {
          groupGuid,
          groupName,
          remoteKey: remoteKey ? remoteKey : groupName,
        };
        found = true;
      }
    }

    if (!found && groupGuid) {
      _destination.destinationGroupMemberships.push({
        groupGuid,
        groupName,
        remoteKey: remoteKey ? remoteKey : groupName,
      });
    }

    setDestination(_destination);
  }

  const groupsAvailalbeForDestinationGroupMemberships = groups.filter(
    (group) =>
      !destination.destinationGroupMemberships
        .map((dgm) => dgm.groupGuid)
        .includes(group.guid)
  );

  return (
    <>
      <h1>Destination Data</h1>
      <Row>
        <Col>
          <Form id="form" onSubmit={update}>
            <Row>
              <Col>
                <h2>
                  Who should be sent to{" "}
                  <span className="text-primary">{destination.name}</span>?
                </h2>
                <Form.Control
                  as="select"
                  required={true}
                  value={trackedGroupGuid}
                  onChange={(e) => setTrackedGroupGuid(e.target["value"])}
                >
                  <option value={"_none"}>No Group</option>
                  <option value={"_all"}>All Groups</option>
                  <option disabled>---</option>
                  {groups
                    .sort((a, b) => {
                      if (a.name >= b.name) {
                        return 1;
                      } else {
                        return -1;
                      }
                    })
                    .map((group) => (
                      <option key={`grp-${group.guid}`} value={group.guid}>
                        {group.name} ({group.profilesCount} members)
                      </option>
                    ))}
                </Form.Control>
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <h2>
                  What data do you want in{" "}
                  <span className="text-primary">{destination.name}</span>?
                </h2>

                <br />

                <h3>
                  Required {mappingOptions.labels.profilePropertyRule.plural}
                </h3>

                {mappingOptions.profilePropertyRules.required.length > 0 ? (
                  <Table size="sm">
                    <thead>
                      <tr>
                        <th>Grouparoo Profile Property Rule</th>
                        <th />
                        <th>
                          {mappingOptions.labels.profilePropertyRule.singular}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mappingOptions.profilePropertyRules.required.map(
                        ({ key, type }, idx) => (
                          <tr key={`required-mapping-${idx}`}>
                            <td>
                              <Form.Control
                                as="select"
                                required={true}
                                value={destination.mapping[key] || ""}
                                onChange={(e) =>
                                  updateMapping(key, e.target["value"])
                                }
                              >
                                <option disabled value={""}>
                                  choose a profile property rule
                                </option>
                                {profilePropertyRules
                                  .filter((rule) =>
                                    type === "any" ? true : rule.type === type
                                  )
                                  .map((rule) => (
                                    <option key={`opt-required-${rule.guid}`}>
                                      {rule.key}
                                    </option>
                                  ))}
                              </Form.Control>
                            </td>
                            <td style={{ textAlign: "center" }}>---></td>
                            <td>
                              <Badge variant="secondary">{key}</Badge>{" "}
                              <span className="text-muted">({type})</span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                ) : (
                  <p>None</p>
                )}

                <br />

                <h3>
                  Known {mappingOptions.labels.profilePropertyRule.plural}
                </h3>
                {mappingOptions.profilePropertyRules.known.length > 0 ? (
                  <Table size="sm">
                    <thead>
                      <tr>
                        <th>Grouparoo Profile Property Rule</th>
                        <th />
                        <th>
                          {mappingOptions.labels.profilePropertyRule.singular}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mappingOptions.profilePropertyRules.known.map(
                        ({ key, type }, idx) => (
                          <tr key={`known-mapping-${idx}`}>
                            <td>
                              <Form.Control
                                as="select"
                                required={false}
                                value={destination.mapping[key] || ""}
                                onChange={(e) =>
                                  updateMapping(key, e.target["value"])
                                }
                              >
                                <option value={""}>None</option>
                                <option disabled>---</option>
                                {profilePropertyRules
                                  .filter((rule) =>
                                    type === "any" ? true : rule.type === type
                                  )
                                  .map((rule) => (
                                    <option key={`opt-known-${rule.guid}`}>
                                      {rule.key}
                                    </option>
                                  ))}
                              </Form.Control>
                            </td>
                            <td style={{ textAlign: "center" }}>---></td>
                            <td>
                              <Badge variant="secondary">{key}</Badge>{" "}
                              <span className="text-muted">({type})</span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                ) : (
                  <p>None</p>
                )}

                <br />

                <h3>
                  Optional {mappingOptions.labels.profilePropertyRule.plural}
                </h3>

                {mappingOptions.profilePropertyRules
                  .allowOptionalFromProfilePropertyRules ? (
                  <>
                    <Table size="sm">
                      <thead>
                        <tr>
                          <th>Grouparoo Profile Property Rule</th>
                          <th />
                          <th>
                            {mappingOptions.labels.profilePropertyRule.singular}
                          </th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {optionalMappingKeys.map((key, idx) => (
                          <tr key={`optional-mapping-${idx}`}>
                            <td>
                              <Form.Control
                                as="select"
                                required={false}
                                value={destination.mapping[key] || ""}
                                onChange={(e) =>
                                  updateMapping(
                                    e.target["value"],
                                    e.target["value"],
                                    key
                                  )
                                }
                              >
                                <option disabled value={""}>
                                  choose a profile property rule
                                </option>
                                {profilePropertyRules.map((rule) => (
                                  <option key={`opt-optional-${rule.guid}`}>
                                    {rule.key}
                                  </option>
                                ))}
                              </Form.Control>
                            </td>
                            <td style={{ textAlign: "center" }}>---></td>
                            <td>
                              <Form.Control
                                required
                                type="text"
                                value={key}
                                onChange={(e) =>
                                  updateMapping(
                                    e.target["value"],
                                    destination.mapping[key],
                                    key
                                  )
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {
                                  mappingOptions.labels.profilePropertyRule
                                    .singular
                                }{" "}
                                is required
                              </Form.Control.Feedback>
                            </td>
                            <td>
                              <Button
                                size="sm"
                                variant="danger"
                                onClick={() => {
                                  updateMapping(null, null, key);
                                }}
                              >
                                X
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Button
                      size="sm"
                      variant="primary"
                      disabled={profilePropertyRules.length === 0}
                      onClick={() => {
                        updateMapping("new mapping", "");
                      }}
                    >
                      Add new{" "}
                      {mappingOptions.labels.profilePropertyRule.singular}
                    </Button>
                  </>
                ) : (
                  <p>None</p>
                )}

                <br />
                <br />

                <h3>{mappingOptions.labels.group.plural}</h3>

                <Table size="sm">
                  <thead>
                    <tr>
                      <th>Grouparoo Group</th>
                      <th />
                      <th>{mappingOptions.labels.group.singular}</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {destination.destinationGroupMemberships.map(
                      ({ groupName, groupGuid, remoteKey }, idx) => (
                        <tr key={`optional-mapping-${idx}`}>
                          <td>
                            <Form.Control
                              as="select"
                              required={false}
                              value={groupGuid}
                              onChange={(e) =>
                                updateDestinationGroupMembership(
                                  e.target["value"],
                                  null,
                                  groupGuid
                                )
                              }
                            >
                              <option disabled value={""}>
                                choose a group
                              </option>
                              {groups.map((group) => (
                                <option
                                  value={group.guid}
                                  key={`group-remote-mapping-${group.guid}`}
                                >
                                  {group.name}
                                </option>
                              ))}
                            </Form.Control>
                          </td>
                          <td style={{ textAlign: "center" }}>---></td>
                          <td>
                            <Form.Control
                              required
                              type="text"
                              value={remoteKey}
                              onChange={(e) =>
                                updateDestinationGroupMembership(
                                  groupGuid,
                                  e.target["value"]
                                )
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {mappingOptions.labels.group.singular} is required
                            </Form.Control.Feedback>
                          </td>
                          <td>
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => {
                                updateDestinationGroupMembership(
                                  null,
                                  null,
                                  groupGuid
                                );
                              }}
                            >
                              X
                            </Button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
                <Button
                  size="sm"
                  variant="primary"
                  disabled={
                    groupsAvailalbeForDestinationGroupMemberships.length === 0
                  }
                  onClick={() => {
                    updateDestinationGroupMembership(
                      groupsAvailalbeForDestinationGroupMemberships[0].guid,
                      groupsAvailalbeForDestinationGroupMemberships[0].name
                    );
                  }}
                >
                  Add new {mappingOptions.labels.group.singular}
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
                <hr />
                <Button type="submit" variant="warning">
                  Save Destination Data
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={3}>
          <ProfilePreview
            apiVersion={apiVersion}
            errorHandler={errorHandler}
            mappingOptions={mappingOptions}
            destination={destination}
            groups={groups}
            trackedGroupGuid={trackedGroupGuid}
          />
        </Col>
      </Row>
    </>
  );
}
