import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Fade,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import EnterpriseLink from "../../GrouparooLink";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import { Models } from "../../../utils/apiData";
import { formatName } from "../../../utils/formatName";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import StateBadge from "../../badges/StateBadge";
import SeparatedItems from "../SeparatedItems";

const getPageForItemType = (itemType: string) => {
  switch (itemType) {
    case "schedule":
      return "schedule";
    case "source":
      return "overview";
    case "group": {
      return grouparooUiEdition() === "community" ? "members" : "rules";
    }
    default:
      return "edit";
  }
};

const renderNameList = function <T extends Models.EntityTypes>(
  items: T[],
  itemType: string,
  model: Models.GrouparooModelType
): React.ReactNode {
  const page = getPageForItemType(itemType);
  const itemPath = itemType === "schedule" ? "source" : itemType;
  const style: React.CSSProperties = {
    verticalAlign: "middle",
    marginTop: "-0.25em",
    marginRight: 0,
    marginBottom: 0,
  };

  const links = items.map((item) => {
    const itemId =
      itemType === "schedule"
        ? (item as Models.ScheduleType).sourceId
        : item.id;
    const LinkComponent = itemType === "group" ? Link : EnterpriseLink;
    return (
      <>
        <LinkComponent
          href={`/model/${model.id}/${itemPath}/${itemId}/${page}`}
        >
          <a>{formatName(item)}</a>
        </LinkComponent>
        {item.state !== "ready" && (
          <StateBadge state={item.state} style={style} />
        )}
      </>
    );
  });

  return <SeparatedItems items={links} separator="," />;
};

interface Props<T extends Models.EntityTypes> {
  items: T[];
  itemType: "source" | "destinaton" | "schedule" | "group";
  renderItem: (item: T, index: number) => React.ReactNode;
}

const EntityList = function <T extends Models.EntityTypes>({
  items,
  itemType,
  renderItem,
}: React.PropsWithChildren<Props<T>>): JSX.Element {
  const model = useGrouparooModelContext();
  const [expanded, setExpanded] = useState(false);

  if (!items?.length) return null;

  return (
    <Row>
      <Col md={9}>
        <Collapse in={expanded}>
          <ListGroup className="list-group-flush">
            {items.map((item, index) => (
              <ListGroupItem key={index} className="px-0">
                {renderItem(item, index)}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Collapse>
        <Fade in={!expanded}>
          <div style={{ position: expanded ? "absolute" : "relative" }}>
            {renderNameList(items, itemType, model)}
          </div>
        </Fade>
      </Col>
      <Col md={3} className="text-right">
        <Button
          variant="link"
          size="sm"
          className="p-0"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Less" : "More"} details{" "}
          <FontAwesomeIcon icon={`caret-${expanded ? "up" : "down"}`} />
        </Button>
      </Col>
    </Row>
  );
};

export default EntityList;
