import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Router from "next/router";
import { Form, Col, Button } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";

export default function ({ apiVersion, errorHandler, hideSearch, query }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [profiles, setProfiles] = useState([]);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [searchKey, setSearchKey] = useState(query.searchKey || "");
  const [searchValue, setSearchValue] = useState(query.searchValue || "");
  const [tab, setTab] = useState(
    query.tab ? (query.tab === "edit" ? "profiles" : query.tab) : ""
  );
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();
  }, [offset, limit, searchKey, searchValue]);

  async function load() {
    if (profilePropertyRules.length === 0) {
      await loadProfileProperties();
    }

    setTotal(0);
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/profiles`, {
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

  async function loadProfileProperties() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`,
      { state: "ready" }
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(
        response.profilePropertyRules.sort((a, b) => {
          if (a.key > b.key) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (tab && tab !== "") {
      url += `tab=${tab}&`;
    }
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    if (searchKey && searchKey !== "") {
      url += `searchKey=${searchKey}&`;
    }
    if (searchValue && searchValue !== "") {
      url += `searchValue=${searchValue}&`;
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

  function onSubmit(data) {
    setSearchKey(data.searchKey);
    setSearchValue(data.searchValue);
  }

  return (
    <>
      {hideSearch ? null : (
        <Form id="search" onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Search Property</Form.Label>
                <Form.Control
                  name="searchKey"
                  as="select"
                  value={searchKey}
                  ref={register}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchKey(event.target.value)
                  }
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
                <Form.Group>
                  <Form.Label>Search Term (use * for fuzzy matches)</Form.Label>
                  <Form.Control
                    type="text"
                    name="searchValue"
                    placeholder="name@example.com"
                    defaultValue={searchValue}
                    ref={register}
                  />
                </Form.Group>
              </Col>
            ) : null}

            <Col md={2} style={{ marginTop: 34 }}>
              <Button size="sm" type="submit">
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      )}

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
                  <Link href="/profile/[guid]" as={`/profile/${profile.guid}`}>
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
                            ? profile.properties[searchKey].value.toString()
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
