import { Form } from "react-bootstrap";

export default function GrouparooDatePicker({
  selected = new Date(),
  onChange,
}: {
  selected: Date;
  onChange: Function;
}) {
  const selectedString = selected ? selected.toISOString().split("T")[0] : "";

  return (
    <Form.Control
      type="date"
      value={selectedString}
      placeholder="yyyy-mm-dd"
      onChange={(event) => {
        onChange(new Date(event.target.value));
      }}
    />
  );
}
