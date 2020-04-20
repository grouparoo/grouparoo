import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button, CardDeck } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "../../appIcon";
import Selector from "../../selector";

export default function ({ apiVersion, errorHandler }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [app, setApp] = useState({ type: "" });

  useEffect(() => {
    loadOptions();
  }, []);

  async function loadOptions() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/appOptions`);
    setLoading(false);
    if (response?.types) {
      setTypes(response.types);
    }
  }

  async function create(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/app`, app);
    setLoading(false);
    if (response?.app) {
      return Router.push(`/app/${response.app.guid}`);
    }
  }

  return (
    <>
      <Form id="form" onSubmit={create}>
        <CardDeck>
          {types.map((_app, idx) => {
            const className =
              _app.name === app.type ? "button-color-selected" : "button-color";
            return (
              <div
                onClick={() => {
                  const __app = Object.assign({}, app);
                  __app.type = _app.name;
                  setApp(__app);
                }}
              >
                <Selector
                  src={_app.plugin.icon}
                  name={_app.name}
                  size={90}
                  iconClassName="card-img"
                  className={className}
                  key={`card-${idx}`}
                ></Selector>
              </div>
            );
          })}
        </CardDeck>
        <br />
        <Button variant="primary" type="submit" active={!loading}>
          Continue
        </Button>
      </Form>
    </>
  );
}
