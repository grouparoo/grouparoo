import { useApi } from "../../../hooks/useApi";
import Head from "next/head";
import { useState } from "react";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import { Button } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../../../components/pagination";
import LoadingTable from "../../../components/loadingTable";
import StateBadge from "../../../components/stateBadge";
import GroupTabs from "../../../components/tabs/group";

import { ProfileAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    group,
    profilePropertyRules,
    query,
  } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState<ProfileAPIData[]>(props.profiles);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(props.total);
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    loadProfiles();
  }, [offset, limit]);

  async function loadProfiles() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/group/${group.guid}/profiles`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.total) {
      setTotal(response.total);
      setProfiles(response.profiles);
    }
  }

  async function handleDelete(profile) {
    setLoading(true);
    const response = await execApi("put", `/group/${group.guid}/remove`, {
      profileGuid: profile.guid,
    });
    setLoading(false);
    if (response) {
      successHandler.set({ message: "Profile Removed" });
      await loadProfiles();
    }
  }

  async function handleExport(type = "csv") {
    setLoading(true);
    const response = await execApi("put", `/group/${group.guid}/export`, {
      type,
    });
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
      const response = await execApi("put", `/group/${group.guid}/run`);
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
        `/group/${group.guid}/updateMembers`
      );
      setLoading(false);
      if (response?.success) {
        successHandler.set({ message: "UpdateMembers Run Enqueued" });
      }
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
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

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>
      <GroupTabs name={group.name} />
      <p>
        <StateBadge state={group.state} />
      </p>
      <p>{group.profilesCount} profiles in this group</p>
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
                  <Link
                    href="/profile/[guid]/edit"
                    as={`/profile/${profile.guid}/edit`}
                  >
                    <a>
                      {uniqueProfileProperties.map((key) => {
                        return (
                          <div key={`key-${profile.guid}-${key}`}>
                            <span className="text-muted">{key}: </span>
                            {profile.properties[key].value}
                            <br />
                          </div>
                        );
                      })}

                      <span className="text-muted">
                        Grouparoo Guid: {profile.guid}
                      </span>
                    </a>
                  </Link>
                </td>
                <td>
                  <Moment fromNow>{profile["joinedAt"]}</Moment>
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

Page.getInitialProps = async (ctx) => {
  const { guid, limit, offset } = ctx.query;
  const { execApi } = useApi(null, ctx);
  const { group } = await execApi("get", `/group/${guid}`);
  const { profilePropertyRules } = await execApi(
    "get",
    `/profilePropertyRules`
  );
  const { profiles, total } = await execApi(
    "get",
    `/group/${group.guid}/profiles`,
    {
      limit,
      offset,
    }
  );
  return { group, profilePropertyRules, profiles, total };
};
