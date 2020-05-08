import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";
import SelectorList from "../../selectorList";

export default function ({ apiVersion, errorHandler }) {
  const [app, setApp] = useState({ type: "" });
  const [loading, setLoading] = useState(false);
  const [appTypes, setAppTypes] = useState([]);
  const { execApi } = useApi(errorHandler);

  useEffect(() => {
    loadOptions();
  }, []);

  async function loadOptions() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/appOptions`);
    setLoading(false);
    if (response?.types) {
      setAppTypes(response.types.filter((app) => app.addible !== false));
    }
  }

  async function create(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/app`, app);
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
        <SelectorList onClick={updateApp} selectedItem={app} items={appTypes} />
        <br />
        <Button variant="primary" type="submit" active={!loading}>
          Continue
        </Button>
      </Form>
    </>
  );
}
