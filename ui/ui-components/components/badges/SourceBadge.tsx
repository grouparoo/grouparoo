import { Badge } from "react-bootstrap";

export default function LockedBadge({
  object,
}: {
  object: { provides?: { source: boolean } };
}) {
  if (!object.provides?.source) return null;

  return (
    <Badge style={{ marginBottom: 20 }} bg="primary">
      source
    </Badge>
  );
}
