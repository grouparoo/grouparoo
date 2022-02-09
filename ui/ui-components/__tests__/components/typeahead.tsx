import { fireEvent, render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { FormTypeahead } from "../../components/Typeahead";

describe("FormTypeahead", () => {
  it("should render", async () => {
    const Component = () => {
      const { control } = useForm();
      return (
        <FormTypeahead
          control={control}
          name="city"
          option={{
            type: "typeahead",
            options: ["Austin", "London", "Santo Domingo"],
          }}
        />
      );
    };

    const { container } = render(<Component />);
    expect(container).toMatchSnapshot("basic");
  });

  it("should render with options", async () => {
    const Component = () => {
      const { control } = useForm();
      return (
        <FormTypeahead
          control={control}
          name="city"
          option={{
            type: "typeahead",
            options: ["Austin", "London", "Santo Domingo"],
          }}
        />
      );
    };

    const { container, getByRole } = render(<Component />);

    const input = getByRole("combobox");
    fireEvent.click(input);

    expect(container).toMatchSnapshot();
  });

  it("should render with options and descriptions", async () => {
    const Component = () => {
      const { control } = useForm();
      return (
        <FormTypeahead
          control={control}
          name="city"
          option={{
            type: "typeahead",
            options: ["Austin", "London", "Santo Domingo"],
            descriptions: ["One", "Two", "Three"],
          }}
        />
      );
    };

    const { container, getByRole } = render(<Component />);

    const input = getByRole("combobox");
    fireEvent.click(input);

    expect(container).toMatchSnapshot();
  });

  it("can have a default value", async () => {
    const Component = () => {
      const { control } = useForm();
      return (
        <FormTypeahead
          control={control}
          name="city"
          defaultSelected={["Santo Domingo"]}
          option={{
            type: "typeahead",
            options: ["Austin", "Arlington", "London", "Santo Domingo"],
          }}
        />
      );
    };

    const { getByRole } = render(<Component />);
    const input = getByRole("combobox");
    expect(input).toHaveValue("Santo Domingo");
  });

  it("can be marked as required", async () => {
    const Component = () => {
      const { control } = useForm();
      return (
        <FormTypeahead
          control={control}
          name="city"
          required
          option={{
            type: "typeahead",
            options: ["Austin", "Arlington", "London", "Santo Domingo"],
          }}
        />
      );
    };

    const { getByRole } = render(<Component />);
    const input = getByRole("combobox");
    expect(input).toBeRequired();
  });

  it("should trigger custom onChange", async () => {
    const handleChange = jest.fn();
    const Component = () => {
      const { control } = useForm();
      return (
        <FormTypeahead
          control={control}
          name="city"
          onChange={handleChange}
          option={{
            type: "typeahead",
            options: ["Austin", "Arlington", "London", "Santo Domingo"],
          }}
        />
      );
    };

    const { getByRole, getByLabelText } = render(<Component />);

    const input = getByRole("combobox");
    fireEvent.change(input, { target: { value: "A" } });

    const option = getByLabelText("Arlington");
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith([{ key: "Arlington" }]);
  });
});
