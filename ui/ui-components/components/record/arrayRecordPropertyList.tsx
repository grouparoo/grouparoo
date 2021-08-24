import { Button } from "react-bootstrap";
import { useState } from "react";
import { formatTimestamp } from "../../utils/formatTimestamp";

export default function ArrayRecordPropertyList({
  type,
  values,
}: {
  type: string;
  values: Array<string | number | boolean | Date>;
}) {
  const [expanded, setExpanded] = useState(false);
  if (!values || values.length === 0) return null;

  const formattedValues = values.map((value) => {
    if (value === true || value === false) {
      // return <input type="checkbox" checked={value} readOnly />;
      return value.toString();
    } else if (type === "date") {
      return formatTimestamp(value);
    } else {
      return value;
    }
  });

  if (formattedValues.length <= 10) {
    return <span>{formattedValues.join(", ")}</span>;
  }

  const firstChunk = formattedValues.slice(0, 10);
  const lastChunk = formattedValues.slice(9);

  return (
    <>
      {firstChunk.join(", ")}
      {expanded ? (
        lastChunk.join(", ")
      ) : (
        <>
          &nbsp;
          <Button
            size="sm"
            variant="clear"
            onClick={() => setExpanded(!expanded)}
          >
            <u>(+ {lastChunk.length} more)</u>
          </Button>
        </>
      )}
    </>
  );
}
