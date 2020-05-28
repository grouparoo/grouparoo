import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import { Form, Col, Button } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../../../components/pagination";
import LoadingTable from "../../../components/loadingTable";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import ProfileTabs from "../../../components/tabs/profile";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";
import Head from "next/head";

import { EventAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const { errorHandler, query, profile } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [events, setEvents] = useState<EventAPIData[]>(props.events);
  const [total, setTotal] = useState<number>(props.total);
  const [autocompleteResults, setAutoCompleteResults] = useState(
    props.autocompleteResults
  );

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [type, setType] = useState(query.type || "");
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    load();
  }, [profile.guid, offset, limit]);

  useSecondaryEffect(() => {
    autocompleteProfilePropertySearch();
  }, []);

  async function load(event?) {
    if (event) {
      event.preventDefault();
    }

    setTotal(0);
    setLoading(true);
    const response = await execApi("get", `/events`, {
      profileGuid: profile.guid,
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
    const response = await execApi("get", `/events/autocompleteType`, {
      match,
    });
    if (response.types) {
      setAutoCompleteResults(response.types);
    }
    setSearchLoading(false);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

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
                  <Link
                    href="/event/[guid]/edit"
                    as={`/event/${event.guid}/edit`}
                  >
                    <a>
                      Guid: <span className="text-muted">{event.guid}</span>
                    </a>
                  </Link>
                  <br />
                  {event.profileGuid ? (
                    <Link
                      href="/profile/[guid]/edit"
                      as={`/profile/${event.profileGuid}/edit`}
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
                    href="/apiKey/[guid]/edit"
                    as={`/apiKey/${event.producerGuid}/edit`}
                  >
                    <a>
                      Producer:{" "}
                      <span className="text-muted">{event.producerGuid}</span>
                    </a>
                  </Link>
                </td>
                <td>{event.userId ? event.userId : "none"}</td>
                <td>
                  <ul>
                    {Object.keys(event.data)
                      .sort()
                      .map((k) => (
                        <li key={`event-${event.guid}-data-${k}`}>
                          <strong>{k}</strong>: {event.data[k]}
                        </li>
                      ))}
                  </ul>
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset, guid, type } = ctx.query;
  const { profile } = await execApi("get", `/profile/${guid}`);
  const { events, total } = await execApi("get", `/events`, {
    limit,
    offset,
    type,
    profileGuid: guid,
  });
  const { types } = await execApi("get", `/events/autocompleteType`, {});
  return { profile, events, total, autocompleteResults: types };
};
