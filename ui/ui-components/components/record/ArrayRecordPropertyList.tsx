import { Button } from "react-bootstrap";
import { Fragment, useState } from "react";
import { formatTimestamp } from "../../utils/formatTimestamp";

const limit = 5;

export default function ArrayRecordPropertyList({
  type,
  values,
  invalidValue,
  invalidReason,
}: {
  type: string;
  values: (string | number | boolean | Date)[];
  invalidValue: string;
  invalidReason: string;
}) {
  const [expanded, setExpanded] = useState(false);
  if (!values || values.length === 0) return null;

  let formattedValues = values.map((value) => {
    if (value === null) {
      return <code>null</code>;
    } else if (value === true || value === false) {
      // return <input type="checkbox" checked={value} readOnly />;
      return <>{value.toString()}</>;
    } else if (type === "date") {
      return <>{formatTimestamp(value)}</>;
    } else {
      return <>{value}</>;
    }
  });

  return (
    <>
      {formattedValues
        .filter((V, idx) => (idx < limit || expanded ? true : false))
        .map((V, idx) => (
          <Fragment key={`id=${idx}`}>
            {V}
            <br />
          </Fragment>
        ))}

      {invalidValue ? (
        <span className="text-danger">
          invalid value: {invalidValue} | {invalidReason}
        </span>
      ) : null}

      {formattedValues.length > limit && !expanded ? (
        <Button
          size="sm"
          variant="clear"
          onClick={() => setExpanded(!expanded)}
        >
          <u>... more</u>
        </Button>
      ) : null}
    </>
  );
}
