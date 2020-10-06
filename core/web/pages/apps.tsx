import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import AppIcon from "../components/appIcon";
import StateBadge from "../components/stateBadge";
import { Button } from "react-bootstrap";

import { AppAPIData } from "../utils/apiData";

export default function Page(props) {
  const { errorHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [apps, setApps] = useState<AppAPIData[]>(props.apps);
  const [total, setTotal] = useState(props.total);
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
    const response = await execApi("get", `/apps`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.apps) {
      setApps(response.apps);
      setTotal(response.total);

      if (response.total === 0) {
        router.push("/app/new");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Apps</title>
      </Head>

      <h1>Apps</h1>
      <p>{total} apps</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>State</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => {
            return (
              <tr key={`team-${app.guid}`}>
                <td>
                  <AppIcon src={app.icon} />
                </td>
                <td>
                  <Link href="/app/[guid]/edit" as={`/app/${app.guid}/edit`}>
                    <a>
                      <strong>
                        {app.name ||
                          `${app.state} created ${
                            new Date(app.createdAt)
                              .toLocaleString()
                              .split(",")[0]
                          }`}
                      </strong>
                    </a>
                  </Link>
                </td>
                <td>{app.type}</td>
                <td>
                  <StateBadge state={app.state} />
                </td>
                <td>
                  <Moment fromNow>{app.createdAt}</Moment>
                </td>
                <td>
                  <Moment fromNow>{app.updatedAt}</Moment>
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

      <br />

      <Button
        variant="primary"
        onClick={() => {
          router.push("/app/new");
        }}
      >
        Add App
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { apps, total } = await execApi("get", `/apps`, { limit, offset });
  return { apps, total };
};
