import { useApi } from "../../contexts/api";
import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form, Card } from "react-bootstrap";
import LoadingButton from "../../components/LoadingButton";
import { Actions } from "../../utils/apiData";
import { sessionHandler, successHandler } from "../../eventHandlers";
import { generateClient } from "../../client/client";
import { withServerErrorHandler } from "../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { setting } = await client.request<Actions.SettingCoreClusterName>(
    "get",
    `/setting/core/cluster-name`
  );
  return { props: { setting } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  setting,
}) => {
  const router = useRouter();
  const { client } = useApi();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response: Actions.TeamInitialize = await client.request(
      "post",
      `/team/initialize`,
      data
    );
    if (response?.team) {
      const response: Actions.SessionCreate = await client.request(
        "post",
        `/session`,
        data
      );

      if (response?.teamMember) {
        window.localStorage.setItem("session:csrfToken", response.csrfToken);
        sessionHandler.set(response.teamMember);
        successHandler.set({ message: "Welcome to Grouparoo" });
        router.push(`/setup`);
      }
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Initialize Team</title>
      </Head>

      <h1>Initialize First Team</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Card.Body>
            <Card.Title>About Your Company</Card.Title>
            <p>
              The company or organization are you configuring Grouparoo for.
            </p>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                autoFocus
                required
                type="text"
                name="companyName"
                placeholder={setting.locked ? setting.value : ""}
                disabled={loading || setting.locked ? true : false}
                {...register("companyName")}
              />
              <Form.Control.Feedback type="invalid">
                Company Name is required
              </Form.Control.Feedback>
            </Form.Group>
          </Card.Body>
        </Card>

        <br />

        <Card>
          <Card.Body>
            <Card.Title>About You</Card.Title>
            <p>
              The first account you use to sign in and manage access for others.
            </p>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                {...register("firstName")}
                placeholder=""
                disabled={loading}
              />
              <Form.Control.Feedback type="invalid">
                First Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                placeholder=""
                disabled={loading}
                {...register("lastName")}
              />
              <Form.Control.Feedback type="invalid">
                Last Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder=""
                disabled={loading}
                {...register("email")}
              />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder=""
                disabled={loading}
                {...register("password")}
              />
              <Form.Control.Feedback type="invalid">
                A password is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="checkbox"
                name="subscribed"
                label={`Subscribe to the Grouparoo Newsletter`}
                disabled={loading}
                defaultChecked
                {...register("subscribed")}
              />
            </Form.Group>
            <p>
              <a
                href="https://www.grouparoo.com/legal/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </p>
          </Card.Body>
        </Card>

        <br />

        <LoadingButton variant="primary" type="submit" loading={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
};

export default Page;
