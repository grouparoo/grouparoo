import { Badge } from "react-bootstrap";
import EnterpriseLink from "../GrouparooLink";

export default function AppBadge({
  appName,
  appId,
  marginBottom,
}: {
  appName: string;
  appId: string;
  marginBottom?: number;
}) {
  return (
    <Badge style={{ marginBottom: marginBottom ?? 20 }} bg="secondary">
      <EnterpriseLink href={`/app/${appId}/edit`}>
        <a style={{ color: "white" }}>{appName}</a>
      </EnterpriseLink>
    </Badge>
  );
}
