import { useApi } from "../../../ui-components/contexts/api";
import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import LoadingButton from "@grouparoo/ui-components/components/LoadingButton";

export default function SignInPage(props) {
  const {
    clusterName,
  }: {
    clusterName: any;
  } = props;
  const { client } = useApi();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { nextPage } = router.query;

  const onSubmit = async (data) => {
    setLoading(true);
    const response: Actions.ConfigUserCreate = await client.request(
      "post",
      "/config/user",
      data
    );

    if (response?.user?.email) {
      if (nextPage) {
        router.push(nextPage.toString());
      } else {
        const { setupSteps } = await getSetupSteps();
        const isSetupComplete = setupSteps.every((step) => step.complete);
        if (isSetupComplete) {
          const {
            models: [model],
          } = await client.request<Actions.ModelsList>("get", "/models", {
            limit: 1,
            order: [["name", "asc"]],
          });
          router.push(model ? `/model/${model.id}/overview` : "/");
        } else {
          router.push("/setup");
        }
      }
    }

    setLoading(false);
  };

  async function getSetupSteps() {
    const { setupSteps }: Actions.SetupStepsList = await client.request(
      "get",
      `/setupSteps`
    );
    return { setupSteps };
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <div style={{ width: "100%", height: "100%" }}>
        <h1>Register</h1>

        <Row className="border-between-columns">
          <Col>
            <Form id="form" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  disabled={loading}
                  autoFocus
                  required
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  ref={register}
                  defaultValue={clusterName.default ? "" : clusterName.value}
                />
                <Form.Control.Feedback type="invalid">
                  Company name is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  disabled={loading}
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  ref={register}
                />
                <Form.Control.Feedback type="invalid">
                  Email is required
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  name="subscribed"
                  label={`Subscribe to the Grouparoo Newsletter`}
                  defaultChecked
                  ref={register}
                  disabled={loading}
                />
              </Form.Group>

              <LoadingButton disabled={loading} variant="primary" type="submit">
                Register
              </LoadingButton>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}
