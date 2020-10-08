import React from "react"; // needed because this is also used by a plugin
import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "../loadingButton";
import { useForm } from "react-hook-form";
import { Models } from "../../utils/apiData";

export default function SignInForm(props) {
  const { errorHandler, successHandler, sessionHandler, useApi } = props;
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { nextPage } = router.query;

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await execApi("post", `/session`, data);
    if (response?.teamMember) {
      window.localStorage.setItem("session:csrfToken", response.csrfToken);
      sessionHandler.set(response.teamMember);
      successHandler.set({ message: "Welcome Back!" });
      if (nextPage) {
        router.push(nextPage.toString());
      } else {
        const { setupSteps, toDisplay } = await getSetupSteps();
        const isSetupComplete = setupSteps.every((step) => step.complete);
        if (isSetupComplete || !toDisplay) {
          router.push("/dashboard");
        } else {
          router.push("/setup");
        }
      }
    } else {
      setLoading(false);
    }
  };

  async function getSetupSteps() {
    const {
      setupSteps,
      toDisplay,
    }: {
      setupSteps: Models.SetupStepType[];
      toDisplay: boolean;
    } = await execApi("get", `/setupSteps`);
    return { setupSteps, toDisplay };
  }

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
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
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          disabled={loading}
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
        />
        <Form.Control.Feedback type="invalid">
          A password is required
        </Form.Control.Feedback>
      </Form.Group>

      <LoadingButton disabled={loading} variant="primary" type="submit">
        Sign In
      </LoadingButton>
    </Form>
  );
}
