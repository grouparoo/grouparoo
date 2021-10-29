import { Badge } from "react-bootstrap";
import EnterpriseLink from "../enterpriseLink";

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
      <EnterpriseLink href={`/model/${modelId}/edit`}>
        <a style={{ color: "white" }}>{modelName}</a>
      </EnterpriseLink>
    </Badge>
  );
}
