import { useCallback, useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { errorHandler } from "../../eventHandlers";
import { ApiHook } from "../../hooks/useApi";
import { Actions, Models } from "../../utils/apiData";
import LoadingButton from "../LoadingButton";

const getInputType = (type?: Models.PropertyType["type"]): string => {
  switch (type) {
    case "float":
    case "integer":
      return "number";
    default:
      return "text";
  }
};

interface Props {
  modelId: string;
  properties: Models.PropertyType[];
  onSubmitComplete: (record?: Models.GrouparooRecordType) => void;
  execApi: ApiHook["execApi"];
}

const AddSampleRecordForm: React.FC<Props> = ({
  modelId,
  execApi,
  onSubmitComplete,
  properties,
}) => {
  const { handleSubmit, register } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const propertiesWithPrimaryKey = useMemo(
    () =>
      properties.filter((property) => property.unique && property.isPrimaryKey),
    [properties]
  );

  const [selectedUniquePropertyValue, setSelectedUniquePropertyValue] =
    useState(propertiesWithPrimaryKey?.[0]?.key || "");

  const selectedUniqueProperty = useMemo(() => {
    return propertiesWithPrimaryKey?.find(
      ({ key }) => key === selectedUniquePropertyValue
    );
  }, [selectedUniquePropertyValue]);

  const onSelectUniqueProperty: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSelectedUniquePropertyValue(event.target.value);
  };

  const onSubmit: Parameters<typeof handleSubmit>[0] = useCallback(
    async (data) => {
      setSubmitting(true);
      const response = await execApi<Actions.RecordCreate>("post", `/record`, {
        modelId,
        properties: { [data.uniqueProperty]: data.value },
      });
      setSubmitting(false);
      if (!response.record) {
        errorHandler.set({
          message: `Could not add Sample Record.
          Record with ${data.uniqueProperty} = ${data.value} may not exist or may be already added.`,
        });
      }
      onSubmitComplete(response?.record);
    },
    [modelId]
  );

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Unique Property</Form.Label>
        <Form.Control
          name="uniqueProperty"
          as="select"
          ref={register}
          disabled={submitting}
          value={selectedUniquePropertyValue}
          onChange={onSelectUniqueProperty}
        >
          {propertiesWithPrimaryKey.map((rule) => (
            <option key={`rule-${rule.key}`} value={rule.key}>
              {rule.key}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Value</Form.Label>
        <Form.Control
          autoFocus
          required
          type={getInputType(selectedUniqueProperty?.type)}
          name="value"
          ref={register}
          disabled={submitting}
        />
        <Form.Control.Feedback type="invalid">
          Value is required
        </Form.Control.Feedback>
      </Form.Group>

      <LoadingButton variant="primary" type="submit" disabled={submitting}>
        Submit
      </LoadingButton>
    </Form>
  );
};

export default AddSampleRecordForm;
