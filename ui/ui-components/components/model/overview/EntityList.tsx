import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Fade,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useGrouparooModelContext } from "../../../contexts/grouparooModel";
import { Models } from "../../../utils/apiData";
import { formatName } from "../../../utils/formatName";

const renderNameList = function <T extends Models.EntityTypes>(
  items: T[],
  itemType: string,
  model: Models.GrouparooModelType
): React.ReactNode {
  const lastIndex = items.length - 1;
  const page =
    itemType === "schedule"
      ? "schedule"
      : itemType === "source"
      ? "overview"
      : "edit";
  const itemPath = itemType === "schedule" ? "source" : itemType;

  return items.map((item, index) => {
    const itemId =
      itemType === "schedule"
        ? (item as Models.ScheduleType).sourceId
        : item.id;
    return (
      <Fragment key={index}>
        <Link href={`/model/${model.id}/${itemPath}/${itemId}/${page}`}>
          <a>{formatName(item)}</a>
        </Link>
        {index === lastIndex ? "" : ", "}
      </Fragment>
    );
  });
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
  const [expanded, isExpanded] = useState(false);

  if (!items?.length) return null;

  return (
    <>
      <Row>
        <Col md={10}>
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
        <Col md={2} className="text-right">
          <Button
            variant="link"
            size="sm"
            className="p-0"
            onClick={() => isExpanded(!expanded)}
          >
            {expanded ? "Less" : "More"} details{" "}
            <FontAwesomeIcon icon={`caret-${expanded ? "up" : "down"}`} />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EntityList;
