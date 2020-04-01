import { Badge } from "react-bootstrap";

export default function StateBadge({ state }: { state: string }) {
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
    case "deleted":
      variant = "danger";
      break;
    case "draft":
      variant = "warning";
      break;
    case "initializing":
      variant = "warning";
      break;
    case "updating":
      variant = "warning";
      break;
    default:
      variant = "primary";
  }

  return <Badge variant={variant}>{state}</Badge>;
}
