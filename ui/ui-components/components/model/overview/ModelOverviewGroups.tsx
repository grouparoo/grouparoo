import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import SectionContainer from "./SectionContainer";
import EntityInfoContainer from "./EntityInfoContainer";
import EntityInfoHeading from "./EntityInfoHeading";

const GroupInfo: React.FC<{ group: Models.GroupType }> = ({ group }) => {
  return (
    <EntityInfoContainer>
      <EntityInfoHeading entity={group} />
      <div>{group.type}</div>
      <div>Records: {group.recordsCount || 0}</div>
    </EntityInfoContainer>
  );
};

const ModelOverviewGroups: React.FC<{ groups: Models.GroupType[] }> = ({
  groups,
}) => {
  return (
    <SectionContainer
      title="Groups"
      icon="users"
      description="Segment your data using groups to enrich your destinations."
    >
      {groups.length > 0 && (
        <ListGroup className="list-group-flush">
          {groups.map((group, index) => (
            <ListGroupItem key={index}>
              <GroupInfo group={group} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

export default ModelOverviewGroups;
