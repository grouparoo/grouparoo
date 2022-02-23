import { useCallback, useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useApi } from "../../contexts/api";
import { useGrouparooModel } from "../../contexts/grouparooModel";
import { errorHandler } from "../../eventHandlers";
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
  properties: Models.PropertyType[];
  onSubmitComplete: (
    record: Models.GrouparooRecordType,
    groups: Models.GroupType[],
    destinations: Models.DestinationType[]
  ) => void;
}

const AddSampleRecordForm: React.FC<Props> = ({
  onSubmitComplete,
  properties,
}) => {
  const {
    model: { id: modelId },
  } = useGrouparooModel();
  const { handleSubmit, register } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const { client } = useApi();

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
  }, [propertiesWithPrimaryKey, selectedUniquePropertyValue]);

  const onSelectUniqueProperty: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSelectedUniquePropertyValue(event.target.value);
  };

  const onSubmit: Parameters<typeof handleSubmit>[0] = useCallback(
    async (data) => {
      setSubmitting(true);
      const response = await client.request<Actions.RecordCreate>(
        "post",
        `/record`,
        {
          modelId,
          properties: { [data.uniqueProperty]: data.value },
        }
      );
      setSubmitting(false);

      if (response?.record) {
        onSubmitComplete(
          response.record,
          response.groups,
          response.destinations
        );
      } else {
        errorHandler.set({
          message: `Could not add Sample Record.
          Record with ${data.uniqueProperty} = ${data.value} may not exist or may be already added.`,
        });
      }
    },
    [client, modelId, onSubmitComplete]
  );

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Unique Property</Form.Label>
        <Form.Control
          name="uniqueProperty"
          as="select"
          disabled={submitting}
          value={selectedUniquePropertyValue}
          {...register("uniqueProperty", {
            onChange: onSelectUniqueProperty,
          })}
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
          name="value"
          autoFocus
          required
          type={getInputType(selectedUniqueProperty?.type)}
          disabled={submitting}
          {...register("value")}
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
