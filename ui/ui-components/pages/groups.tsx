import Head from "next/head";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Link from "../components/enterpriseLink";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import StateBadge from "../components/badges/stateBadge";
import { Models, Actions } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";
import { ErrorHandler } from "../utils/errorHandler";

export default function Page(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
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
            {process.env.GROUPAROO_UI_EDITION !== "config" && <th>Records</th>}
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
                  <td>{group.recordsCount}</td>
                )}
                <td>
                  <StateBadge state={group.state} />
                </td>
                {process.env.GROUPAROO_UI_EDITION !== "config" && (
                  <td>
                    {group.calculatedAt
                      ? formatTimestamp(group.calculatedAt)
                      : "Never"}
                  </td>
                )}
                <td>{formatTimestamp(group.createdAt)}</td>
                <td>{formatTimestamp(group.updatedAt)}</td>
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
