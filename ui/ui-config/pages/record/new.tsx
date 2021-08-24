import Head from "next/head";
import { useState } from "react";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form, Button, Alert } from "react-bootstrap";
import LoadingButton from "@grouparoo/ui-components/components/loadingButton";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";

export default function NewRecord(props) {
  const {
    errorHandler,
    properties,
  }: {
    errorHandler: ErrorHandler;
    properties: Actions.PropertiesList["properties"];
  } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  if (properties.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Properties added yet.
          <br />
          <br />
          <Button size="sm" href="/properties">
            Add a Property
          </Button>
        </Alert>
      </>
    );
  }

  async function onSubmit(data) {
    setLoading(true);
    const response: Actions.RecordCreate = await execApi(
      "post",
      `/record`,
      Object.assign({}, { properties: { [data.uniqueProperty]: data.value } })
    );
    if (response?.record) {
      router.push(`/record/[id]/edit`, `/record/${response.record.id}/edit`);
    } else {
      setLoading(false);
    }
  }

  const uniqueDirectlyMappedRecordProperties = properties.filter(
    (rule) => rule.unique && rule.directlyMapped
  );

  return (
    <>
      <Head>
        <title>Grouparoo: New Record</title>
      </Head>

      <h1>Add Sample Record</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Unique Property</Form.Label>
          <Form.Control
            name="uniqueProperty"
            as="select"
            ref={register}
            disabled={loading ? true : false}
          >
            {uniqueDirectlyMappedRecordProperties.map((rule) => (
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
            disabled={loading}
          />
          <Form.Control.Feedback type="invalid">
            Value is required
          </Form.Control.Feedback>
        </Form.Group>

        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

NewRecord.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { properties }: Actions.PropertiesList = await execApi(
    "get",
    `/properties`
  );

  return { properties };
};
