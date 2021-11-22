import { formatName } from "../../../utils/formatName";
import StateBadge from "../../badges/StateBadge";

interface SummaryHeadingProps {
  entity: Parameters<typeof formatName>[0];
}

const EntitySummaryHeading: React.FC<SummaryHeadingProps> = ({ entity }) => {
  return (
    <div>
      <strong>{formatName(entity)}</strong>{" "}
      <StateBadge state={entity.state} marginBottom={0} />
    </div>
  );
};

export default EntitySummaryHeading;
