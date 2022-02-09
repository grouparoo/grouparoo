import { string } from "prop-types";
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
  onChange?: (selected: TypeaheadOption[]) => void;
}

interface TypeaheadOption {
  key: string;
  description?: string;
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
                description: option?.descriptions?.[idx],
              } as TypeaheadOption;
            })}
            placeholder={placeholder}
            renderMenuItemChildren={(
              opt: TypeaheadOption,
              _props,
              idx: number
            ) => {
              return [
                <span key={`opt-${idx}-key`}>
                  {opt.key}
                  <br />
                </span>,
                <small key={`opt-${idx}-description`} className="text-small">
                  {opt.description ? (
                    <em>Description: {opt.description}</em>
                  ) : null}
                </small>,
              ];
            }}
            defaultSelected={defaultSelected}
            onChange={(selected: TypeaheadOption[]) => {
              reactHookFormOnChange(selected[0]?.key);
              onChange?.(selected);
            }}
          />
        );
      }}
    />
  );
};
