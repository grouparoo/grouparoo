import { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import { Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import { useApi } from "../hooks/useApi";

export default function ({ apiVersion, errorHandler }) {
  const { execApi } = useApi(errorHandler);
  const [CTALink, setCTALink] = useState("/session/sign-in");
  const [CTAMessage, setCTAMessage] = useState("Sign In");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { navigation, navigationMode } = await execApi(
      "get",
      `/api/${apiVersion}/navigation`
    );
    if (navigationMode === "authenticated") {
      setCTAMessage("View Dashboard");
      setCTALink("/dashboard");
    } else if (
      navigation.bottomMenuItems[0] &&
      navigation.bottomMenuItems[0].href === "/team/initialize"
    ) {
      setCTAMessage("Create Team");
      setCTALink("/team/initialize");
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <Jumbotron>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Image style={{ maxHeight: 200 }} src="/images/logo/logo.svg" />
            <br />
            <br />
            <h1>Grouparoo</h1>
            <p>Achieve Marketing Autonomy</p>
          </Col>
        </Row>
      </Jumbotron>

      <div style={{ textAlign: "center" }}>
        <Button
          variant="success"
          onClick={() => {
            Router.push(CTALink);
          }}
        >
          {CTAMessage}
        </Button>
      </div>
    </>
  );
}
