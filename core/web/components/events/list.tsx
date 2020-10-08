import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { updateURLParams, useOffset } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { useRealtimeModelStream } from "../../hooks/useRealtimeModelStream";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Alert } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../../components/pagination";
import LoadingTable from "../../components/loadingTable";
import LoadingButton from "../../components/loadingButton";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Models, Actions } from "../../utils/apiData";

export default function EventsList(props) {
  const { errorHandler, hideSearch, hidePagination } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [events, setEvents] = useState<Models.EventType[]>(props.events);
  const [total, setTotal] = useState<number>(props.total);
  const [autocompleteResults, setAutoCompleteResults] = useState(
    props.autocompleteResults
  );

  // websocket
  useRealtimeModelStream("event", "events-list", handleMessage);
  const [newEvents, setNewEvents] = useState<number>(0);

  const profileGuid = router.query.guid?.toString();

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [type, setType] = useState(router.query.type?.toString() || "");

  useSecondaryEffect(() => {
    load();
  }, [profileGuid, offset, limit]);

  useSecondaryEffect(() => {
    autocompleteProfilePropertySearch();
  }, []);

  async function load(event?) {
    if (event) event.preventDefault();

    setTotal(0);
    setNewEvents(0);
    setLoading(true);
    const response: Actions.EventsList = await execApi("get", `/events`, {
      profileGuid,
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

    updateURLParams(router, { offset, type });
  }

  async function autocompleteProfilePropertySearch(match?) {
    setSearchLoading(true);
    const response: Actions.EventAutocompleteType = await execApi(
      "get",
      `/events/autocompleteType`,
      {
        match,
      }
    );
    if (response.types) {
      setAutoCompleteResults(response.types);
    }
    setSearchLoading(false);
  }

  function handleMessage({ model }) {
    if ((type && model.type === type) || type === "") {
      if ((profileGuid && model.profileGuid === profileGuid) || !profileGuid) {
        setNewEvents((newEvents) => newEvents + 1);
      }
    }
  }

  return (
    <>
      {hideSearch ? null : (
        <Form id="search" onSubmit={load}>
          <Form.Group>
            <Form.Label>
              Event Type (use <code>%</code> for wildcards)
            </Form.Label>
            <AsyncTypeahead
              key={`typeahead-search-${type}`}
              id={`typeahead-search-${type}`}
              disabled={loading}
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
              onBlur={(e) => {
                const value = e.target.value;
                if (value && value.length > 0) setType(value);
              }}
              options={autocompleteResults}
              onSearch={autocompleteProfilePropertySearch}
              defaultSelected={type ? [type] : undefined}
            />
          </Form.Group>

          <LoadingButton size="sm" type="submit" disabled={loading}>
            Search
          </LoadingButton>
        </Form>
      )}

      {hideSearch ? null : (
        <>
          <br />
          <br />
          <p>
            <strong>{total} matching events</strong>
          </p>
        </>
      )}

      {hidePagination ? null : (
        <>
          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPress={setOffset}
          />

          {newEvents > 0 ? (
            <Alert variant="secondary">
              {newEvents} new events.{" "}
              <LoadingButton size="sm" onClick={load} disabled={loading}>
                Load
              </LoadingButton>
            </Alert>
          ) : null}
        </>
      )}

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
                  Guid:{" "}
                  <Link
                    href="/event/[guid]/edit"
                    as={`/event/${event.guid}/edit`}
                  >
                    <a>{event.guid}</a>
                  </Link>
                  <br />
                  {event.profileGuid ? (
                    <>
                      Profile:{" "}
                      <Link
                        href="/profile/[guid]/edit"
                        as={`/profile/${event.profileGuid}/edit`}
                      >
                        <a>{event.profileGuid}</a>
                      </Link>
                    </>
                  ) : (
                    "not yet associated"
                  )}
                  <br />
                  Anonymous Id:{" "}
                  <span className="text-muted">{event.anonymousId}</span>
                  <br />
                  Producer:{" "}
                  <Link
                    href="/apiKey/[guid]/edit"
                    as={`/apiKey/${event.producerGuid}/edit`}
                  >
                    <a>{event.producerGuid} </a>
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

      {hidePagination ? null : (
        <Pagination
          total={total}
          limit={limit}
          offset={offset}
          onPress={setOffset}
        />
      )}
    </>
  );
}

EventsList.hydrate = async (ctx, queryOverrides = {}) => {
  const { execApi } = useApi(ctx);
  const { limit, offset, type, guid: profileGuid } = ctx.query;
  const { events, total } = await execApi("get", `/events`, {
    limit: queryOverrides["limit"] ? queryOverrides["limit"] : limit,
    offset,
    type,
    profileGuid,
  });
  const { types } = await execApi("get", `/events/autocompleteType`, {});
  return { events, total, autocompleteResults: types };
};
