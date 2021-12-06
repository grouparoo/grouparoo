import { useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useGrouparooModelContext } from "../../contexts/grouparooModel";
import { ApiHook } from "../../hooks/useApi";
import { Actions, Models } from "../../utils/apiData";
import LoadingButton from "../LoadingButton";

interface Props {
  properties: Models.PropertyType[];
  onSubmitComplete: (record?: Models.GrouparooRecordType) => void;
  execApi: ApiHook["execApi"];
}

const AddSampleRecordForm: React.FC<Props> = ({
  execApi,
  onSubmitComplete,
  properties,
}) => {
  const model = useGrouparooModelContext();
  const { handleSubmit, register } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const propertiesWithPrimaryKey = useMemo(
    () =>
      properties.filter((property) => property.unique && property.isPrimaryKey),
    [properties]
  );

  const onSubmit: Parameters<typeof handleSubmit>[0] = async (data) => {
    setSubmitting(true);
    const response = await execApi<Actions.RecordCreate>("post", `/record`, {
      modelId: model.id,
      properties: { [data.uniqueProperty]: data.value },
    });
    setSubmitting(false);
    onSubmitComplete(response?.record);
  };

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Unique Property</Form.Label>
        <Form.Control
          name="uniqueProperty"
          as="select"
          ref={register}
          disabled={submitting}
        >
          {propertiesWithPrimaryKey.map((rule) => (
            <option key={`rule-${rule.key}`}>{rule.key}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Value</Form.Label>
        <Form.Control
          autoFocus
          required
          type="text"
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
