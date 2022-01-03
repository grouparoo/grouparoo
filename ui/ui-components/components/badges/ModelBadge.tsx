import { Badge } from "react-bootstrap";
import EnterpriseLink from "../GrouparooLink";

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
    <Badge style={{ marginBottom: marginBottom ?? 20 }} bg="primary">
      <EnterpriseLink href={`/model/${modelId}/edit`}>
        <a style={{ color: "white" }}>{modelName}</a>
      </EnterpriseLink>
    </Badge>
  );
}
