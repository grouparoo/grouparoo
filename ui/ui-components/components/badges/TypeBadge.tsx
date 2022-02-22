import { Badge } from "react-bootstrap";

export default function TypeBadge({
  type,
  marginBottom = 20,
}: {
  type: string;
  marginBottom?: number;
}) {
  return (
    <Badge style={{ marginBottom }} variant="light">
      {type}
    </Badge>
  );
}
