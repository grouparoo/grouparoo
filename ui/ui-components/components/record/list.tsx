import { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Form, Row, Col, Badge, Button, ButtonGroup } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPageContext } from "next";

import { UseApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import LoadingButton from "../loadingButton";
import { Models, Actions } from "../../utils/apiData";
import ArrayRecordPropertyList from "./arrayRecordPropertyList";
import StateBadge from "../badges/stateBadge";
import { formatTimestamp } from "../../utils/formatTimestamp";
import { ErrorHandler } from "../../utils/errorHandler";

export default function RecordsList(props) {
  const {
    errorHandler,
    properties,
    modelName,
  }: {
    errorHandler: ErrorHandler;
    properties: Models.PropertyType[];
    modelName?: string;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [total, setTotal] = useState<number>(props.total);
  const [records, setRecords] = useState<Models.GrouparooRecordType[]>(
    props.records
  );
  const [autocompleteResults, setAutoCompleteResults] = useState([]);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [searchKey, setSearchKey] = useState<string>(
    router.query?.searchKey || props.searchKey || ""
  );
  const [searchValue, setSearchValue] = useState<string>(
    router.query.searchValue || props.searchValue || ""
  );
  const [state, setState] = useState(router.query.state?.toString() || null);
  const [caseSensitive, setCaseSensitive] = useState(
    router.query.caseSensitive ? router.query.caseSensitive === "true" : true
  );
  const states = ["pending", "ready", "invalid"];

  const { modelId, groupId } = router.query;

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, state, modelId, caseSensitive]);

  async function load(event?) {
    if (event) event.preventDefault();

    setLoading(true);
    const response: Actions.RecordsList = await execApi("get", `/records`, {
      searchKey,
      searchValue,
      limit,
      offset,
      state,
      modelId,
      groupId,
      caseSensitive,
    });
    setLoading(false);
    if (response?.records) {
      setRecords(response.records);
      setTotal(response.total);
      if (offset > response.total) {
        setOffset(0);
      }
    }

    updateURLParams(router, {
      offset,
      searchKey,
      searchValue,
      state,
      caseSensitive: caseSensitive.toString(),
    });
  }

  async function autocompleteRecordPropertySearch(
    match,
    _searchKey = searchKey
  ) {
    if (!_searchKey) return;

    const propertyId = properties.filter((r) => r.key === _searchKey)[0].id;

    setSearchLoading(true);
    const response: Actions.RecordAutocompleteRecordProperty = await execApi(
      "get",
      `/records/autocompleteRecordProperty`,
      { propertyId, match }
    );
    if (response.recordProperties) {
      setAutoCompleteResults(
        response.recordProperties.map((e) => e.toString())
      );
    }
    setSearchLoading(false);
  }

  const identifyingRecordProperty = properties.filter(
    (rule) => rule.identifying
  )[0];

  const uniqueRecordPropertyKeys = properties
    .filter((rule) =>
      identifyingRecordProperty
        ? rule.id !== identifyingRecordProperty.id
        : rule
    )
    .filter((rule) => rule.unique)
    .map((rule) => rule.key);

  return (
    <>
      {props.header ? (
        props.header
      ) : (
        <h1>{modelName ? `Records: ${modelName}` : "Records"}</h1>
      )}

      {groupId ? null : (
        <Form id="search" onSubmit={load}>
          <Form.Row>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Search Property</Form.Label>
                <Form.Control
                  name="searchKey"
                  as="select"
                  value={searchKey}
                  disabled={props.searchKey || loading ? true : false}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchKey(event.target.value);
                    setSearchValue("");
                    autocompleteRecordPropertySearch("%", event.target.value);
                  }}
                >
                  <option value="">Show All</option>
                  {properties.map((rule) => (
                    <option key={`rule-${rule.key}`}>{rule.key}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            {searchKey !== "" ? (
              <Col md={7}>
                <Row>
                  <Col>
                    <Form.Label>
                      Search Term (use <code>%</code> for wildcards and{" "}
                      <code>null</code> for empty values)
                    </Form.Label>
                    <AsyncTypeahead
                      key={`typeahead-search-${searchKey}`}
                      id={`typeahead-search-${searchKey}`}
                      minLength={0}
                      disabled={props.searchKey || loading ? true : false}
                      isLoading={searchLoading}
                      allowNew={true}
                      onChange={(selected) => {
                        if (!selected[0]) {
                          return;
                        }

                        setSearchValue(
                          selected[0].label
                            ? selected[0].label // when a new custom option is set
                            : selected[0] // when a list option is chosen);
                        );
                      }}
                      onBlur={(e) => {
                        const value = e.target.value;
                        if (value && value.length > 0) setSearchValue(value);
                      }}
                      options={autocompleteResults}
                      onSearch={autocompleteRecordPropertySearch}
                      placeholder={`name@example.com`}
                      defaultSelected={
                        searchValue ? [searchValue.toString()] : undefined
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      defaultChecked={caseSensitive}
                      onClick={() => setCaseSensitive(!caseSensitive)}
                      type="checkbox"
                      label="Case Sensitive?"
                    />
                  </Col>
                </Row>
              </Col>
            ) : null}

            <Col md={2} style={{ marginTop: 33 }}>
              <LoadingButton size="sm" type="submit" disabled={loading}>
                Search
              </LoadingButton>
            </Col>
          </Form.Row>
        </Form>
      )}

      <Row>
        <Col>
          States:{" "}
          <ButtonGroup id="record-states">
            <Button
              size="sm"
              variant={state ? "info" : "secondary"}
              onClick={() => {
                setState(null);
                setOffset(0);
              }}
            >
              All
            </Button>
            {states.map((t) => {
              const variant = t === state ? "secondary" : "info";
              return (
                <Button
                  key={`state-${t}`}
                  size="sm"
                  variant={variant}
                  onClick={() => {
                    setState(t);
                    setOffset(0);
                  }}
                >
                  {t}
                </Button>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>

      <br />
      <br />

      <p>
        <strong>
          {total} matching records {state ? ` in the ${state} state` : ""}
        </strong>
      </p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <br />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            {searchKey !== "" ? (
              <th>Searched Properties</th>
            ) : (
              <th>Unique Properties</th>
            )}
            <th>State</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            return (
              <tr key={`record-${record.id}`}>
                <td>
                  <Link
                    href="/model/[modelId]/record/[recordId]/edit"
                    as={`/model/${record.modelId}/record/${record.id}/edit`}
                  >
                    <a className="text-muted">
                      {identifyingRecordProperty?.key &&
                      record.properties[identifyingRecordProperty.key] &&
                      searchKey !== identifyingRecordProperty.key ? (
                        <>
                          {identifyingRecordProperty.key}:{" "}
                          {record.properties[
                            identifyingRecordProperty.key
                          ].values.join(", ")}{" "}
                          <br />
                        </>
                      ) : null}
                      <span>Grouparoo id: {record.id}</span>
                    </a>
                  </Link>

                  {searchKey === "" ? null : (
                    <div key={`key-${record.id}-${searchKey}`}>
                      <span className="text-muted">
                        <strong>{searchKey}</strong>:{" "}
                        {record.properties[searchKey] ? (
                          <Badge variant="info">
                            <ArrayRecordPropertyList
                              type={record.properties[searchKey].type}
                              values={record.properties[searchKey].values}
                              invalidValue={
                                record.properties[searchKey].invalidValue
                              }
                              invalidReason={
                                record.properties[searchKey].invalidReason
                              }
                            />
                          </Badge>
                        ) : null}
                      </span>
                      <br />
                    </div>
                  )}

                  {uniqueRecordPropertyKeys.map((key) => {
                    if (!record.properties[key] || searchKey === key) {
                      return null;
                    }

                    return (
                      <div key={`key-${record.id}-${key}`}>
                        <span className="text-muted">
                          {key}:{" "}
                          <ArrayRecordPropertyList
                            type={record.properties[key].type}
                            values={record.properties[key].values}
                            invalidValue={record.properties[key].invalidValue}
                            invalidReason={record.properties[key].invalidReason}
                          />
                        </span>
                        <br />
                      </div>
                    );
                  })}
                </td>
                <td>
                  <StateBadge state={record.state} />
                </td>
                <td>{formatTimestamp(record.createdAt)}</td>
                <td>{formatTimestamp(record.updatedAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
    </>
  );
}

RecordsList.hydrate = async (
  ctx: NextPageContext,
  _searchKey?: string,
  _searchValue?: string
) => {
  const { execApi } = UseApi(ctx);
  const {
    modelId,
    groupId,
    limit,
    offset,
    state,
    searchKey,
    searchValue,
    caseSensitive,
  } = ctx.query;

  const { records, total }: Actions.RecordsList = await execApi(
    "get",
    `/records`,
    {
      limit,
      offset,
      searchKey: searchKey || _searchKey,
      searchValue: searchValue || _searchValue,
      groupId,
      modelId,
      state,
      caseSensitive,
    }
  );
  const { properties } = await execApi("get", `/properties`);

  let modelName: string;
  if (modelId) {
    modelName = records.length > 0 ? records[0].modelName : null;
    if (!modelName) {
      const { model } = await execApi("get", `/model/${modelId}`);
      modelName = model.name;
    }
  }

  return { records, total, properties, modelName };
};
