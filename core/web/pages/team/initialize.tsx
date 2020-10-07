import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "../../components/loadingButton";

export default function TeamInitializePage(props) {
  const { errorHandler, successHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/team/initialize`, data);
    if (response?.team) {
      successHandler.set({ message: "Team Created" });
      router.push(`/session/sign-in`);
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Initialize Team</title>
      </Head>

      <h1>Initialize first Team</h1>
      <p>
        You are creating an account for yourself and the "Administrators" team.
      </p>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="firstName"
            ref={register}
            placeholder="First Name"
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
            placeholder="Last Name"
            disabled={loading}
            ref={register}
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
            placeholder="Email Address"
            disabled={loading}
            ref={register}
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
            placeholder="Password"
            disabled={loading}
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            A password is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            name="subscribe"
            label={`Subscribe to Grouparoo Newsletter`}
            disabled={loading}
            defaultChecked
            ref={register}
          />
        </Form.Group>

        <br />

        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}
