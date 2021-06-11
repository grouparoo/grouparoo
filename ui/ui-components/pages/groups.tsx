import Head from "next/head";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Link from "../components/enterpriseLink";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import StateBadge from "../components/badges/stateBadge";
import { Models, Actions } from "../utils/apiData";

export default function Page(props) {
  const { errorHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [groups, setGroups] = useState<Models.GroupType[]>(props.groups);
  const [total, setTotal] = useState<number>(props.total);
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  useSecondaryEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response: Actions.GroupsList = await execApi("get", `/groups`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.groups) {
      setGroups(response.groups);
      setTotal(response.total);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Groups</title>
      </Head>

      <h1>Groups</h1>

      <p>{total} groups</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            {process.env.GROUPAROO_UI_EDITION !== "config" && <th>Profiles</th>}
            <th>State</th>
            {process.env.GROUPAROO_UI_EDITION !== "config" && (
              <th>Calculated At</th>
            )}
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            return (
              <tr key={`group-${group.id}`}>
                <td>
                  {group.type === "calculated" ? (
                    <Link
                      href="/group/[id]/rules"
                      as={`/group/${group.id}/rules`}
                    >
                      <a>{group.name}</a>
                    </Link>
                  ) : (
                    <Link
                      href="/group/[id]/edit"
                      as={`/group/${group.id}/edit`}
                    >
                      <a>{group.name}</a>
                    </Link>
                  )}
                </td>
                <td>{group.type}</td>
                {process.env.GROUPAROO_UI_EDITION !== "config" && (
                  <td>{group.profilesCount}</td>
                )}
                <td>
                  <StateBadge state={group.state} />
                </td>
                {process.env.GROUPAROO_UI_EDITION !== "config" && (
                  <td>
                    {group.calculatedAt ? (
                      <Moment fromNow>{group.calculatedAt}</Moment>
                    ) : (
                      "Never"
                    )}
                  </td>
                )}
                <td>
                  <Moment fromNow>{group.createdAt}</Moment>
                </td>
                <td>
                  <Moment fromNow>{group.updatedAt}</Moment>
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

      {process.env.GROUPAROO_UI_EDITION !== "community" ? (
        <Button
          variant="primary"
          onClick={() => {
            router.push("/group/new");
          }}
        >
          Add Group
        </Button>
      ) : null}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { groups, total } = await execApi("get", `/groups`, { limit, offset });
  return { groups, total };
};
