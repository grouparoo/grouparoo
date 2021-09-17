import { Badge } from "react-bootstrap";
import Link from "next/link";

export default function ModelBadge({
  modelName,
  modelId,
  marginBottom,
}: {
  modelName: string;
  modelId: string;
  marginBottom?: number;
}) {
  return (
    <Badge style={{ marginBottom: marginBottom ?? 20 }} variant="primary">
      <Link href="/model/[id]/edit" as={`/model/${modelId}/edit`}>
        <a style={{ color: "white" }}>{modelName}</a>
      </Link>
    </Badge>
  );
}
