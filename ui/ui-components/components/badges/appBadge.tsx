import { Badge } from "react-bootstrap";
import EnterpriseLink from "../enterpriseLink";

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
    <Badge style={{ marginBottom: marginBottom ?? 20 }} variant="secondary">
      <EnterpriseLink href="/app/[id]/edit" as={`/app/${appId}/edit`}>
        <a style={{ color: "white" }}>{appName}</a>
      </EnterpriseLink>
    </Badge>
  );
}
