import { Form } from "react-bootstrap";
import { useState } from "react";

export default function GrouparooDatePicker({
  selected = new Date(),
  onChange,
}: {
  selected: Date;
  onChange: Function;
}) {
  const [selectedString, setSelectedString] = useState(
    selected ? selected.toISOString().split("T")[0] : ""
  );

  const pattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}";

  function formatInput(s) {
    return s.replace(/[^0-9-,]+/g, "");
  }

  return (
    <Form.Control
      type={"date"}
      value={selectedString}
      placeholder="yyyy-mm-dd"
      pattern={pattern}
      onChange={(event) => {
        const value = event.target.value;
        setSelectedString(formatInput(value));
        if (value.match(new RegExp(pattern))) {
          onChange(new Date(value));
        }
      }}
    />
  );
}
