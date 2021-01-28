import { Component } from "react";
import DatePicker from "react-datepicker";

class DatePickerInput extends Component<{
  onClick: (e) => {};
  value: string;
}> {
  render() {
    const { onClick, value } = this.props;

    return (
      <input
        type="text"
        className="form-control"
        style={{ width: 275 }}
        onClick={onClick}
        value={value}
        onChange={() => {}} // will be overwritten, but needed to suppress warnings
      />
    );
  }
}

export default function GrouparooDatePicker({ selected, onChange }) {
  return (
    <DatePicker
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
      selected={selected}
      onChange={onChange}
      // @ts-ignore
      customInput={<DatePickerInput />}
    />
  );
}
