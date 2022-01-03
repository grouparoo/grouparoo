import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import DestinationCollectionLink from "../../destination/DestinationCollectionLink";
import EntityInfoContainer from "../../lib/entity/EntityInfoContainer";
import EntityInfoHeader from "../../lib/entity/EntityInfoHeader";
import Link from "next/link";
import EnterpriseLink from "../../../components/GrouparooLink";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import LinkButton from "../../LinkButton";
import ManagedCard from "../../lib/ManagedCard";
import SectionContainer from "../../lib/SectionContainer";

const isCommunityUI = grouparooUiEdition() === "community";

const DestinationInfo: React.FC<{
  destination: Models.DestinationType;
}> = ({ destination }) => {
  const { app, connection, exportTotals } = destination;
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
      <div>
        Collection Tracked:{" "}
        <DestinationCollectionLink destination={destination} />
      </div>
    </EntityInfoContainer>
  );
};

interface Props {
  destinations?: Models.DestinationType[];
  disabled?: boolean;
}

const ModelOverviewDestinations: React.FC<Props> = ({
  destinations,
  disabled,
}) => {
  const model = useGrouparooModelContext();

  return (
    <ManagedCard
      title="Destinations"
      disabled={disabled}
      actions={[
        <LinkButton
          variant="outline-primary"
          size="sm"
          href={`/model/${model.id}/destination/new`}
          hideOn={["community"]}
          disabled={disabled}
          key={model.id}
        >
          Add new Destination
        </LinkButton>,
      ]}
    >
      <ListGroup className="list-group-flush">
        {destinations?.length ? (
          destinations.map((destination, index) => (
            <ListGroupItem key={index}>
              <DestinationInfo destination={destination} />
            </ListGroupItem>
          ))
        ) : (
          <ListGroupItem>
            <SectionContainer
              iconType="icon"
              icon="file-export"
              description={`Use Destinations to sync your ${model.name} Model Records to other apps.`}
            ></SectionContainer>
          </ListGroupItem>
        )}
      </ListGroup>
    </ManagedCard>
  );
};

export default ModelOverviewDestinations;
