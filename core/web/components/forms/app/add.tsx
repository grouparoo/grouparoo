import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button, Badge } from "react-bootstrap";
import Router from "next/router";

export default function ({ apiVersion, errorHandler }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [app, setApp] = useState({ name: "", type: "", options: {} });

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

  let typeOptions = [];
  types.forEach((type) => {
    if (app.type === type.name) {
      typeOptions = type.options;
    }
  });

  const update = async (event) => {
    const _app = Object.assign({}, app);
    _app[event.target.id] = event.target.value;
    setApp(_app);
  };

  const updateOption = async (event) => {
    const _app = Object.assign({}, app);
    _app.options[event.target.id] = event.target.value;
    setApp(_app);
  };

  if (types.length > 0 && app.type === "") {
    const _app = Object.assign({}, app);
    _app.type = types[0].name;
    setApp(_app);
  }

  return (
    <>
      <Form id="form" onSubmit={create}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            placeholder="App Name"
            value={app.name}
            onChange={(e) => update(e)}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            value={app.type}
            onChange={(e) => update(e)}
          >
            {types.map((type) => (
              <option key={`type-${type.name}`}>{type.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        {typeOptions.length > 0 ? (
          <>
            <hr />
            <strong>Options for a {app.type} app</strong>
            <br />
            <br />

            {typeOptions.map((opt) => {
              return (
                <Form.Group key={`opt-${opt.key}`} controlId={opt.key}>
                  <Form.Label>
                    {opt.required ? (
                      <>
                        <Badge variant="info">required</Badge>&nbsp;
                      </>
                    ) : null}
                    <code>{opt.key}</code>: <small>{opt.description}</small>
                  </Form.Label>
                  <Form.Control
                    autoFocus
                    required={opt.required}
                    type="text"
                    placeholder="..."
                    value={app.options[opt.key] || ""}
                    onChange={(e) => updateOption(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {opt.key} is required
                  </Form.Control.Feedback>
                </Form.Group>
              );
            })}
          </>
        ) : null}

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
