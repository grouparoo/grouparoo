import { useGrouparooModel } from "../../../contexts/grouparooModel";
import { Models } from "../../../utils/apiData";
import LinkButton from "../../LinkButton";
import EntityList from "../../lib/entity/EntityList";
import SectionContainer from "../../lib/SectionContainer";
import SourceInfo from "./SourceInfo";

const ModelOverviewPrimarySource: React.FC<{ source?: Models.SourceType }> = ({
  source,
}) => {
  const { model } = useGrouparooModel();

  return (
    <SectionContainer
      title="Primary Source"
      iconType={source ? "app" : "icon"}
      icon={source?.app?.icon ?? "file-import"}
      description="The Primary Source defines the core properties and primary key for your Records."
      actions={[
        !source ? (
          <LinkButton
            variant="primary"
            size="sm"
            href={`/model/${model.id}/source/new`}
            hideOn={["community"]}
          >
            Create Primary Source
          </LinkButton>
        ) : undefined,
      ]}
    >
      {source && (
        <EntityList
          items={[source]}
          itemType="source"
          renderItem={(source) => (
            <SourceInfo source={source} isPrimarySource />
          )}
        />
      )}
    </SectionContainer>
  );
};

export default ModelOverviewPrimarySource;
