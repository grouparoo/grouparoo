import Head from "next/head";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import {
  useOffset,
  updateURLParams,
} from "@grouparoo/ui-components/hooks/URLParams";
import { useSecondaryEffect } from "@grouparoo/ui-components/hooks/useSecondaryEffect";
import Link from "next/link";
import Moment from "react-moment";
import Pagination from "@grouparoo/ui-components/components/pagination";
import LoadingTable from "@grouparoo/ui-components/components/loadingTable";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";

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
            <th>Profiles</th>
            <th>State</th>
            <th>Calculated At</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            return (
              <tr key={`group-${group.guid}`}>
                <td>
                  {group.type === "calculated" ? (
                    <Link
                      href="/group/[guid]/rules"
                      as={`/group/${group.guid}/rules`}
                    >
                      <a>{group.name}</a>
                    </Link>
                  ) : (
                    <Link
                      href="/group/[guid]/edit"
                      as={`/group/${group.guid}/edit`}
                    >
                      <a>{group.name}</a>
                    </Link>
                  )}
                </td>
                <td>{group.type}</td>
                <td>{group.profilesCount}</td>
                <td>
                  <StateBadge state={group.state} />
                </td>
                <td>
                  {group.calculatedAt ? (
                    <Moment fromNow>{group.calculatedAt}</Moment>
                  ) : (
                    "Never"
                  )}
                </td>
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

      <Button
        variant="primary"
        onClick={() => {
          router.push("/group/new");
        }}
      >
        Add Group
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { groups, total } = await execApi("get", `/groups`, { limit, offset });
  return { groups, total };
};
