import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Badge } from "react-bootstrap";
import type { NextPageContext } from "next";
import { UseApi } from "../../../hooks/useApi";
import { useOffset, updateURLParams } from "../../../hooks/URLParams";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import EnterpriseLink from "../../../components/GrouparooLink";
import Pagination from "../../../components/Pagination";
import LoadingTable from "../../../components/LoadingTable";
import AppIcon from "../../../components/AppIcon";
import StateBadge from "../../../components/badges/StateBadge";
import { Models, Actions } from "../../../utils/apiData";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { ErrorHandler } from "../../../utils/errorHandler";
import LinkButton from "../../../components/LinkButton";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import { formatName } from "../../../utils/formatName";
import DestinationCollectionLink from "../../../components/destination/DestinationCollectionLink";

export default function Page(props) {
  const {
    errorHandler,
    modelName,
  }: {
    errorHandler: ErrorHandler;
    modelName: string;
  } = props;
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

  const { modelId } = router.query;

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
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Destinations</title>
      </Head>

      <h1>Destinations: {modelName}</h1>

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
            <th>Collection Tracked</th>
            <th>App</th>
            <th>State</th>
            <th>Pending Exports</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination) => {
            const pendingExports = destination.exportTotals.pending;

            return (
              <tr key={`destination-${destination.id}`}>
                <td>
                  <AppIcon src={destination.app?.icon} />
                </td>
                <td>
                  <AppDisplay destination={destination} />
                </td>
                <td>{destination.connection.displayName}</td>
                <td>
                  <DestinationCollectionLink destination={destination} />
                </td>
                <td>
                  <EnterpriseLink href={`/app/${destination.app.id}/edit`}>
                    <a>
                      <strong>{destination.app.name}</strong>
                    </a>
                  </EnterpriseLink>
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

      <LinkButton
        variant="primary"
        href={`/model/${modelId}/destination/new`}
        hideOn={["community"]}
      >
        Add new Destination
      </LinkButton>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { execApi } = UseApi(ctx);
  const { modelId, limit, offset } = ctx.query;

  const { destinations, total } = await execApi("get", `/destinations`, {
    limit,
    offset,
    modelId,
  });

  let modelName = destinations.length > 0 ? destinations[0].modelName : null;
  if (!modelName) {
    const { model } = await execApi("get", `/model/${modelId}`);
    modelName = model.name;
  }

  return { destinations, modelName, total };
};

const AppDisplay = ({
  destination,
}: {
  destination: Models.DestinationType;
}) => {
  const formattedName = (
    <a>
      <strong>{formatName(destination)}</strong>
    </a>
  );

  switch (grouparooUiEdition()) {
    case "community": {
      return (
        <Link
          href={`/model/${destination.modelId}/destination/${destination.id}/exports`}
        >
          {formattedName}
        </Link>
      );
    }
    default: {
      return (
        <EnterpriseLink
          href={`/model/${destination.modelId}/destination/${destination.id}/edit`}
        >
          {formattedName}
        </EnterpriseLink>
      );
    }
  }
};
