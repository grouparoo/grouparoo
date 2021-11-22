import Link from "next/link";
import EnterpriseLink from "../../GrouparooLink";
import { formatName } from "../../../utils/formatName";
import StateBadge from "../../badges/StateBadge";

type Entity = Parameters<typeof formatName>[0];

interface Props {
  entity: Entity;
  href?: string;
  linkComponent?: typeof Link | typeof EnterpriseLink;
}

const EntityInfoHeader: React.FC<Props> = ({
  entity,
  href,
  linkComponent: LinkComponent = Link,
}) => {
  const nameElement = <strong>{formatName(entity)}</strong>;
  const nameLink = href ? (
    <LinkComponent href={href}>
      <a>{nameElement}</a>
    </LinkComponent>
  ) : (
    nameElement
  );

  return (
    <div>
      {nameLink} <StateBadge state={entity.state} marginBottom={0} />
    </div>
  );
};

export default EntityInfoHeader;
