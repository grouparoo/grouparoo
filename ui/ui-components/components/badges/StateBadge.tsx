import { Badge, BadgeProps } from "react-bootstrap";

interface Props {
  state: string;
  marginBottom?: number;
  style?: React.CSSProperties;
}

const StateBadge: React.FC<Props> = ({ state, marginBottom, style }) => {
  let variant: BadgeProps["variant"];

  switch (state) {
    case "ready":
      variant = "success";
      break;
    case "complete":
      variant = "success";
      break;
    case "deleted":
      variant = "danger";
    case "invalid":
      variant = "danger";
    case "failed":
      variant = "danger";
      break;
    case "draft":
      variant = "warning";
      break;
    case "initializing":
      variant = "warning";
      break;
    case "pending":
      variant = "warning";
      break;
    case "updating":
      variant = "warning";
      break;
    case "canceled":
      variant = "warning";
      break;
    default:
      variant = "primary";
  }

  return (
    <Badge
      style={{
        marginLeft: 3,
        marginRight: 3,
        marginBottom: marginBottom ?? 20,
        ...style,
      }}
      variant={variant}
    >
      {state}
    </Badge>
  );
};

export default StateBadge;
