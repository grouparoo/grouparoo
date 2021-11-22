import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import DestinationCollectionLink from "../../destination/DestinationCollectionLink";
import EntityInfoContainer from "./EntityInfoContainer";
import EntityInfoHeading from "./EntityInfoHeading";

const DestinationInfo: React.FC<{ destination: Models.DestinationType }> = ({
  destination,
}) => {
  const { app, connection, exportTotals } = destination;

  return (
    <EntityInfoContainer app={app}>
      <EntityInfoHeading entity={destination} />
      <div>{connection?.displayName}</div>
      <div>Pending Exports: {exportTotals.pending}</div>
      <div>
        Collection Tracked:{" "}
        <DestinationCollectionLink destination={destination} />
      </div>
    </EntityInfoContainer>
  );
};

interface ModelOverviewDestinationsProps {
  destinations?: Models.DestinationType[];
}

const ModelOverviewDestinations: React.FC<ModelOverviewDestinationsProps> = ({
  destinations,
}) => {
  if (!destinations || !destinations.length) {
    return null;
  }

  return (
    <ListGroup className="list-group-flush">
      {destinations.map((destination, index) => (
        <ListGroupItem key={index}>
          <DestinationInfo destination={destination} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ModelOverviewDestinations;
