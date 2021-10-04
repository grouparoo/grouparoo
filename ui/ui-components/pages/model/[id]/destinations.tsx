import Head from "next/head";
import { Button, Badge } from "react-bootstrap";
import { useRouter } from "next/router";
import { UseApi } from "../../../hooks/useApi";
import { useOffset, updateURLParams } from "../../../hooks/URLParams";
import { useState } from "react";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import Link from "next/link";
import EnterpriseLink from "../../../components/enterpriseLink";
import Pagination from "../../../components/pagination";
import LoadingTable from "../../../components/loadingTable";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/badges/stateBadge";
import { Models, Actions } from "../../../utils/apiData";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { ErrorHandler } from "../../../utils/errorHandler";
import ModelBadge from "../../../components/badges/modelBadge";

export default function Page(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState<Models.DestinationType[]>(
    props.destinations
  );
  const [total, setTotal] = useState(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  let modelId: string;
  if (router.query.id) {
    if (router.pathname.match("/model/")) {
      modelId = router.query.id.toString();
    }
  }

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, modelId]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response: Actions.DestinationsList = await execApi(
      "get",
      `/destinations`,
      {
        limit,
        offset,
        modelId,
      }
    );
    setLoading(false);
    if (response?.destinations) {
      setDestinations(response.destinations);
      setTotal(response.total);

      if (response.total === 0) {
        router.push("/destination/new");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Destinations</title>
      </Head>

      <h1>Destination</h1>

      <p>{total} destinations</p>

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
            <th>Destination Name</th>
            <th>Type</th>
            <th>Group Tracked</th>
            <th>App</th>
            <th>Model</th>
            <th>State</th>
            <th>Pending Exports</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination) => {
            const pendingExports = destination.exportTotals.pending;

            const formattedDestinationName =
              destination.name ||
              `${destination.state} created on ${
                new Date(destination.createdAt).toLocaleString().split(",")[0]
              }`;

            return (
              <tr key={`destination-${destination.id}`}>
                <td>
                  <AppIcon src={destination.app?.icon} />
                </td>
                <td>
                  {process.env.GROUPAROO_UI_EDITION !== "community" ? (
                    <EnterpriseLink
                      href="/destination/[id]/edit"
                      as={`/destination/${destination.id}/edit`}
                    >
                      <a>
                        <strong>{formattedDestinationName}</strong>
                      </a>
                    </EnterpriseLink>
                  ) : (
                    <Link
                      href="/destination/[id]/exports"
                      as={`/destination/${destination.id}/exports`}
                    >
                      <a>
                        <strong>{formattedDestinationName}</strong>
                      </a>
                    </Link>
                  )}
                </td>
                <td>{destination.connection.displayName}</td>
                <td>
                  {destination.destinationGroup?.id ? (
                    <EnterpriseLink
                      href="/group/[id]/edit"
                      as={`/group/${destination.destinationGroup.id}/edit`}
                    >
                      <a>{destination.destinationGroup.name}</a>
                    </EnterpriseLink>
                  ) : (
                    "None"
                  )}
                </td>
                <td>
                  <EnterpriseLink
                    href="/app/[id]/edit"
                    as={`/app/${destination.app.id}/edit`}
                  >
                    <a>
                      <strong>{destination.app.name}</strong>
                    </a>
                  </EnterpriseLink>
                </td>
                <td>
                  <ModelBadge
                    modelName={destination.modelName}
                    modelId={destination.modelId}
                  />
                </td>
                <td>
                  <StateBadge state={destination.state} />
                </td>
                <td>
                  <Badge variant={pendingExports > 0 ? "warning" : "info"}>
                    {pendingExports}
                  </Badge>
                </td>
                <td>{formatTimestamp(destination.createdAt)}</td>
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

      {process.env.GROUPAROO_UI_EDITION !== "community" ? (
        <Button
          variant="primary"
          onClick={() => {
            router.push("/destination/new");
          }}
        >
          Add new Destination
        </Button>
      ) : null}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { id, limit, offset } = ctx.query;
  let modelId: string;
  if (id) {
    if (ctx.pathname.match("/model/")) {
      modelId = id as string;
    }
  }
  const { destinations, total } = await execApi("get", `/destinations`, {
    limit,
    offset,
    modelId,
  });
  return { destinations, total };
};
