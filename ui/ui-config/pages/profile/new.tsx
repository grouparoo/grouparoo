import Head from "next/head";
import { useState } from "react";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "@grouparoo/ui-components/components/loadingButton";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

export default function NewProfile(props) {
  const { errorHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    console.log(data);
    const response: Actions.ProfileCreate = await execApi(
      "post",
      `/profile`,
      Object.assign({}, { properties: { [data.uniqueProperty]: data.value } })
    );
    if (response?.profile) {
      router.push(`/profile/[id]/edit`, `/profile/${response.profile.id}/edit`);
    } else {
      setLoading(false);
    }
  }

  const uniqueDirectlyMappedProfileProperties = props.properties.filter(
    (rule) => rule.unique && rule.directlyMapped
  );

  return (
    <>
      <Head>
        <title>Grouparoo: New Profile</title>
      </Head>

      <h1>Add Sample Profile</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Unique Property</Form.Label>
          <Form.Control
            name="uniqueProperty"
            as="select"
            ref={register}
            disabled={loading ? true : false}
          >
            {uniqueDirectlyMappedProfileProperties.map((rule) => (
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

NewProfile.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { properties } = await execApi("get", `/properties`);

  return { properties };
};
