import React from "react"; // needed because this is also used by a plugin
import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "../LoadingButton";
import { useForm } from "react-hook-form";
import { Actions } from "../../utils/apiData";
import { SessionHandler } from "../../utils/sessionHandler";

export const createSession = async (
  data,
  sessionHandler: SessionHandler,
  execApi
) => {
  const response: Actions.SessionCreate = await execApi(
    "post",
    `/session`,
    data
  );
  if (response?.teamMember) {
    window.localStorage.setItem("session:csrfToken", response.csrfToken);
    sessionHandler.set(response.teamMember);
    return response?.teamMember;
  }
};

export default function SignInForm(props) {
  const { errorHandler, successHandler, sessionHandler, UseApi } = props;
  const { execApi } = UseApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { nextPage } = router.query;

  const onSubmit = async (data) => {
    setLoading(true);
    const teamMember = await createSession(data, sessionHandler, execApi);
    setLoading(false);
    if (teamMember) {
      successHandler.set({ message: "Welcome Back!" });
      if (nextPage) {
        router.push(nextPage.toString());
      } else {
        const { setupSteps } = await getSetupSteps();
        const isSetupComplete = setupSteps.every((step) => step.complete);
        if (isSetupComplete) {
          router.push("/dashboard");
        } else {
          router.push("/setup");
        }
      }
    }
  };

  async function getSetupSteps() {
    const { setupSteps }: Actions.SetupStepsList = await execApi(
      "get",
      `/setupSteps`
    );
    return { setupSteps };
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

      <LoadingButton loading={loading} variant="primary" type="submit">
        Sign In
      </LoadingButton>
    </Form>
  );
}
