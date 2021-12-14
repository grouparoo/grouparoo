import Link from "next/link";
import { Models } from "../../../utils/apiData";
import EnterpriseLink from "../../GrouparooLink";
import { formatName } from "../../../utils/formatName";
import StateBadge from "../../badges/StateBadge";

interface Props {
  entity: Models.EntityTypes;
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
      {nameLink}{" "}
      <StateBadge
        state={entity.state}
        marginBottom={0}
        style={{
          verticalAlign: "middle",
          marginTop: "-0.25em",
        }}
      />
    </div>
  );
};

export default EntityInfoHeader;
