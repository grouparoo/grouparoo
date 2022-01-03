import { Badge } from "react-bootstrap";

export default function LockedBadge({
  object,
}: {
  object: { provides?: { destination: boolean } };
}) {
  if (!object.provides?.destination) return null;

  return (
    <Badge style={{ marginBottom: 20 }} bg="info">
      destination
    </Badge>
  );
}
