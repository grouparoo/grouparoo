import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import { Models } from "../../../utils/apiData";
import LinkButton from "../../LinkButton";
import SectionContainer from "./SectionContainer";
import SourceInfo from "./SourceInfo";

const ModelOverviewPrimarySource: React.FC<{ source?: Models.SourceType }> = ({
  source,
}) => {
  const model = useGrouparooModelContext();

  return (
    <SectionContainer
      title="Primary Source"
      iconType={source ? "app" : "icon"}
      icon={source ? source.app?.icon : "file-import"}
      description="The primary source defines the core properties and primary key for your records."
    >
      {source ? (
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <SourceInfo source={source} isPrimarySource />
          </ListGroupItem>
        </ListGroup>
      ) : (
        <div>
          <LinkButton
            variant="primary"
            size="sm"
            href={`/model/${model.id}/source/new`}
            hideOn={["community"]}
          >
            Create primary Source
          </LinkButton>
        </div>
      )}
    </SectionContainer>
  );
};

export default ModelOverviewPrimarySource;
