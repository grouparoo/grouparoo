import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useGrouparooModelContext } from "../../../contexts/GrouparooModelContext";
import { Models } from "../../../utils/apiData";
import LinkButton from "../../LinkButton";
import SectionContainer from "./SectionContainer";
import SourceInfo from "./SourceInfo";

const ModelOverviewSecondarySources: React.FC<{
  sources: Models.SourceType[];
}> = ({ sources }) => {
  const model = useGrouparooModelContext();

  return (
    <SectionContainer
      title="Secondary Sources"
      icon="file-import"
      description="Secondary sources can be used to enrich your records with additional data."
    >
      {sources.length > 0 && (
        <ListGroup className="list-group-flush">
          {sources.map((source, index) => (
            <ListGroupItem key={index}>
              <SourceInfo source={source} />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
      <div>
        <LinkButton
          variant="outline-primary"
          size="sm"
          href={`/model/${model.id}/source/new`}
          hideOn={["community"]}
        >
          Add new Source
        </LinkButton>
      </div>
    </SectionContainer>
  );
};

export default ModelOverviewSecondarySources;
