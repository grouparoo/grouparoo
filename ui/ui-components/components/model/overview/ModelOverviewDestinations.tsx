import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import EntitySummaryContainer from "./EntitySummaryContainer";
import EntitySummaryHeading from "./EntitySummaryHeading";

const DestinationSummary: React.FC<{ destination: Models.DestinationType }> = ({
  destination,
}) => {
  const { app, connection, exportTotals } = destination;

  return (
    <EntitySummaryContainer app={app}>
      <EntitySummaryHeading entity={destination} />
      <div>{connection?.displayName}</div>
      <div>Pending Exports: {exportTotals.pending}</div>
      <div>Syncing: TODO</div>
    </EntitySummaryContainer>
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
          <DestinationSummary destination={destination} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ModelOverviewDestinations;
