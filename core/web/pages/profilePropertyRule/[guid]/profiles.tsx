import { useApi } from "../../../hooks/useApi";
import Head from "next/head";
import { useState } from "react";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import Moment from "react-moment";
import Pagination from "../../../components/pagination";
import LoadingTable from "../../../components/loadingTable";
import { ProfileAPIData } from "../../../utils/apiData";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    profilePropertyRule,
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
    const response = await execApi("get", `/profiles`, {
      searchKey: profilePropertyRule.key,
      searchValue: "%",
      limit,
      offset,
    });
    setLoading(false);
    if (response?.total) {
      setTotal(response.total);
      setProfiles(response.profiles);
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

  return (
    <>
      <Head>
        <title>Grouparoo: {profilePropertyRule.key}</title>
      </Head>
      <ProfilePropertyRuleTabs name={profilePropertyRule.key} />

      <p>{total} profiles have this property</p>

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
                      <span className="text-muted">
                        {profilePropertyRule.key}:{" "}
                      </span>
                      {profile?.properties[profilePropertyRule.key]?.value}
                      <br />

                      <span className="text-muted">
                        Grouparoo Guid: {profile.guid}
                      </span>
                    </a>
                  </Link>
                </td>
                <td>
                  <Moment fromNow>{profile["joinedAt"]}</Moment>
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
  const { profilePropertyRule } = await execApi(
    "get",
    `/profilePropertyRule/${guid}`
  );
  const { profilePropertyRules } = await execApi(
    "get",
    `/profilePropertyRules`
  );
  const { profiles, total } = await execApi("get", `/profiles`, {
    searchKey: profilePropertyRule.key,
    searchValue: "%",
    limit,
    offset,
  });

  return { profilePropertyRule, profilePropertyRules, profiles, total };
};
