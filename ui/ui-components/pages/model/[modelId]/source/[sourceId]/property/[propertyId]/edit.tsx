import { useApi } from "../../../../../../../contexts/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Table, Badge, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

import Loader from "../../../../../../../components/Loader";
import PageHeader from "../../../../../../../components/PageHeader";
import StateBadge from "../../../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../../../components/badges/LockedBadge";
import ModelBadge from "../../../../../../../components/badges/ModelBadge";
import DatePicker from "../../../../../../../components/DatePicker";
import LoadingButton from "../../../../../../../components/LoadingButton";
import PropertyTabs from "../../../../../../../components/tabs/Property";
import { Models, Actions } from "../../../../../../../utils/apiData";
import { filtersAreEqual } from "../../../../../../../utils/filtersAreEqual";
import { makeLocal } from "../../../../../../../utils/makeLocal";
import { ensureMatchingModel } from "../../../../../../../utils/ensureMatchingModel";
import PropertySampleRecord from "../../../../../../../components/property/PropertySampleRecord";
import {
  propertiesHandler,
  successHandler,
} from "../../../../../../../eventHandlers";
import PrimaryKeyBadge from "../../../../../../../components/badges/PrimaryKeyBadge";
import EnterpriseLink from "../../../../../../../components/GrouparooLink";
import { grouparooUiEdition } from "../../../../../../../utils/uiEdition";
import { generateClient } from "../../../../../../../client/client";
import { withServerErrorHandler } from "../../../../../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../../../../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const { propertyId, modelId } = ctx.query;
  const client = generateClient(ctx);

  const { property } = await client.request<Actions.PropertyView>(
    "get",
    `/property/${propertyId}`
  );

  if (!property) {
    throw new Error(`Property ${propertyId} not found`);
  }

  const { sources } = await client.request<Actions.SourcesList>(
    "get",
    "/sources"
  );

  const source = sources.find(
    (s: Models.SourceType) => s.id === property.sourceId
  );
  ensureMatchingModel("Property", source.modelId, modelId.toString());

  const { types } = await client.request<Actions.PropertiesOptions>(
    "get",
    `/propertyOptions`
  );

  const { properties } = await client.request<Actions.PropertiesList>(
    "get",
    `/properties`,
    {
      state: "ready",
      modelId: source.modelId,
    }
  );

  const { pluginOptions } = await client.request<Actions.PropertyPluginOptions>(
    "get",
    `/property/${propertyId}/pluginOptions`
  );

  const {
    options: filterOptions,
    optionDescriptions: filterOptionDescriptions,
  } = await client.request<Actions.PropertyFilterOptions>(
    "get",
    `/property/${propertyId}/filterOptions`
  );

  return {
    props: {
      property,
      properties,
      sources,
      pluginOptions,
      types,
      filterOptions,
      filterOptionDescriptions,
    },
  };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  sources,
  types,
  filterOptions,
  filterOptionDescriptions,
  properties,
  ...props
}) => {
  const router = useRouter();
  const { client } = useApi();
  const [property, setProperty] = useState<Models.PropertyType>(props.property);
  const [pluginOptions, setPluginOptions] = useState<
    Actions.PropertyPluginOptions["pluginOptions"]
  >(props.pluginOptions);
  const [loading, setLoading] = useState(false);
  const [nextPage] = useState(router.query.nextPage?.toString()); // we want to store this when the page was initially loaded because we'll be updating the route for the recordPreview
  const [localFilters, setLocalFilters] = useState<
    Actions.PropertyView["property"]["filters"]
  >(makeLocal(props.property.filters));

  const [debounceCounter, setDebounceCounter] = useState(0);
  const sleep = debounceCounter === 0 ? 0 : 500; // we only want to make one request every 1/2 second, so wait for more input
  let timer;

  const { propertyId } = router.query;
  const source = sources.find((s) => s.id === property.sourceId);

  useEffect(() => {
    setProperty(props.property);
    setPluginOptions(props.pluginOptions);
    setLocalFilters(makeLocal(props.property.filters));
    newRuleDefaults();
  }, [propertyId]);

  useEffect(() => {
    updatePluginOptions();

    return () => {
      clearTimeout(timer);
    };
  }, [property.id, JSON.stringify(property.options)]);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const response: Actions.PropertyEdit = await client.request(
      "put",
      `/property/${propertyId}`,
      Object.assign({}, property, { filters: localFilters, state: "ready" })
    );
    if (response?.property) {
      setProperty(response.property);
      propertiesHandler.set([response.property]);
      if (response.property.state === "ready" && property.state === "draft") {
        successHandler.set({ message: "Property Created" });
        router.push(
          nextPage ||
            `/model/${source.modelId}/source/${property.sourceId}/overview`
        );
      } else {
        setLoading(false);
        successHandler.set({ message: "Property Updated" });
      }
    } else {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (
      window.confirm(
        "Are you sure?  This will also delete all record properties with this key"
      )
    ) {
      setLoading(true);
      const { success }: Actions.PropertyDestroy = await client.request(
        "delete",
        `/property/${propertyId}`
      );
      setLoading(false);
      if (success) {
        successHandler.set({ message: "Property Deleted" });
        router.push(
          nextPage ||
            `/model/${source.modelId}/source/${property.sourceId}/overview`
        );
      }
    }
  }

  async function updatePluginOptions() {
    // setLoading(true); // Do not set loading as we don't want to block the form mid-typing on a string field
    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const pluginOptionsResponse: Actions.PropertyPluginOptions =
        await client.request("get", `/property/${propertyId}/pluginOptions`, {
          options: property.options,
        });
      // setLoading(false);
      if (
        pluginOptionsResponse &&
        JSON.stringify(pluginOptionsResponse.pluginOptions) !==
          JSON.stringify(pluginOptions)
      ) {
        const pluginOptionKeys = pluginOptionsResponse.pluginOptions.map(
          (p) => p.key
        );
        const _property = Object.assign({}, property);
        for (const k of Object.keys(_property.options)) {
          if (!pluginOptionKeys.includes(k)) delete _property.options[k];
        }

        setPluginOptions(pluginOptionsResponse.pluginOptions);
        setProperty(_property);
      }
    }, sleep);
  }

  function newRuleDefaults() {
    if (property.state === "draft" && property.key === "") {
      const _property = Object.assign({}, property);

      // make the user explicitly choose a type
      //@ts-ignore
      _property.type = "";

      setProperty(_property);
    }
  }

  const update = async (event) => {
    const _property = Object.assign({}, property);
    _property[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setProperty(_property);
  };

  function updateOption(key, value) {
    const _property = Object.assign({}, property);
    _property.options[key] = value;
    setProperty(_property);
  }

  function addRule() {
    const ruleLimit = 10;

    const _localFilters = [...localFilters];
    if (_localFilters.length >= ruleLimit) {
      alert(`only ${ruleLimit} rules allowed`);
      return;
    }

    _localFilters.push({
      key: filterOptions[0].key,
      op: filterOptions[0].ops[0],
      match: null,
    });

    setLocalFilters(_localFilters);
  }

  function deleteRule(idx: number) {
    const _localFilters = [...localFilters];
    _localFilters.splice(idx, 1);
    setLocalFilters(_localFilters);
  }

  if (!property?.id) {
    return <Loader />;
  }

  const badges = [
    <LockedBadge object={property} />,
    <StateBadge state={property.state} />,
    <ModelBadge modelName={source.modelName} modelId={source.modelId} />,
  ];

  if (property.isPrimaryKey) {
    badges.push(<PrimaryKeyBadge />);
  }

  let rowChanges = false;
  return (
    <>
      <Head>
        <title>Grouparoo: {property.key}</title>
      </Head>

      <PropertyTabs property={property} source={source} />

      <PageHeader icon={source.app.icon} title={property.key} badges={badges} />
      <Row>
        <Col>
          <Form id="form" onSubmit={onSubmit} autoComplete="off">
            <fieldset disabled={Boolean(property.locked)}>
              <Row>
                <Col>
                  <Form.Group controlId="key">
                    <p>
                      <strong>Source</strong>:{" "}
                      <Link
                        href={`/model/${source.modelId}/source/${source.id}/overview`}
                      >
                        <a>{source.name}</a>
                      </Link>
                    </p>

                    <hr />

                    <Form.Label>Key</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      disabled={loading}
                      value={property.key}
                      onChange={(e) => update(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Key is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="type">
                    <Form.Label>Record Property Type</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      value={property.type}
                      onChange={(e) => update(e)}
                      disabled={loading}
                    >
                      <option value="" disabled>
                        Choose a Type
                      </option>
                      {types.map((type) => (
                        <option key={`type-${type}`}>{type}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="unique">
                    <Form.Check
                      type="checkbox"
                      label={"Unique"}
                      checked={property.unique}
                      onChange={(e) => update(e)}
                      disabled={property.isPrimaryKey || loading}
                    />
                    {property.isPrimaryKey && (
                      <Form.Text className="text-muted">
                        <code>Unique</code> cannot be updated while this
                        Property is the Primary Key for the Model.
                        {grouparooUiEdition() !== "community" && (
                          <>
                            {" "}
                            <EnterpriseLink
                              href={`/model/${source.modelId}/source/${source.id}/edit`}
                            >
                              <a>Edit mapping</a>
                            </EnterpriseLink>{" "}
                            first.
                          </>
                        )}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group controlId="isArray">
                    <Form.Check
                      type="checkbox"
                      label="Is Array?"
                      checked={property.isArray}
                      onChange={(e) => update(e)}
                      disabled={loading}
                    />
                  </Form.Group>
                  <hr />
                  <p>
                    <strong>
                      Options for a <code>{source.connection.displayName}</code>{" "}
                      Property
                    </strong>
                  </p>
                  {pluginOptions.map((opt, idx) => (
                    <div key={`opt-${idx}`}>
                      <p>
                        {opt.required ? (
                          <>
                            <Badge variant="info">required</Badge>&nbsp;
                          </>
                        ) : null}
                        <code>{opt.displayName || opt.key}</code>
                      </p>

                      {/* typeahead options */}
                      {opt.type === "typeahead" ? (
                        <>
                          <Typeahead
                            id="typeahead"
                            labelKey="key"
                            disabled={loading}
                            onChange={(selected) => {
                              if (selected.length === 1 && selected[0].key) {
                                updateOption(opt.key, selected[0].key);
                              }
                            }}
                            options={opt?.options}
                            placeholder={`Select ${opt.key}`}
                            renderMenuItemChildren={(opt, props, idx) => {
                              return [
                                <span key={`opt-${idx}-key`}>
                                  {opt.key}
                                  <br />
                                </span>,
                                <small
                                  key={`opt-${idx}-examples`}
                                  className="text-small"
                                >
                                  <em>
                                    Examples:{" "}
                                    {opt.examples
                                      ? opt.examples
                                          .slice(0, 3)
                                          .join("")
                                          .trim() !== ""
                                        ? opt.examples.slice(0, 3).join(", ")
                                        : "None"
                                      : null}
                                  </em>
                                </small>,
                              ];
                            }}
                            defaultSelected={
                              property.options[opt?.key]
                                ? [property.options[opt?.key]]
                                : undefined
                            }
                          />
                          <Form.Text className="text-muted">
                            {opt.description}
                          </Form.Text>
                          <br />
                        </>
                      ) : null}

                      {/* list options */}
                      {opt.type === "list" ? (
                        <>
                          <Form.Text className="text-muted">
                            {opt.description}
                          </Form.Text>
                          <Table bordered striped size="sm" variant="light">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Key</th>
                                {opt?.options[0]?.description ? (
                                  <th>Description</th>
                                ) : null}
                                {opt?.options[0]?.examples ? (
                                  <th>Examples</th>
                                ) : null}
                              </tr>
                            </thead>
                            <tbody>
                              {opt?.options?.map((col) => (
                                <tr key={`source-${col.key}`}>
                                  <td>
                                    <Form.Check
                                      inline
                                      type="radio"
                                      name={opt.key}
                                      disabled={loading}
                                      defaultChecked={
                                        property.options[opt.key]
                                          ? property.options[opt.key] ===
                                            col.key
                                          : col.default
                                      }
                                      onClick={() =>
                                        updateOption(opt.key, col.key)
                                      }
                                    />
                                  </td>
                                  <td>
                                    <strong>{col.key}</strong>
                                  </td>
                                  {col.description ? (
                                    <td>{col.description}</td>
                                  ) : null}

                                  {col.examples ? (
                                    <td>
                                      {col.examples.slice(0, 3).join(", ")}
                                    </td>
                                  ) : null}
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </>
                      ) : null}

                      {/* text options */}
                      {opt.type === "text" || opt.type === "password" ? (
                        <>
                          <Form.Group controlId="key">
                            <Form.Control
                              required
                              disabled={loading}
                              type={opt.type}
                              value={property.options[opt.key]?.toString()}
                              onChange={(e) =>
                                updateOption(opt.key, e.target.value)
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              Key is required
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Text className="text-muted">
                            {opt.description}
                          </Form.Text>
                        </>
                      ) : null}

                      {/* textarea options */}
                      {opt.type === "textarea" ? (
                        <>
                          <Form.Group controlId="key">
                            <Form.Control
                              required
                              as="textarea"
                              disabled={loading}
                              rows={5}
                              value={property.options[opt.key]?.toString()}
                              onChange={(e) =>
                                updateOption(opt.key, e.target["value"])
                              }
                              placeholder="select statement with mustache template"
                              style={{
                                fontFamily:
                                  'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                color: "#e83e8c",
                              }}
                            />
                            <Form.Control.Feedback type="invalid">
                              Key is required
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Text className="text-muted">
                            {opt.description}
                          </Form.Text>
                          <p>
                            Record Property Variables:{" "}
                            <Badge variant="light">{`{{{ now }}}`}</Badge>
                            &nbsp;
                            <Badge variant="light">{`{{{ createdAt }}}`}</Badge>
                            &nbsp;
                            <Badge variant="light">{`{{{ updatedAt }}}`}</Badge>
                            &nbsp;
                            {properties
                              .filter((rule) => rule.isArray === false)
                              .sort((a, b) => {
                                if (a.key > b.key) {
                                  return 1;
                                } else {
                                  return -1;
                                }
                              })
                              .map((ppr) => (
                                <Fragment key={`var-badge-${ppr.key}`}>
                                  <Badge variant="light">{`{{{ ${ppr.key} }}}`}</Badge>
                                  &nbsp;
                                </Fragment>
                              ))}
                          </p>
                          <p>
                            For dates, you can expand them to the{" "}
                            <code>sql</code>, <code>date</code>,{" "}
                            <code>time</code>, or <code>iso</code> formats, ie:{" "}
                            <Badge variant="light">{`{{ now.sql }}`}</Badge>
                          </p>
                        </>
                      ) : null}

                      {/* pending options */}
                      {opt.type === "pending" ? (
                        <>
                          <Form.Control
                            size="sm"
                            disabled
                            type="text"
                            value="pending another selection"
                          ></Form.Control>
                        </>
                      ) : null}
                    </div>
                  ))}

                  {filterOptions.length > 0 ? (
                    <div>
                      <hr />
                      <strong>Filters</strong>
                      <p>
                        Only include rows that meet the following criteria when
                        populating
                        <Badge variant="info" className="ml-1">
                          {property.key}
                        </Badge>
                        :
                      </p>

                      {localFilters.length > 0 && (
                        <Table bordered size="sm">
                          <thead>
                            <tr>
                              <th />
                              <th>Key</th>
                              <th>Operation</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {localFilters.map((localFilter, idx) => {
                              let rowChanged = false;
                              if (
                                !filtersAreEqual(
                                  property.filters[idx],
                                  localFilters[idx]
                                )
                              ) {
                                rowChanged = true;
                                rowChanges = true;
                              }

                              return (
                                <tr key={`rule-${localFilter.key}-${idx}`}>
                                  <td>
                                    <h5>
                                      <Badge
                                        variant={
                                          rowChanged ? "warning" : "light"
                                        }
                                      >
                                        {idx}
                                      </Badge>
                                    </h5>
                                  </td>
                                  {/* key */}
                                  <td>
                                    <Form.Group
                                      controlId={`${localFilter.key}-key-${idx}`}
                                    >
                                      <Form.Control
                                        as="select"
                                        value={localFilter.key}
                                        disabled={loading}
                                        onChange={(e: any) => {
                                          const _localFilters = [
                                            ...localFilters,
                                          ];
                                          localFilter.key = e.target.value;
                                          _localFilters[idx] = localFilter;
                                          setLocalFilters(_localFilters);
                                        }}
                                      >
                                        {filterOptions.map((filter) => (
                                          <option
                                            key={`ruleKeyOpt-${filter.key}-${idx}`}
                                          >
                                            {filter.key}
                                          </option>
                                        ))}
                                      </Form.Control>
                                    </Form.Group>
                                  </td>
                                  {/* op */}
                                  <td>
                                    <Form.Group
                                      controlId={`${localFilter.key}-op-${idx}`}
                                    >
                                      <Form.Control
                                        as="select"
                                        disabled={loading}
                                        value={localFilter.op}
                                        onChange={(e: any) => {
                                          const _localFilters = [
                                            ...localFilters,
                                          ];
                                          localFilter.op = e.target.value;
                                          _localFilters[idx] = localFilter;
                                          setLocalFilters(_localFilters);
                                        }}
                                      >
                                        {filterOptions.filter(
                                          (fo) => fo.key === localFilter.key
                                        ).length === 1
                                          ? filterOptions
                                              .filter(
                                                (fo) =>
                                                  fo.key === localFilter.key
                                              )[0]
                                              .ops.map((op) => (
                                                <option
                                                  key={`op-opt-${localFilter.key}-${op}`}
                                                  value={op}
                                                >
                                                  {filterOptionDescriptions[op]}
                                                </option>
                                              ))
                                          : null}
                                      </Form.Control>
                                    </Form.Group>
                                    {/* match */}
                                    {!localFilter.op
                                      .toLowerCase()
                                      .includes("exist") &&
                                      (localFilter.key === "occurredAt" ? (
                                        <DatePicker
                                          selected={
                                            localFilter.match &&
                                            localFilter.match !== "null"
                                              ? new Date(
                                                  parseInt(
                                                    localFilter.match.toString()
                                                  )
                                                )
                                              : new Date()
                                          }
                                          onChange={(d: Date) => {
                                            const _localFilter = [
                                              ...localFilters,
                                            ];
                                            localFilter.match = d
                                              .getTime()
                                              .toString();
                                            _localFilter[idx] = localFilter;
                                            setLocalFilters(_localFilter);
                                          }}
                                        />
                                      ) : (
                                        <Form.Group
                                          controlId={`${localFilter.key}-match-${idx}`}
                                        >
                                          <Form.Control
                                            required
                                            type="text"
                                            disabled={
                                              loading ||
                                              localFilter.op.includes("exist")
                                            }
                                            value={
                                              localFilter.match?.toString() ||
                                              ""
                                            }
                                            onChange={(e: any) => {
                                              const _localFilter = [
                                                ...localFilters,
                                              ];
                                              localFilter.match =
                                                e.target.value;
                                              _localFilter[idx] = localFilter;
                                              setLocalFilters(_localFilter);
                                            }}
                                          />
                                        </Form.Group>
                                      ))}{" "}
                                  </td>

                                  {/* delete */}
                                  <td>
                                    <Button
                                      variant="danger"
                                      size="sm"
                                      onClick={() => {
                                        deleteRule(idx);
                                      }}
                                    >
                                      <FontAwesomeIcon
                                        icon="times"
                                        fixedWidth
                                      />
                                    </Button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      )}
                      {localFilters.length < property.filters.length ||
                      rowChanges ? (
                        <p>
                          <Badge variant="warning">Unsaved Rule Changes</Badge>
                        </p>
                      ) : null}
                      <Button size="sm" variant="info" onClick={addRule}>
                        Add Filter
                      </Button>
                    </div>
                  ) : null}
                </Col>
              </Row>
              <hr />
              <Row className="mb-4">
                <Col>
                  <LoadingButton
                    variant="primary"
                    type="submit"
                    loading={loading}
                  >
                    Update
                  </LoadingButton>
                  <br />
                  <br />
                  <LoadingButton
                    variant="danger"
                    size="sm"
                    loading={loading}
                    onClick={() => handleDelete()}
                  >
                    Delete
                  </LoadingButton>
                </Col>
              </Row>
            </fieldset>
          </Form>
        </Col>
        <Col xl={5}>
          <PropertySampleRecord
            localFilters={localFilters}
            property={property}
            properties={properties}
            hideViewAllRecords
          />
        </Col>
      </Row>
    </>
  );
};

export default Page;
