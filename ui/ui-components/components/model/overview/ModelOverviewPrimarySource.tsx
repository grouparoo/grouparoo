import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import SectionContainer from "./SectionContainer";
import SourceSummary from "./SourceSummary";

const ModelOverviewPrimarySource: React.FC<{ source: Models.SourceType }> = ({
  source,
}) => {
  return (
    <SectionContainer
      title="Primary Source"
      iconType="app"
      icon={source.app?.icon}
      description="The primary source defines the core properties and primary key for your records."
    >
      <p>
        <Button variant="outline-primary" size="sm">
          Learn more
        </Button>{" "}
        <Button variant="primary" size="sm">
          Add primary source
        </Button>
      </p>
      {source && (
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <SourceSummary source={source} isPrimarySource />
          </ListGroupItem>
        </ListGroup>
      )}
    </SectionContainer>
  );
};

export default ModelOverviewPrimarySource;
