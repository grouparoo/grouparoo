import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import { Models } from "../../../utils/apiData";
import LinkButton from "../../LinkButton";
import EntityList from "../../lib/entity/EntityList";
import SectionContainer from "../../lib/SectionContainer";
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
      actions={[
        <LinkButton
          variant="outline-primary"
          size="sm"
          href={`/model/${model.id}/source/new`}
          hideOn={["community"]}
          disabled={disabled}
        >
          Add new Source
        </LinkButton>,
      ]}
    >
      <EntityList
        items={sources}
        itemType="source"
        renderItem={(source) => <SourceInfo source={source} />}
      />
    </SectionContainer>
  );
};

export default ModelOverviewSecondarySources;
