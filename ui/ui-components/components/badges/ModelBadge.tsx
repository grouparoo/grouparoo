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
    <Badge style={{ marginBottom: marginBottom ?? 20 }} variant="primary">
      <EnterpriseLink href={`/model/${modelId}/overview`}>
        <a style={{ color: "white" }}>{modelName}</a>
      </EnterpriseLink>
    </Badge>
  );
}
