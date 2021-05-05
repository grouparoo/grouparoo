import { Badge } from "react-bootstrap";

export default function StateBadge({
  state,
  marginBottom,
}: {
  state: string;
  marginBottom?: number;
}) {
  let variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

  switch (state) {
    case "ready":
      variant = "success";
      break;
    case "complete":
      variant = "success";
      break;
    case "deleted":
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
    <Badge style={{ marginBottom: marginBottom ?? 20 }} variant={variant}>
      {state}
    </Badge>
  );
}
