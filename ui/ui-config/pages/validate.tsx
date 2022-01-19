import Head from "next/head";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import {
  errorHandler,
  successHandler,
} from "@grouparoo/ui-components/eventHandlers";
import { CLIStream } from "../components/cliStream";

export default function ValidatePage(props) {
  const [loading, setLoading] = useState(false);
  const { execApi } = UseApi(props, errorHandler);

  async function validate() {
    setLoading(true);
    const response: Actions.ConfigValidate = await execApi(
      "post",
      `/config/validate`
    );
    setLoading(false);
    if (response.success) {
      successHandler.set({ message: "Validated!" });
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo</title>
      </Head>

      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1>Config / Validate</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button disabled={loading} onClick={() => validate()}>
            Validate
          </Button>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
          <CLIStream />
        </Col>
      </Row>
    </>
  );
}
