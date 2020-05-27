import Head from "next/head";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Link from "next/link";
import Router from "next/router";
import { Form, Col, Button } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import { ProfileAPIData } from "../utils/apiData";

export default function Page(props) {
  const { query, errorHandler, profilePropertyRules } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [total, setTotal] = useState<number>(props.total);
  const [profiles, setProfiles] = useState<ProfileAPIData[]>(props.profiles);
  const [autocompleteResults, setAutoCompleteResults] = useState([]);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [searchKey, setSearchKey] = useState(query.searchKey || "");
  const [searchValue, setSearchValue] = useState(query.searchValue || "");
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    load();
  }, [offset, limit]);

  async function load(event?) {
    if (event) {
      event.preventDefault();
    }

    setTotal(0);
    setLoading(true);
    const response = await execApi("get", `/profiles`, {
      searchKey,
      searchValue,
      limit,
      offset,
    });
    setLoading(false);
    if (response?.profiles) {
      setProfiles(response.profiles);
      setTotal(response.total);
      if (offset > response.total) {
        setOffset(0);
      }
    }

    updateURLParams();
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    if (searchKey && searchKey !== "") {
      url += `searchKey=${searchKey}&`;
    }
    if (searchValue && searchValue !== "") {
      url += `searchValue=${escape(searchValue)}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  const uniqueProfileProperties = [];
  profilePropertyRules.forEach((rule) => {
    if (rule.unique) {
      uniqueProfileProperties.push(rule.key);
    }
  });

  async function autocompleteProfilePropertySearch(
    match,
    _searchKey = searchKey
  ) {
    if (!_searchKey) {
      return;
    }

    const profilePropertyRuleGuid = profilePropertyRules.filter(
      (r) => r.key === _searchKey
    )[0].guid;

    setSearchLoading(true);
    const response = await execApi(
      "get",
      `/profiles/autocompleteProfileProperty`,
      { profilePropertyRuleGuid, match }
    );
    if (response.profileProperties) {
      setAutoCompleteResults(
        response.profileProperties.map((e) => e.toString())
      );
    }
    setSearchLoading(false);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Profiles</title>
      </Head>

      <h1>Profiles</h1>

      <Form id="search" onSubmit={load}>
        <Form.Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Search Property</Form.Label>
              <Form.Control
                name="searchKey"
                as="select"
                value={searchKey}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchKey(event.target.value);
                  setSearchValue("");
                  autocompleteProfilePropertySearch("%", event.target.value);
                }}
              >
                <option value="">Show All</option>
                {profilePropertyRules.map((rule) => (
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
            <Button size="sm" type="submit">
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>

      <p>
        <strong>{total} matching profiles</strong>
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
                    <a>
                      {searchKey === "" ? (
                        uniqueProfileProperties.map((key) => {
                          if (!profile.properties[key]) {
                            return null;
                          }

                          return (
                            <div key={`key-${profile.guid}-${key}`}>
                              <span className="text-muted">{key}: </span>
                              {String(profile.properties[key].value)}
                              <br />
                            </div>
                          );
                        })
                      ) : (
                        <div key={`key-${profile.guid}-${searchKey}`}>
                          <span className="text-muted">{searchKey}: </span>
                          {profile.properties[searchKey]
                            ? profile.properties[searchKey]?.value?.toString()
                            : null}
                          <br />
                        </div>
                      )}

                      <span className="text-muted">
                        Grouparoo Guid: {profile.guid}
                      </span>
                    </a>
                  </Link>
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx);
  const { limit, offset, searchKey, searchValue } = ctx.query;
  const { profiles, total } = await execApi("get", `/profiles`, {
    limit,
    offset,
    searchKey,
    searchValue,
  });
  const { profilePropertyRules } = await execApi(
    "get",
    `/profilePropertyRules`
  );
  return { profiles, total, profilePropertyRules };
};
