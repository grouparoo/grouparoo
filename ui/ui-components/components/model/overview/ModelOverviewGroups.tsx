import { Models } from "../../../utils/apiData";
import SectionContainer from "../../lib/SectionContainer";
import EntityInfoContainer from "../../lib/entity/EntityInfoContainer";
import EntityInfoHeader from "../../lib/entity/EntityInfoHeader";
import LinkButton from "../../LinkButton";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import EntityList from "../../lib/entity/EntityList";

const GroupInfo: React.FC<{ group: Models.GroupType }> = ({ group }) => {
  return (
    <EntityInfoContainer>
      <EntityInfoHeader
        entity={group}
        href={`/model/${group.modelId}/group/${group.id}/rules`}
      />
      <div>Records: {group.recordsCount || 0}</div>
    </EntityInfoContainer>
  );
};

interface Props {
  groups: Models.GroupType[];
  disabled?: boolean;
}

const ModelOverviewGroups: React.FC<Props> = ({ groups, disabled }) => {
  const model = useGrouparooModelContext();

  return (
    <SectionContainer
      title="Groups"
      icon="users"
      description="Groups are used to segment your Records before syncing to your Destinations."
      disabled={disabled}
      actions={[
        <LinkButton
          variant="outline-primary"
          size="sm"
          href={`/model/${model.id}/group/new`}
          hideOn={["community"]}
          disabled={disabled}
        >
          Add new Group
        </LinkButton>,
      ]}
    >
      <EntityList
        items={groups}
        itemType="group"
        renderItem={(group) => <GroupInfo group={group} />}
      />
    </SectionContainer>
  );
};

export default ModelOverviewGroups;
