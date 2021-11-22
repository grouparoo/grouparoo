import { formatName } from "../../../utils/formatName";
import StateBadge from "../../badges/StateBadge";

interface Props {
  entity: Parameters<typeof formatName>[0];
}

const EntityInfoHeading: React.FC<Props> = ({ entity }) => {
  return (
    <div>
      <strong>{formatName(entity)}</strong>{" "}
      <StateBadge state={entity.state} marginBottom={0} />
    </div>
  );
};

export default EntityInfoHeading;
