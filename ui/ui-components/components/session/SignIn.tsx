import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { Form, Row, Col, Button, Modal, ButtonGroup } from "react-bootstrap";
import LoadingButton from "../LoadingButton";
import { useForm } from "react-hook-form";
import { Actions, OAuth, Models } from "../../utils/apiData";
import { UseApi } from "../../hooks/useApi";
import Loader from "../Loader";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";
import { SessionHandler } from "../../utils/sessionHandler";

export default function SignInForm(props) {
  const {
    errorHandler,
    successHandler,
    sessionHandler,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    sessionHandler: SessionHandler;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingOAuth, setLoadingOAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [providers, setProviders] = useState<OAuth.oAuthProviderType[]>([]);
  const [loadingOauthProviders, setLoadingOauthProviders] = useState(false);
  const [oAuthRequest, setOAuthRequest] =
    useState<Models.OAuthRequestType>(null);
  const { nextPage, requestId } = router.query;

  const createSession = async (
    arg: Record<string, any>,
    type: "password" | "requestId"
  ) => {
    const response: Actions.SessionCreate = await execApi("post", `/session`, {
      email: arg.email,
      requestId: type === "requestId" ? requestId : undefined,
      password: type === "password" ? arg.password : undefined,
    });
    if (response?.teamMember) {
      window.localStorage.setItem("session:csrfToken", response.csrfToken);
      sessionHandler.set(response.teamMember);
      return response?.teamMember;
    }
  };

  const loadOauthOptions = async () => {
    setLoadingOauthProviders(true);
    const response: Actions.OAuthListProviders = await execApi(
      "get",
      `/oauth/providers`
    );
    if (response.providers) {
      setProviders(response.providers);
    }
    setLoadingOauthProviders(false);
  };

  const startOauthLogin = async (provider: string, type: string) => {
    setLoadingOAuth(true);
    const response: Actions.OAuthClientStart = await execApi(
      "post",
      `/oauth/${provider}/client/start`,
      { type }
    );
    if (response.location) {
      window.location.assign(response.location);
    } else {
      setLoadingOAuth(false);
    }
  };

  const loadOAuthRequest = async () => {
    if (!requestId) return;
    setLoadingOAuth(true);
    const response: Actions.OAuthClientView = await execApi(
      "get",
      `/oauth/client/request/${requestId}/view`
    );

    if (response.oAuthRequest) {
      setOAuthRequest(response.oAuthRequest);
      if (response.oAuthRequest.identities.length === 0) {
        router.replace("/session/sign-in", undefined, { shallow: true });
        errorHandler.set({
          message: `No identities returned from ${response.oAuthRequest.provider}`,
        });
      } else if (response.oAuthRequest.identities.length === 1) {
        onSubmit(response.oAuthRequest.identities[0], "requestId");
      } else {
        setShowModal(true);
      }
    }
    setLoadingOAuth(false);
  };

  const onSubmit = async (
    arg: Models.OAuthRequestType["identities"][number] | Record<string, any>,
    type: "password" | "requestId"
  ) => {
    type === "password" ? setLoadingEmail(true) : setLoadingOAuth(true);
    const teamMember = await createSession(arg, type);
    type === "password" ? setLoadingEmail(false) : setLoadingOAuth(false);
    if (teamMember) {
      successHandler.set({
        message: `Welcome Back${
          teamMember.firstName ? `, ${teamMember.firstName}` : ""
        }!`,
      });
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

  const getSetupSteps = async () => {
    const { setupSteps }: Actions.SetupStepsList = await execApi(
      "get",
      `/setupSteps`
    );
    return { setupSteps };
  };

  useEffect(() => {
    loadOauthOptions();
    loadOAuthRequest();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <h1>Sign In</h1>
        </Col>
      </Row>
      <Row>
        <Col className="border-right">
          <Form
            id="form"
            onSubmit={handleSubmit((data) => onSubmit(data, "password"))}
          >
            <fieldset disabled={loadingEmail || loadingOAuth}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register}
                />
                <Form.Control.Feedback type="invalid">
                  A password is required
                </Form.Control.Feedback>
              </Form.Group>

              <LoadingButton
                loading={loadingEmail}
                variant="primary"
                type="submit"
              >
                Sign In
              </LoadingButton>
            </fieldset>
          </Form>
        </Col>

        <Col style={{ textAlign: "center" }}>
          {loadingOauthProviders ? (
            <>
              <br />
              <br />
              <Loader />
            </>
          ) : null}

          <br />

          {loadingOauthProviders === false && providers.length === 0 ? (
            <p>Could not load OAuth providers</p>
          ) : null}

          <div className="d-flex justify-content-center">
            <ButtonGroup vertical style={{ width: "100%" }}>
              {providers.map((provider) => (
                <Fragment key={`provider-${provider.name}`}>
                  <LoadingButton
                    size="sm"
                    disabled={loadingEmail || loadingOAuth}
                    loading={loadingOAuth}
                    variant="outline-primary"
                    onClick={() => startOauthLogin(provider.name, "user")}
                  >
                    {provider.description}
                    <img
                      style={{ margin: 10, height: 40, width: 40 }}
                      src={provider.icon}
                    />
                  </LoadingButton>
                </Fragment>
              ))}
            </ButtonGroup>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {oAuthRequest ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Select Identity</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ButtonGroup vertical style={{ width: "100%" }}>
                {oAuthRequest.identities.map((identity, idx) => (
                  <Button
                    variant="outline-primary"
                    key={`identity-${idx}`}
                    onClick={() => {
                      setShowModal(false);
                      onSubmit(identity, "requestId");
                    }}
                  >
                    {identity.email}
                  </Button>
                ))}
              </ButtonGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <Modal.Body>
            <Loader />
          </Modal.Body>
        )}
      </Modal>
    </>
  );
}
