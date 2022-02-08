import { Typeahead as BootstrapTypeahead } from "react-bootstrap-typeahead";
import { Controller, Control, Path } from "react-hook-form";
import { Actions } from "../utils/apiData";

type PluginOption = (
  | Actions.SourceConnectionOptions
  | Actions.DestinationConnectionOptions
  | Actions.AppOptions
)["options"][string];

type PluginOptionValue = (
  | Actions.SourceView["source"]
  | Actions.DestinationView["destination"]
  | Actions.AppView["app"]
)["options"][string];

interface Props<T> {
  control: Control<T>;
  name: Path<T>;
  option: PluginOption;
  defaultSelected?: PluginOptionValue[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (selected?: { key: string }[]) => void;
}

export const FormTypeahead = <T,>({
  control,
  name,
  disabled,
  required,
  option,
  placeholder,
  defaultSelected,
  onChange,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange: reactHookFormOnChange } }) => {
        return (
          <BootstrapTypeahead
            id="typeahead"
            labelKey="key"
            disabled={disabled}
            inputProps={{ required }}
            options={option?.options.map((k, idx) => {
              return {
                key: k,
                descriptions: option?.descriptions?.[idx],
              };
            })}
            placeholder={placeholder}
            renderMenuItemChildren={(opt, _props, idx) => {
              return [
                <span key={`opt-${idx}-key`}>
                  {opt.key}
                  <br />
                </span>,
                <small key={`opt-${idx}-descriptions`} className="text-small">
                  {opt.descriptions ? (
                    <em>Descriptions: {opt.descriptions.join(", ")}</em>
                  ) : null}
                </small>,
              ];
            }}
            defaultSelected={defaultSelected}
            onChange={(selected) => {
              reactHookFormOnChange(selected[0]?.key);
              onChange?.(selected);
            }}
          />
        );
      }}
    />
  );
};
