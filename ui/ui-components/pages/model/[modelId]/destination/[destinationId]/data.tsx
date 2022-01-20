import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPageContext } from "next";
import { Row, Col, Form, Badge, Button, Table, Alert } from "react-bootstrap";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { errorHandler, successHandler } from "../../../../../eventHandlers";
import DestinationTabs from "../../../../../components/tabs/Destination";
import LoadingButton from "../../../../../components/LoadingButton";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import PageHeader from "../../../../../components/PageHeader";
import { UseApi } from "../../../../../hooks/useApi";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import DestinationSampleRecord from "../../../../../components/destination/DestinationSampleRecord";
import { Actions, Models } from "../../../../../utils/apiData";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";

export default function Page(props) {
  const {
    model,
    properties,
    mappingOptions,
    destinationTypeConversions,
    groups,
    exportArrayProperties,
    hydrationError,
  }: {
    model: Models.GrouparooModelType;
    hydrationError: Error;
    properties: Models.PropertyType[];
    groups: Models.GroupType[];
    mappingOptions: Actions.DestinationMappingOptions["options"];
    destinationTypeConversions: Actions.DestinationMappingOptions["destinationTypeConversions"];
    exportArrayProperties: Actions.DestinationExportArrayProperties["exportArrayProperties"];
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState<Models.DestinationType>(
    props.destination
  );
  const [groupId, setGroupId] = useState<string>(destination.group?.id);
  const [collection, setCollection] = useState<
    Models.DestinationType["collection"]
  >(destination.collection);

  const [displayedDestinationProperties, setDisplayedDestinationProperties] =
    useState<string[]>([]);
  const displayedDestinationPropertiesAutocomleteRef = useRef(null);
  const taggedGroupRef = useRef(null);
  const [unlockedProperties, setUnlockedProperties] = useState({});
  const [unlockedGroups, setUnlockedGroups] = useState<string[]>([]);
  const { destinationId } = router.query;

  if (hydrationError) errorHandler.set({ message: hydrationError });

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
      (dgm) => (destinationGroupMembershipsObject[dgm.groupId] = dgm.remoteKey)
    );

    await execApi("put", `/destination/${destinationId}`, {
      mapping: filteredMapping,
      collection,
      groupId,
      destinationGroupMemberships: destinationGroupMembershipsObject,
      triggerExport: true,
    });

    setLoading(false);
    successHandler.set({
      message:
        grouparooUiEdition() === "config"
          ? "Destination Updated"
          : "Destination Updated and Records Exporting...",
    });
  };

  const remainingPropertiesForKnown = [];
  for (const i in properties) {
    let inUse = false;
    for (const j in mappingOptions?.properties?.required) {
      const opt = mappingOptions.properties.required[j];
      if (destination.mapping[opt.key] === properties[i].key) {
        inUse = true;
      }
    }

    if (!inUse) {
      remainingPropertiesForKnown.push(properties[i]);
    }
  }

  const remainingPropertyKeysForOptional = properties
    .filter(filterRuleForArrayProperties)
    .map((rule) => rule.key);

  mappingOptions?.properties?.required.map((opt) => {
    if (destination.mapping[opt.key]) {
      remainingPropertyKeysForOptional.splice(
        remainingPropertyKeysForOptional.indexOf(destination.mapping[opt.key]),
        1
      );
    }
  });
  mappingOptions?.properties?.known.map((opt) => {
    if (destination.mapping[opt.key]) {
      remainingPropertyKeysForOptional.splice(
        remainingPropertyKeysForOptional.indexOf(destination.mapping[opt.key]),
        1
      );
    }
  });

  const optionalMappingRemoteKeys = Object.keys(destination.mapping).filter(
    (key) => {
      if (
        mappingOptions?.properties?.required.map((opt) => opt.key).includes(key)
      ) {
        return false;
      }
      if (
        mappingOptions?.properties?.known.map((opt) => opt.key).includes(key)
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

    if (oldKey !== null && oldKey !== undefined && value) {
      insertIndex = destinationMappingKeys.indexOf(oldKey);
      destinationMappingKeys.splice(insertIndex, 1, key);
    } else if (oldKey !== null && oldKey !== undefined) {
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
    groupId,
    remoteKey,
    oldGroupId = null
  ) {
    const _destination = Object.assign({}, destination);
    _destination.destinationGroupMemberships =
      _destination.destinationGroupMemberships.filter(
        (dgm) => dgm.groupId !== oldGroupId
      );

    const groupName = groups.filter((g) => g.id === groupId)[0]?.name;

    let found = false;
    for (const i in _destination.destinationGroupMemberships) {
      if (_destination.destinationGroupMemberships[i].groupId === groupId) {
        _destination.destinationGroupMemberships[i] = {
          groupId,
          groupName,
          remoteKey,
        };
        found = true;
      }
    }

    if (!found && groupId) {
      _destination.destinationGroupMemberships.push({
        groupId,
        groupName,
        remoteKey,
      });
    }

    setDestination(_destination);
  }

  function toggleUnlockedProperty(key) {
    const _unlockedProperties = Object.assign({}, unlockedProperties);
    _unlockedProperties[destination.mapping[key]] = _unlockedProperties[
      destination.mapping[key]
    ]
      ? false
      : true;
    setUnlockedProperties(_unlockedProperties);
  }

  function toggleUnlockedGroup(groupId) {
    const _unlockedGroups = [].concat(unlockedGroups);
    if (_unlockedGroups.includes(groupId)) {
      const index = _unlockedGroups.indexOf(groupId);
      _unlockedGroups.splice(index, 1);
    } else {
      _unlockedGroups.push(groupId);
    }
    setUnlockedGroups(_unlockedGroups);
  }

  const groupsAvailalbeForDestinationGroupMemberships = groups
    .filter(
      (group) =>
        !destination.destinationGroupMemberships
          .map((dgm) => dgm.groupId)
          .includes(group.id)
    )
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    .sort((a, b) => {
      if (a.id === groupId) return -1;
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

      <DestinationTabs destination={destination} model={model} />

      <PageHeader
        icon={destination.app.icon}
        title={destination.name}
        badges={[
          <LockedBadge object={destination} />,
          <StateBadge state={destination.state} />,
          <ModelBadge
            modelName={destination.modelName}
            modelId={destination.modelId}
          />,
        ]}
      />

      <Row>
        <Col className="mb-4">
          <Form id="form" onSubmit={update}>
            <fieldset disabled={Boolean(destination.locked)}>
              <Row id="destinationCollection">
                <Col>
                  <h5>
                    Who should be sent to{" "}
                    <span className="text-primary">{destination.name}</span>?
                  </h5>
                  <Form.Control
                    as="select"
                    required={true}
                    value={collection === "model" ? "__model" : groupId}
                    disabled={loading}
                    onChange={(e) => {
                      switch (e.target.value) {
                        case "__none": {
                          setCollection("none");
                          setGroupId(null);
                          break;
                        }
                        case "__model": {
                          setCollection("model");
                          setGroupId(null);
                          break;
                        }
                        default: {
                          setCollection("group");
                          setGroupId(e.target.value);
                          break;
                        }
                      }
                    }}
                  >
                    <option value="__none">No Model or Group</option>
                    <option disabled>--- Models ---</option>
                    <option value="__model">
                      All Records in the {destination.modelName} Model
                    </option>
                    <option disabled>--- Groups ---</option>
                    {groups
                      .sort((a, b) => {
                        if (a.name >= b.name) {
                          return 1;
                        } else {
                          return -1;
                        }
                      })
                      .map((group) => (
                        <option key={`grp-${group.id}`} value={group.id}>
                          {group.name}
                          {grouparooUiEdition() !== "config" &&
                            ` (${group.recordsCount} members)`}
                        </option>
                      ))}
                  </Form.Control>
                </Col>
              </Row>

              <br />

              <Row id="destinationData">
                <Col>
                  <h5>
                    What data do you want in{" "}
                    <span className="text-primary">{destination.name}</span>?
                  </h5>
                  <br />
                  <div data-screenshotid="destinationRecords">
                    {/* Required Vars */}

                    {mappingOptions?.properties?.required.length > 0 ? (
                      <>
                        <h6>
                          Required {mappingOptions.labels.property.plural}
                        </h6>
                        <Table size="sm">
                          <thead>
                            <tr>
                              <th>Grouparoo Property</th>
                              <th />
                              <th>{mappingOptions.labels.property.singular}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mappingOptions.properties.required.map(
                              ({ key, type }, idx) => (
                                <tr key={`required-mapping-${idx}`}>
                                  <td>
                                    <Form.Control
                                      as="select"
                                      required={true}
                                      disabled={loading}
                                      value={destination.mapping[key] || ""}
                                      onChange={(e) =>
                                        updateMapping(key, e.target["value"])
                                      }
                                    >
                                      <option disabled value={""}>
                                        choose a Property
                                      </option>
                                      {properties
                                        .filter((rule) =>
                                          destinationTypeConversions[
                                            rule.type
                                          ].includes(type)
                                        )
                                        .filter((rule) => !rule.isArray)
                                        .filter(
                                          (rule) =>
                                            rule.key ===
                                              destination.mapping[key] ||
                                            !Object.values(
                                              destination.mapping
                                            ).includes(rule.key)
                                        )
                                        .map((rule) => (
                                          <option
                                            key={`opt-required-${rule.id}`}
                                          >
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

                    {mappingOptions?.properties?.known.length > 0 ? (
                      <>
                        <h6>Known {mappingOptions.labels.property.plural}</h6>
                        <Table size="sm">
                          <thead>
                            <tr>
                              <th>Grouparoo Property</th>
                              <th />
                              <th>{mappingOptions.labels.property.singular}</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {mappingOptions.properties.known.map(
                              ({ key, type, important }, idx) =>
                                displayedDestinationProperties.includes(key) ||
                                important ||
                                destination.mapping[key] ? (
                                  <tr key={`known-mapping-${idx}`}>
                                    <td>
                                      <Form.Control
                                        as="select"
                                        disabled={loading}
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
                                        {remainingPropertiesForKnown
                                          .filter((rule) =>
                                            destinationTypeConversions[
                                              rule.type
                                            ].includes(type)
                                          )
                                          .filter(filterRuleForArrayProperties)
                                          .filter(
                                            (rule) =>
                                              rule.key ===
                                                destination.mapping[key] ||
                                              !Object.values(
                                                destination.mapping
                                              ).includes(rule.key)
                                          )
                                          .map((rule) => (
                                            <option
                                              key={`opt-known-${rule.id}`}
                                            >
                                              {rule.key}
                                            </option>
                                          ))}
                                      </Form.Control>
                                    </td>
                                    <td style={{ textAlign: "center" }}>→</td>
                                    <td>
                                      <Badge
                                        variant={
                                          destination.mapping[key]
                                            ? "info"
                                            : "dark"
                                        }
                                      >
                                        {key}
                                      </Badge>{" "}
                                      <span className="text-muted">
                                        ({type})
                                      </span>
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
                                          <FontAwesomeIcon
                                            icon="times"
                                            fixedWidth
                                          />
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
                              <strong>Send Record Property:</strong>
                            </Form.Label>
                            <Col>
                              <Typeahead
                                id="displayedDestinationProperties"
                                ref={
                                  displayedDestinationPropertiesAutocomleteRef
                                }
                                placeholder={`Choose a ${mappingOptions.labels.property.singular}...`}
                                disabled={loading}
                                onChange={(selected) => {
                                  displayedDestinationPropertiesAutocomleteRef.current.clear();

                                  const _displayedDestinationProperties = [
                                    ...displayedDestinationProperties,
                                  ];
                                  _displayedDestinationProperties.push(
                                    selected[0]
                                  );
                                  setDisplayedDestinationProperties(
                                    _displayedDestinationProperties
                                  );
                                }}
                                options={mappingOptions.properties.known
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

                    {mappingOptions?.properties?.allowOptionalFromProperties ? (
                      <>
                        <h6>
                          Optional {mappingOptions.labels.property.plural}
                        </h6>
                        <Table size="sm">
                          <thead>
                            <tr>
                              <th>Grouparoo Property</th>
                              <th />
                              <th>{mappingOptions.labels.property.singular}</th>
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
                                    disabled={loading}
                                    onChange={(e) =>
                                      updateMapping(
                                        e.target["value"],
                                        e.target["value"],
                                        key
                                      )
                                    }
                                  >
                                    <option disabled value={""}>
                                      choose a Property
                                    </option>
                                    {remainingPropertyKeysForOptional
                                      .filter(
                                        (k) =>
                                          k === destination.mapping[key] ||
                                          !Object.values(
                                            destination.mapping
                                          ).includes(k)
                                      )
                                      .map((k) => (
                                        <option key={`opt-optional-${k}`}>
                                          {k}
                                        </option>
                                      ))}
                                  </Form.Control>
                                </td>
                                <td style={{ textAlign: "center" }}>→</td>
                                <td>
                                  <Form.Control
                                    required
                                    type="text"
                                    value={key}
                                    disabled={
                                      unlockedProperties[
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
                                    {mappingOptions.labels.property.singular} is
                                    required
                                  </Form.Control.Feedback>
                                </td>
                                <td>
                                  <Button
                                    size="sm"
                                    variant="light"
                                    onClick={() => toggleUnlockedProperty(key)}
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
                          disabled={
                            properties.length === 0 ||
                            remainingPropertyKeysForOptional.filter(
                              (k) =>
                                !Object.values(destination.mapping).includes(k)
                            ).length === 0
                          }
                          onClick={() => {
                            updateMapping("new mapping", "");
                          }}
                        >
                          Add new {mappingOptions.labels.property.singular}
                        </Button>{" "}
                        <br />
                      </>
                    ) : null}
                  </div>
                  <br />
                  <div data-screenshotid="destinationGroups">
                    {mappingOptions?.labels?.group && (
                      <>
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
                              ({ groupName, groupId, remoteKey }, idx) => (
                                <tr key={`optional-mapping-${idx}`}>
                                  <td>
                                    <Form.Control
                                      as="select"
                                      required={false}
                                      value={groupId}
                                      disabled={loading}
                                      onChange={(e) =>
                                        updateDestinationGroupMembership(
                                          e.target["value"],
                                          null,
                                          groupId
                                        )
                                      }
                                    >
                                      <option disabled value={""}>
                                        choose a group
                                      </option>
                                      {groups.map((group) => (
                                        <option
                                          value={group.id}
                                          key={`group-remote-mapping-${group.id}`}
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
                                      disabled={
                                        !unlockedGroups.includes(groupId)
                                      }
                                      value={remoteKey}
                                      onChange={(e) =>
                                        updateDestinationGroupMembership(
                                          groupId,
                                          e.target["value"]
                                        )
                                      }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {mappingOptions?.labels?.group.singular}{" "}
                                      is required
                                    </Form.Control.Feedback>
                                  </td>
                                  <td>
                                    <Button
                                      size="sm"
                                      variant="light"
                                      onClick={() =>
                                        toggleUnlockedGroup(groupId)
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
                                        updateDestinationGroupMembership(
                                          null,
                                          null,
                                          groupId
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
                                  const chosenGroup =
                                    groupsAvailalbeForDestinationGroupMemberships.filter(
                                      (g) => g.name === selected[0]
                                    )[0];

                                  updateDestinationGroupMembership(
                                    chosenGroup.id,
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
                      </>
                    )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <br />
                  <hr />
                  <LoadingButton
                    type="submit"
                    variant="primary"
                    loading={loading}
                  >
                    Save Destination Data
                  </LoadingButton>
                </Col>
              </Row>
            </fieldset>
          </Form>
        </Col>
        <Col xl={5}>
          <DestinationSampleRecord
            modelId={destination.modelId}
            groupId={groupId}
            collection={collection}
            mappingOptions={mappingOptions}
            destination={destination}
            properties={properties}
            hideViewAllRecords
          />
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { execApi } = UseApi(ctx);
  const { destinationId, modelId } = ctx.query;
  const { destination } = await execApi("get", `/destination/${destinationId}`);
  ensureMatchingModel("Destination", destination.modelId, modelId.toString());
  const { groups } = await execApi("get", `/groups`, {
    modelId: destination?.modelId,
  });
  const { properties } = await execApi("get", `/properties`, {
    state: "ready",
    modelId: destination?.modelId,
  });
  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );

  let mappingOptions = {};
  let destinationTypeConversions = {};
  let exportArrayProperties = [];
  let hydrationError: Error;

  try {
    const mappingOptionsResponse = await execApi(
      "get",
      `/destination/${destinationId}/mappingOptions`
    );
    mappingOptions = mappingOptionsResponse.options;
    destinationTypeConversions =
      mappingOptionsResponse.destinationTypeConversions;

    const exportArrayPropertiesResponse = await execApi(
      "get",
      `/destination/${destinationId}/exportArrayProperties`
    );
    exportArrayProperties = exportArrayPropertiesResponse.exportArrayProperties;
  } catch (error) {
    hydrationError = error.toString();
  }

  return {
    destination,
    properties,
    model,
    mappingOptions,
    destinationTypeConversions,
    exportArrayProperties,
    groups: groups
      .filter((group) => group.state !== "draft")
      .filter((group) => group.state !== "deleted"),
    hydrationError,
  };
};
