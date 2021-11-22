import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import SectionContainer from "./SectionContainer";
import SourceInfo from "./SourceInfo";

const ModelOverviewSecondarySources: React.FC<{
  sources: Models.SourceType[];
}> = ({ sources }) => {
  return (
    <SectionContainer
      title="Secondary Sources"
      icon="file-import"
      description="Secondary sources can be used to enrich your records with additional data."
    >
      <p>
        <Button variant="outline-primary" size="sm">
          Add secondary source
        </Button>
      </p>
      {sources.length > 0 && (
        <ListGroup className="list-group-flush">
          {sources.map((source, index) => (
            <ListGroupItem key={index}>
              <SourceInfo source={source} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </SectionContainer>
  );
};

export default ModelOverviewSecondarySources;
