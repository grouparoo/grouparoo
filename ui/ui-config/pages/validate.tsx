import Head from "next/head";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { CLIStream } from "../components/cliStream";
import { SuccessHandler } from "../../ui-components/utils/successHandler";
import { ErrorHandler } from "../../ui-components/utils/errorHandler";

export default function ValidatePage(props) {
  const {
    successHandler,
    errorHandler,
  }: { successHandler: SuccessHandler; errorHandler: ErrorHandler } = props;
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
