import { Badge, BadgeProps } from "react-bootstrap";

interface Props {
  state: string;
  marginBottom?: number;
  style?: React.CSSProperties;
}

const StateBadge: React.FC<Props> = ({ state, marginBottom, style }) => {
  let bg: BadgeProps["bg"];

  switch (state) {
    case "ready":
      bg = "success";
      break;
    case "complete":
      bg = "success";
      break;
    case "deleted":
      bg = "danger";
    case "invalid":
      bg = "danger";
    case "failed":
      bg = "danger";
      break;
    case "draft":
      bg = "warning";
      break;
    case "initializing":
      bg = "warning";
      break;
    case "pending":
      bg = "warning";
      break;
    case "updating":
      bg = "warning";
      break;
    case "canceled":
      bg = "warning";
      break;
    default:
      bg = "primary";
  }

  return (
    <Badge
      style={{
        marginLeft: 3,
        marginRight: 3,
        marginBottom: marginBottom ?? 20,
        ...style,
      }}
      bg={bg}
    >
      {state}
    </Badge>
  );
};

export default StateBadge;
