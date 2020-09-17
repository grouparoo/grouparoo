import { useState, useRef } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Badge, Button, Table, Alert } from "react-bootstrap";
import ProfilePreview from "./../../../components/destination/profilePreview";
import Head from "next/head";
import { Typeahead } from "react-bootstrap-typeahead";
import DestinationTabs from "../../../components/tabs/destination";

import { DestinationAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    query,
    profilePropertyRules,
    mappingOptions,
    destinationTypeConversions,
    groups,
    exportArrayProperties,
    hydrationError,
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [trackedGroupGuid, setTrackedGroupGuid] = useState(
    props.trackedGroupGuid || "_none"
  );
  const [destination, setDestination] = useState<DestinationAPIData>(
    props.destination
  );
  const [
    displayedDestinationProperties,
    setDisplayedDestinationProperties,
  ] = useState<string[]>([]);
  const displayedDestinationPropertiesAutocomleteRef = useRef(null);
  const taggedGroupRef = useRef(null);
  const [
    unlockedProfilePropertyRules,
    setUnlockedProfilePropertyRules,
  ] = useState({});
  const [unlockedGroups, setUnlockedGroups] = useState([]);
  const { guid } = query;

  if (hydrationError) errorHandler.set({ error: hydrationError });

  const update = async (event) => {
    event.preventDefault();
    setLoading(true);

    // handle destination group membership & mapping
    const filteredMapping = {};
    for (const k in destination.mapping) {
      if (destination.mapping[k] && destination.mapping[k] !== "") {
        filteredMapping[k] = destination.mapping[k];
      }
    }
    const destinationGroupMembershipsObject = {};
    destination.destinationGroupMemberships.forEach(
      (dgm) =>
        (destinationGroupMembershipsObject[dgm.groupGuid] = dgm.remoteKey)
    );
    await execApi("put", `/destination/${guid}`, {
      mapping: filteredMapping,
      destinationGroupMemberships: destinationGroupMembershipsObject,
    });

    // update group being tracked after the edit
    if (
      trackedGroupGuid !== props.trackedGroupGuid &&
      trackedGroupGuid.match(/^grp_/)
    ) {
      await execApi("post", `/destination/${guid}/track`, {
        groupGuid: trackedGroupGuid,
      });
    } else if (
      trackedGroupGuid !== props.trackedGroupGuid &&
      trackedGroupGuid === "_none"
    ) {
      await execApi("post", `/destination/${guid}/untrack`);
    } else {
      // trigger a full export
      await execApi("post", `/destination/${guid}/export`, { force: true });
    }

    setLoading(false);
    successHandler.set({
      message: "Destination Updated and Profiles Exporting...",
    });
  };

  const remainingProfilePropertyRulesForKnown = [];
  for (const i in profilePropertyRules) {
    let inUse = false;
    for (const j in mappingOptions?.profilePropertyRules?.required) {
      const opt = mappingOptions.profilePropertyRules.required[j];
      if (destination.mapping[opt.key] === profilePropertyRules[i].key) {
        inUse = true;
      }
    }

    if (!inUse) {
      remainingProfilePropertyRulesForKnown.push(profilePropertyRules[i]);
    }
  }

  const remainingProfilePropertyRuleKeysForOptional = profilePropertyRules
    .filter(filterRuleForArrayProperties)
    .map((rule) => rule.key);

  mappingOptions?.profilePropertyRules?.required.map((opt) => {
    if (destination.mapping[opt.key]) {
      remainingProfilePropertyRuleKeysForOptional.splice(
        remainingProfilePropertyRuleKeysForOptional.indexOf(
          destination.mapping[opt.key]
        ),
        1
      );
    }
  });
  mappingOptions?.profilePropertyRules?.known.map((opt) => {
    if (destination.mapping[opt.key]) {
      remainingProfilePropertyRuleKeysForOptional.splice(
        remainingProfilePropertyRuleKeysForOptional.indexOf(
          destination.mapping[opt.key]
        ),
        1
      );
    }
  });

  const optionalMappingRemoteKeys = Object.keys(destination.mapping).filter(
    (key) => {
      if (
        mappingOptions?.profilePropertyRules?.required
          .map((opt) => opt.key)
          .includes(key)
      ) {
        return false;
      }
      if (
        mappingOptions?.profilePropertyRules?.known
          .map((opt) => opt.key)
          .includes(key)
      ) {
        return false;
      }
      return true;
    }
  );

  function updateMapping(key, value, oldKey = null) {
    const _destination = Object.assign({}, destination);
    let destinationMappingKeys = Object.keys(_destination.mapping);
    let insertIndex = destinationMappingKeys.length - 1;

    if (oldKey && value) {
      insertIndex = destinationMappingKeys.indexOf(oldKey);
      destinationMappingKeys.splice(insertIndex, 1, key);
    } else if (oldKey) {
      insertIndex = destinationMappingKeys.indexOf(oldKey);
      destinationMappingKeys.splice(insertIndex, 1);
    } else {
      destinationMappingKeys.push(key);
    }

    _destination.mapping[key] = value;

    const newMapping = {};
    destinationMappingKeys.map((k) => {
      newMapping[k] = _destination.mapping[k];
    });
    _destination.mapping = newMapping;

    if (value === "") {
      const _displayedDestinationProperties = [
        ...displayedDestinationProperties,
      ];

      _displayedDestinationProperties.splice(
        _displayedDestinationProperties.indexOf(oldKey),
        1
      );
      setDisplayedDestinationProperties(_displayedDestinationProperties);
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

  function toggleUnlockedProfilePropertyRule(key) {
    const _unlockedProfilePropertyRules = Object.assign(
      {},
      unlockedProfilePropertyRules
    );
    _unlockedProfilePropertyRules[
      destination.mapping[key]
    ] = _unlockedProfilePropertyRules[destination.mapping[key]] ? false : true;
    setUnlockedProfilePropertyRules(_unlockedProfilePropertyRules);
  }

  function toggleUnlockedGroup(groupGuid) {
    const _unlockedGroups = [].concat(unlockedGroups);
    if (_unlockedGroups.includes(groupGuid)) {
      const index = _unlockedGroups.indexOf(groupGuid);
      _unlockedGroups.splice(index, 1);
    } else {
      _unlockedGroups.push(groupGuid);
    }
    setUnlockedGroups(_unlockedGroups);
  }

  const groupsAvailalbeForDestinationGroupMemberships = groups
    .filter(
      (group) =>
        !destination.destinationGroupMemberships
          .map((dgm) => dgm.groupGuid)
          .includes(group.guid)
    )
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    .sort((a, b) => {
      if (a.guid === trackedGroupGuid) return -1;
      return 1;
    });

  function filterRuleForArrayProperties(rule) {
    return rule.isArray
      ? exportArrayProperties.includes("*") ||
        exportArrayProperties.includes(rule.key)
        ? true
        : false
      : true;
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs destination={destination} />

      <h1>Destination Data</h1>
      <Row>
        <Col>
          <Form id="form" onSubmit={update}>
            <Row>
              <Col>
                <h5>
                  Who should be sent to{" "}
                  <span className="text-primary">{destination.name}</span>?
                </h5>
                <Form.Control
                  as="select"
                  required={true}
                  value={trackedGroupGuid}
                  onChange={(e) => setTrackedGroupGuid(e.target["value"])}
                >
                  <option value={"_none"}>No Group</option>
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
                <h5>
                  What data do you want in{" "}
                  <span className="text-primary">{destination.name}</span>?
                </h5>

                <br />

                {/* Required Vars */}

                {mappingOptions?.profilePropertyRules?.required.length > 0 ? (
                  <>
                    <h6>
                      Required{" "}
                      {mappingOptions.labels.profilePropertyRule.plural}
                    </h6>
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
                                      destinationTypeConversions[
                                        rule.type
                                      ].includes(type)
                                    )
                                    .filter((rule) => !rule.isArray)
                                    .map((rule) => (
                                      <option key={`opt-required-${rule.guid}`}>
                                        {rule.key}
                                      </option>
                                    ))}
                                </Form.Control>
                              </td>
                              <td style={{ textAlign: "center" }}>→</td>
                              <td>
                                <Badge variant="info">{key}</Badge>{" "}
                                <span className="text-muted">({type})</span>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>{" "}
                    <br />
                  </>
                ) : null}

                {/* Known Vars */}

                {mappingOptions?.profilePropertyRules?.known.length > 0 ? (
                  <>
                    <h6>
                      Known {mappingOptions.labels.profilePropertyRule.plural}
                    </h6>
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
                        {mappingOptions.profilePropertyRules.known.map(
                          ({ key, type, important }, idx) =>
                            displayedDestinationProperties.includes(key) ||
                            important ||
                            destination.mapping[key] ? (
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
                                    {!destination.mapping[key] ? (
                                      <option disabled value={""}>
                                        None
                                      </option>
                                    ) : null}
                                    {remainingProfilePropertyRulesForKnown
                                      .filter((rule) =>
                                        destinationTypeConversions[
                                          rule.type
                                        ].includes(type)
                                      )
                                      .filter(filterRuleForArrayProperties)
                                      .map((rule) => (
                                        <option key={`opt-known-${rule.guid}`}>
                                          {rule.key}
                                        </option>
                                      ))}
                                  </Form.Control>
                                </td>
                                <td style={{ textAlign: "center" }}>→</td>
                                <td>
                                  <Badge
                                    variant={
                                      destination.mapping[key] ? "info" : "dark"
                                    }
                                  >
                                    {key}
                                  </Badge>{" "}
                                  <span className="text-muted">({type})</span>
                                </td>
                                <td>
                                  {destination.mapping[key] ? (
                                    <Button
                                      size="sm"
                                      variant="danger"
                                      onClick={() => {
                                        updateMapping(key, "", key);
                                      }}
                                    >
                                      X
                                    </Button>
                                  ) : null}
                                </td>
                              </tr>
                            ) : null
                        )}
                      </tbody>
                    </Table>

                    <Alert variant="light">
                      <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                          <strong>Send Profile Property:</strong>
                        </Form.Label>
                        <Col>
                          <Typeahead
                            id="displayedDestinationProperties"
                            ref={displayedDestinationPropertiesAutocomleteRef}
                            placeholder={`Choose a ${mappingOptions.labels.profilePropertyRule.singular}...`}
                            onChange={(selected) => {
                              displayedDestinationPropertiesAutocomleteRef.current.clear();

                              const _displayedDestinationProperties = [
                                ...displayedDestinationProperties,
                              ];
                              _displayedDestinationProperties.push(selected[0]);
                              setDisplayedDestinationProperties(
                                _displayedDestinationProperties
                              );
                            }}
                            options={mappingOptions.profilePropertyRules.known
                              .filter(
                                ({ key }) =>
                                  !displayedDestinationProperties.includes(
                                    key
                                  ) && !destination.mapping[key]
                              )
                              .filter(({ important }) => important !== true)
                              .map(({ key }) => key)}
                          />
                        </Col>
                      </Form.Group>
                    </Alert>
                  </>
                ) : null}

                {/* Optional Vars */}

                {mappingOptions?.profilePropertyRules
                  ?.allowOptionalFromProfilePropertyRules ? (
                  <>
                    <h6>
                      Optional{" "}
                      {mappingOptions.labels.profilePropertyRule.plural}
                    </h6>
                    <Table size="sm">
                      <thead>
                        <tr>
                          <th>Grouparoo Profile Property Rule</th>
                          <th />
                          <th>
                            {mappingOptions.labels.profilePropertyRule.singular}
                          </th>
                          <th />
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {optionalMappingRemoteKeys.map((key, idx) => (
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
                                {remainingProfilePropertyRuleKeysForOptional.map(
                                  (k) => (
                                    <option key={`opt-optional-${k}`}>
                                      {k}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </td>
                            <td style={{ textAlign: "center" }}>→</td>
                            <td>
                              <Form.Control
                                required
                                type="text"
                                value={key}
                                disabled={
                                  unlockedProfilePropertyRules[
                                    destination.mapping[key]
                                  ]
                                    ? false
                                    : true
                                }
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
                                variant="light"
                                onClick={() =>
                                  toggleUnlockedProfilePropertyRule(key)
                                }
                              >
                                ✏️
                              </Button>
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
                      variant="outline-primary"
                      disabled={profilePropertyRules.length === 0}
                      onClick={() => {
                        updateMapping("new mapping", "");
                      }}
                    >
                      Add new{" "}
                      {mappingOptions.labels.profilePropertyRule.singular}
                    </Button>{" "}
                    <br />
                  </>
                ) : null}

                <br />

                <h6>{mappingOptions?.labels?.group.plural}</h6>

                <Table size="sm">
                  <thead>
                    <tr>
                      <th>Grouparoo Group</th>
                      <th />
                      <th>{mappingOptions?.labels?.group.singular}</th>
                      <th />
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
                          <td style={{ textAlign: "center" }}>→</td>
                          <td>
                            <Form.Control
                              required
                              type="text"
                              disabled={!unlockedGroups.includes(groupGuid)}
                              value={remoteKey}
                              onChange={(e) =>
                                updateDestinationGroupMembership(
                                  groupGuid,
                                  e.target["value"]
                                )
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {mappingOptions?.labels?.group.singular} is
                              required
                            </Form.Control.Feedback>
                          </td>
                          <td>
                            <Button
                              size="sm"
                              variant="light"
                              onClick={() => toggleUnlockedGroup(groupGuid)}
                            >
                              ✏️
                            </Button>
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

                <Alert variant="light">
                  <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                      <strong>Send Group:</strong>
                    </Form.Label>
                    <Col>
                      <Typeahead
                        id="taggedGroup"
                        ref={taggedGroupRef}
                        disabled={
                          groupsAvailalbeForDestinationGroupMemberships.length ===
                          0
                        }
                        placeholder={`Choose a group...`}
                        onChange={(selected) => {
                          taggedGroupRef.current.clear();
                          const chosenGroup = groupsAvailalbeForDestinationGroupMemberships.filter(
                            (g) => g.name === selected[0]
                          )[0];

                          updateDestinationGroupMembership(
                            chosenGroup.guid,
                            chosenGroup.name
                          );
                        }}
                        options={groupsAvailalbeForDestinationGroupMemberships.map(
                          ({ name }) => name
                        )}
                      />
                    </Col>
                  </Form.Group>
                </Alert>
              </Col>
            </Row>

            <Row>
              <Col>
                <br />
                <hr />
                <Button type="submit" variant="primary" disabled={loading}>
                  Save Destination Data
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={3}>
          <ProfilePreview
            {...props}
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { destination } = await execApi("get", `/destination/${guid}`);
  const { groups } = await execApi("get", `/groups`);
  const { profilePropertyRules } = await execApi(
    "get",
    `/profilePropertyRules`,
    { state: "ready" }
  );

  let mappingOptions = {};
  let destinationTypeConversions = {};
  let exportArrayProperties = [];
  let hydrationError: Error;

  try {
    const mappingOptionsResponse = await execApi(
      "get",
      `/destination/${guid}/mappingOptions`
    );
    mappingOptions = mappingOptionsResponse.options;
    destinationTypeConversions =
      mappingOptionsResponse.destinationTypeConversions;

    const exportArrayPropertiesResponse = await execApi(
      "get",
      `/destination/${guid}/exportArrayProperties`
    );
    exportArrayProperties = exportArrayPropertiesResponse.exportArrayProperties;
  } catch (error) {
    hydrationError = error.toString();
  }

  return {
    destination,
    profilePropertyRules,
    mappingOptions,
    destinationTypeConversions,
    exportArrayProperties,
    trackedGroupGuid: destination.destinationGroup?.guid,
    groups: groups
      .filter((group) => group.state !== "draft")
      .filter((group) => group.state !== "deleted"),
    hydrationError,
  };
};
