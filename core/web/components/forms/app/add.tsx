import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";
import SelectorList from "../../selectorList";

export default function ({ errorHandler, types }) {
  const { execApi } = useApi(errorHandler);
  const [app, setApp] = useState({ type: "" });
  const [loading, setLoading] = useState(false);

  async function create(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("post", `/app`, app);
    setLoading(false);
    if (response?.app) {
      return Router.push("/app/[guid]", `/app/${response.app.guid}`);
    }
  }

  function updateApp(clickedOnButton) {
    setApp({ type: clickedOnButton.name });
  }

  return (
    <>
      <Form id="form" onSubmit={create}>
        <SelectorList onClick={updateApp} selectedItem={app} items={types} />
        <br />
        <Button variant="primary" type="submit" active={!loading}>
          Continue
        </Button>
      </Form>
    </>
  );
}
