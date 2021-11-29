import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import { Models } from "../../../utils/apiData";
import LinkButton from "../../LinkButton";
import SectionContainer from "./SectionContainer";
import SourceInfo from "./SourceInfo";

interface Props {
  sources: Models.SourceType[];
  disabled?: boolean;
}

const ModelOverviewSecondarySources: React.FC<Props> = ({
  sources,
  disabled,
}) => {
  const model = useGrouparooModelContext();

  return (
    <SectionContainer
      title="Secondary Sources"
      icon="file-import"
      description="Secondary Sources enrich your Records with additional data."
      disabled={disabled}
      actionButtons={
        <LinkButton
          variant="outline-primary"
          size="sm"
          href={`/model/${model.id}/source/new`}
          hideOn={["community"]}
          disabled={disabled}
        >
          Add new Source
        </LinkButton>
      }
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
    </SectionContainer>
  );
};

export default ModelOverviewSecondarySources;
