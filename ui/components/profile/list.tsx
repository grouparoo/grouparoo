import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Col, Badge, Button, ButtonGroup } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import LoadingButton from "../loadingButton";
import { Models, Actions } from "../../utils/apiData";
import ArrayProfilePropertyList from "../../components/profile/arrayProfilePropertyList";
import StateBadge from "../badges/stateBadge";

export default function ProfilesList(props) {
  const { errorHandler, properties } = props;
  const { execApi } = useApi(props, errorHandler);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [total, setTotal] = useState<number>(props.total);
  const [profiles, setProfiles] = useState<Models.ProfileType[]>(
    props.profiles
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
  const states = ["pending", "ready"];

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, state]);

  let groupGuid: string;
  if (router.query.guid) {
    if (router.pathname.match("/group/")) {
      groupGuid = router.query.guid.toString();
    }
  }

  async function load(event?) {
    if (event) {
      event.preventDefault();
    }

    setLoading(true);
    const response: Actions.ProfilesList = await execApi("get", `/profiles`, {
      searchKey,
      searchValue,
      limit,
      offset,
      state,
      groupGuid,
    });
    setLoading(false);
    if (response?.profiles) {
      setProfiles(response.profiles);
      setTotal(response.total);
      if (offset > response.total) {
        setOffset(0);
      }
    }

    updateURLParams(router, { offset, searchKey, searchValue, state });
  }

  async function autocompleteProfilePropertySearch(
    match,
    _searchKey = searchKey
  ) {
    if (!_searchKey) {
      return;
    }

    const propertyGuid = properties.filter((r) => r.key === _searchKey)[0].guid;

    setSearchLoading(true);
    const response: Actions.ProfileAutocompleteProfileProperty = await execApi(
      "get",
      `/profiles/autocompleteProfileProperty`,
      { propertyGuid, match }
    );
    if (response.profileProperties) {
      setAutoCompleteResults(
        response.profileProperties.map((e) => e.toString())
      );
    }
    setSearchLoading(false);
  }

  const identifyingProfileProperty = properties.filter(
    (rule) => rule.identifying
  )[0];

  const uniqueProfilePropertyKeys = properties
    .filter((rule) =>
      identifyingProfileProperty
        ? rule.guid !== identifyingProfileProperty.guid
        : rule
    )
    .filter((rule) => rule.unique)
    .map((rule) => rule.key);

  return (
    <>
      {props.header ? props.header : <h1>Profiles</h1>}

      {groupGuid ? null : (
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
                    autocompleteProfilePropertySearch("%", event.target.value);
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
                <>
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
                    onSearch={autocompleteProfilePropertySearch}
                    placeholder={`name@example.com`}
                    defaultSelected={
                      searchValue ? [searchValue.toString()] : undefined
                    }
                  />
                </>
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

      <ButtonGroup id="profile-states">
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

      <br />
      <br />

      <p>
        <strong>
          {total} matching profiles {state ? ` in the ${state} state` : ""}
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
          {profiles.map((profile) => {
            return (
              <tr key={`profile-${profile.guid}`}>
                <td>
                  <Link
                    href="/profile/[guid]/edit"
                    as={`/profile/${profile.guid}/edit`}
                  >
                    <a className="text-muted">
                      {identifyingProfileProperty?.key &&
                      profile.properties[identifyingProfileProperty.key] &&
                      searchKey !== identifyingProfileProperty.key ? (
                        <>
                          {identifyingProfileProperty.key}:{" "}
                          {profile.properties[
                            identifyingProfileProperty.key
                          ].values.join(", ")}{" "}
                          <br />
                        </>
                      ) : null}
                      <span>Grouparoo Guid: {profile.guid}</span>
                    </a>
                  </Link>

                  {searchKey === "" ? null : (
                    <div key={`key-${profile.guid}-${searchKey}`}>
                      <span className="text-muted">
                        <strong>{searchKey}</strong>:{" "}
                        {profile.properties[searchKey] ? (
                          <Badge variant="info">
                            <ArrayProfilePropertyList
                              type={profile.properties[searchKey].type}
                              values={profile.properties[searchKey].values}
                            />
                          </Badge>
                        ) : null}
                      </span>
                      <br />
                    </div>
                  )}

                  {uniqueProfilePropertyKeys.map((key) => {
                    if (!profile.properties[key] || searchKey === key) {
                      return null;
                    }

                    return (
                      <div key={`key-${profile.guid}-${key}`}>
                        <span className="text-muted">
                          {key}:{" "}
                          <ArrayProfilePropertyList
                            type={profile.properties[key].type}
                            values={profile.properties[key].values}
                          />
                        </span>
                        <br />
                      </div>
                    );
                  })}
                </td>
                <td>
                  <StateBadge state={profile.state} />
                </td>
                <td>
                  <Moment fromNow>{profile.createdAt}</Moment>
                </td>
                <td>
                  <Moment fromNow>{profile.updatedAt}</Moment>
                </td>
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

ProfilesList.hydrate = async (
  ctx,
  _searchKey?: string,
  _searchValue?: string
) => {
  const { execApi } = useApi(ctx);
  const { guid, limit, offset, state, searchKey, searchValue } = ctx.query;

  let groupGuid: string;
  if (guid) {
    if (ctx.pathname.match("/group/")) {
      groupGuid = guid;
    }
  }
  const { profiles, total } = await execApi("get", `/profiles`, {
    limit,
    offset,
    searchKey: searchKey || _searchKey,
    searchValue: searchValue || _searchValue,
    groupGuid,
    state,
  });
  const { properties } = await execApi("get", `/properties`);
  return { profiles, total, properties };
};
