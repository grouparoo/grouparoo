import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import Router from "next/router";
import { Button } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import GroupStateBadge from "../badges/group/state";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [group, setGroup] = useState({
    profilesCount: 0,
    type: "manual",
    state: "",
  });
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const { guid } = query;

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadAll() {
      await loadGroup();
      await loadProfiles();
      await loadProfilePropertyRules();
    }

    loadAll();
    updateURLParams();
  }, [offset, limit]);

  async function loadGroup() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/group/${guid}`);
    setLoading(false);
    if (response?.group) {
      setGroup(response.group);
    }
  }

  async function loadProfiles() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/group/${guid}/profiles`,
      { limit, offset }
    );
    setLoading(false);
    if (response?.total) {
      setTotal(response.total);
      setProfiles(response.profiles);
    }
  }

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
    }
  }

  async function handleDelete(profile) {
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/group/${guid}/remove`,
      { profileGuid: profile.guid }
    );
    setLoading(false);
    if (response) {
      successHandler.set({ message: "Profile Removed" });
      await loadGroup();
      await loadProfiles();
    }
  }

  async function handleExport(type = "csv") {
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/group/${guid}/export`,
      { type }
    );
    setLoading(false);
    if (response?.success) {
      successHandler.set({
        message:
          "Started Group Export.  It will be available in Files when complete...",
      });
    }
  }

  async function run() {
    if (window.confirm("are you sure? this could take a while")) {
      setLoading(true);
      const response = await execApi(
        "put",
        `/api/${apiVersion}/group/${guid}/run`
      );
      setLoading(false);
      if (response?.success) {
        successHandler.set({ message: "Update Run Enqueued" });
      }
    }
  }

  async function updateMembers() {
    if (window.confirm("are you sure? this could take a while")) {
      setLoading(true);
      const response = await execApi(
        "put",
        `/api/${apiVersion}/group/${guid}/updateMembers`
      );
      setLoading(false);
      if (response?.success) {
        successHandler.set({ message: "UpdateMembers Run Enqueued" });
      }
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    url += "tab=members&";
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }

    Router.push(Router.route, url, { shallow: true });
  }

  const uniqueProfileProperties = [];
  profilePropertyRules.forEach((rule) => {
    if (rule.unique) {
      uniqueProfileProperties.push(rule.key);
    }
  });

  return (
    <>
      <p>{group.profilesCount} profiles in this group</p>
      <p>
        Group State: <GroupStateBadge state={group.state} />
      </p>
      <Button
        disabled={group.state !== "ready"}
        variant="info"
        size="sm"
        onClick={() => {
          handleExport("csv");
        }}
      >
        Export all Group Members to CSV
      </Button>
      &nbsp;
      <Button
        variant="secondary"
        size="sm"
        onClick={() => {
          run();
        }}
      >
        Recalculate Members
      </Button>
      &nbsp;
      <Button
        variant="secondary"
        size="sm"
        onClick={() => {
          updateMembers();
        }}
      >
        Import and Export Group Members
      </Button>
      <br />
      <br />
      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Guid</th>
            <th>Unique Properties</th>
            <th>Joined At</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => {
            return (
              <tr key={`profile-${profile.guid}`}>
                <td>
                  <Link href="/profile/[guid]" as={`/profile/${profile.guid}`}>
                    <a>{profile.guid}</a>
                  </Link>
                </td>
                <td>
                  {uniqueProfileProperties.map((key) => {
                    return (
                      <div key={`key-${profile.guid}-${key}`}>
                        <span className="text-muted">{key}: </span>
                        {profile.properties[key].value}
                        <br />
                      </div>
                    );
                  })}
                </td>
                <td>
                  <Moment fromNow>{profile.joinedAt}</Moment>
                </td>
                <td>
                  {group.type === "manual" ? (
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        handleDelete(profile);
                      }}
                    >
                      X
                    </Button>
                  ) : null}
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
