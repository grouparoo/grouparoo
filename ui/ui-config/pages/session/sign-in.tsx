import { useState } from "react";
import { Row, Col, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

import LoadingButton from "@grouparoo/ui-components/components/loadingButton";

export default function SignInPage(props) {
  const { clusterName, errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { nextPage } = router.query;

  const onSubmit = async (data) => {
    setLoading(true);
    const response: Actions.ConfigUserCreate = await execApi(
      "post",
      "/config/user",
      data
    );
    setLoading(false);

    if (response?.user?.email) {
      router.push(nextPage ? nextPage.toString() : "/");
    }
  };

  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <div style={{ width: "100%", height: "100%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Image
              style={{ maxHeight: 50, margin: 40 }}
              src="/public/images/logo/logo-and-wordmark-black-words.svg"
            />
            <br />
            <h2>Sync, Segment, and Send your Product Data Everywhere</h2>
            <p>
              Grouparoo is open source data infrastructure to keep customer data
              in-sync between your data warehouse and 3rd party tools.
            </p>
            <p>
              Learn more at{" "}
              <a target="_blank" href="https://www.grouparoo.com">
                www.grouparoo.com
              </a>
            </p>
            <br />
          </Col>
        </Row>
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
                  defaultValue={setting.default ? "" : setting.clusterName}
                />
                <Form.Control.Feedback type="invalid">
                  Company name is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  disabled={loading}
                  autoFocus
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

SignInPage.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const setting: Actions.SettingClusterNameView = await execApi(
    "get",
    `/settings/clusterName`
  );
  return { setting };
};
