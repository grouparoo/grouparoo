import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import DestinationCollectionLink from "../../destination/DestinationCollectionLink";
import EntityInfoContainer from "./EntityInfoContainer";
import EntityInfoHeader from "./EntityInfoHeader";
import Link from "next/link";
import EnterpriseLink from "../../../components/GrouparooLink";
import { useGrouparooModelContext } from "../../../contexts/grouparooModelContext";
import LinkButton from "../../LinkButton";
import ModelOverviewCard from "./ModelOverviewCard";

const DestinationInfo: React.FC<{ destination: Models.DestinationType }> = ({
  destination,
}) => {
  const { app, connection, exportTotals } = destination;
  const isCommunityUI = grouparooUiEdition() === "community";
  const href = `/model/${destination.modelId}/destination/${destination.id}/${
    isCommunityUI ? "exports" : "edit"
  }`;
  const LinkComponent = isCommunityUI ? Link : EnterpriseLink;

  return (
    <EntityInfoContainer app={app}>
      <EntityInfoHeader
        entity={destination}
        href={href}
        linkComponent={LinkComponent}
      />
      <div>{connection?.displayName}</div>
      <div>Pending Exports: {exportTotals.pending}</div>
      <div>
        Collection Tracked:{" "}
        <DestinationCollectionLink destination={destination} />
      </div>
    </EntityInfoContainer>
  );
};

interface Props {
  destinations?: Models.DestinationType[];
}

const ModelOverviewDestinations: React.FC<Props> = ({ destinations }) => {
  const model = useGrouparooModelContext();

  return (
    <ModelOverviewCard
      title="Destinations"
      actionButtons={
        <LinkButton
          variant="outline-primary"
          size="sm"
          href={`/model/${model.id}/destination/new`}
          hideOn={["community"]}
        >
          Add new Destination
        </LinkButton>
      }
    >
      {destinations && (
        <ListGroup className="list-group-flush">
          {destinations.map((destination, index) => (
            <ListGroupItem key={index}>
              <DestinationInfo destination={destination} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </ModelOverviewCard>
  );
};

export default ModelOverviewDestinations;
