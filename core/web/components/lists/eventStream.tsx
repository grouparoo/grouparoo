import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import { Form, Col, Button } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import { EventAPIData } from "../../utils/apiData";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [events, setEvents] = useState<EventAPIData[]>([]);
  const [autocompleteResults, setAutoCompleteResults] = useState([]);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [type, setType] = useState(query.type || "");
  const [tab, setTab] = useState(
    query.tab ? (query.tab === "edit" ? "profiles" : query.tab) : ""
  );
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();
  }, [offset, limit]);

  useEffect(() => {
    autocompleteProfilePropertySearch();
  }, []);

  async function load(event?) {
    if (event) {
      event.preventDefault();
    }

    setTotal(0);
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/events`, {
      type,
      limit,
      offset,
    });
    setLoading(false);
    if (response?.events) {
      setEvents(response.events);
      setTotal(response.total);
      if (offset > response.total) {
        setOffset(0);
      }
    }

    updateURLParams();
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (tab && tab !== "") {
      url += `tab=${tab}&`;
    }
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    if (type && type !== "") {
      url += `type=${escape(type)}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  async function autocompleteProfilePropertySearch(match?) {
    setSearchLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/events/autocompleteType`,
      {
        match,
      }
    );
    if (response.types) {
      setAutoCompleteResults(response.types);
    }
    setSearchLoading(false);
  }

  return (
    <>
      <Form id="search" onSubmit={load}>
        <Form.Group>
          <Form.Label>Event Type</Form.Label>
          <AsyncTypeahead
            key={`typeahead-search-${type}`}
            id={`typeahead-search-${type}`}
            minLength={0}
            isLoading={searchLoading}
            allowNew={true}
            onChange={(selected) => {
              if (!selected[0]) {
                return setType("");
              }
              setType(
                selected[0].label
                  ? selected[0].label // when a new custom option is set
                  : selected[0] // when a list option is chosen);
              );
            }}
            options={autocompleteResults}
            onSearch={autocompleteProfilePropertySearch}
            defaultSelected={type ? [type] : undefined}
          />
        </Form.Group>

        <Button size="sm" type="submit">
          Search
        </Button>
      </Form>

      <br />
      <br />
      <p>
        <strong>{total} matching events</strong>
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
            <th>Type</th>
            <th>Guids</th>
            <th>UserId</th>
            <th>Data</th>
            <th>Occurred At</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            return (
              <tr key={`event-${event.guid}`}>
                <td>
                  <strong>{event.type}</strong>
                </td>
                <td>
                  <Link href="/event/[guid]" as={`/event/${event.guid}`}>
                    <a>
                      Guid: <span className="text-muted">{event.guid}</span>
                    </a>
                  </Link>
                  <br />
                  {event.profileGuid ? (
                    <Link
                      href="/profile/[guid]"
                      as={`/profile/${event.profileGuid}`}
                    >
                      <a>
                        Profile:{" "}
                        <span className="text-muted">{event.profileGuid}</span>
                      </a>
                    </Link>
                  ) : (
                    "not yet associated"
                  )}
                  <br />
                  <Link
                    href="/apiKey/[guid]"
                    as={`/apiKey/${event.producerGuid}`}
                  >
                    <a>
                      Producer:{" "}
                      <span className="text-muted">{event.producerGuid}</span>
                    </a>
                  </Link>
                </td>
                <td>{event.userId ? event.userId : "none"}</td>
                <td>
                  <code>{JSON.stringify(event.data)}</code>
                </td>
                <td>
                  <Moment fromNow>{event.occurredAt}</Moment>
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
