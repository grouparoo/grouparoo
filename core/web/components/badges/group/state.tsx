import { Badge } from "react-bootstrap";

export default function GroupStateBadge({ state }) {
  return (
    <Badge variant={state === "ready" ? "success" : "danger"}>{state}</Badge>
  );
}
