import { Badge } from "react-bootstrap";

export default function LockedBadge({
  object,
}: {
  object: { locked?: string };
}) {
  if (!object.locked || object.locked == "") return null;

  return (
    <Badge style={{ marginBottom: 20 }} bg="light">
      Locked ({object.locked})
    </Badge>
  );
}
