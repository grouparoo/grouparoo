import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button, Badge } from "react-bootstrap";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [connections, setConnections] = useState([]);
  const [apps, setApps] = useState([]);
  const [chosenApp, setChosenApp] = useState({
    type: "",
    name: "",
    guid: "",
  });

  useEffect(() => {
    loadOptions();
    loadApps();
  }, []);

  async function loadApps() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/apps`);
    setLoading(false);
    if (response?.apps) {
      if (response.apps.length > 0) {
        setChosenApp(response.apps[0]);
      }

      setApps(response.apps);
    }
  }

  async function loadOptions() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/destinationOptions`
    );
    setLoading(false);
    if (response?.connections) {
      setConnections(response.connections);
    }
  }

  async function onSubmit(data) {
    const keys = Object.keys(data);
    data.appGuid = chosenApp.guid;
    data.options = {};

    keys.forEach((k) => {
      if (k.match(/^_opt~/)) {
        const realKey = k.replace(/^_opt~/, "");
        data.options[realKey] = data[k];
        delete data[k];
      }
    });

    setLoading(true);
    const response = await execApi(
      "post",
      `/api/${apiVersion}/destination`,
      data
    );
    setLoading(false);
    if (response?.destination) {
      successHandler.set({ message: "Destination Created" });
      Router.push(`/destination/${response.destination.guid}`);
    }
  }

  let chosenConnection;
  connections.forEach((conn) => {
    if (conn.app.indexOf(chosenApp.type) >= 0 && conn.direction === "export") {
      chosenConnection = conn;
    }
  });

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="name"
            placeholder="Destination Name"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="trackAllGroups">
          <Form.Check
            defaultChecked={false}
            type="checkbox"
            name="trackAllGroups"
            label="Track All Groups?"
            ref={register}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Connected App</Form.Label>
          <Form.Control
            as="select"
            name="type"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              apps.forEach((app) => {
                if (app.guid === event.target.value) {
                  setChosenApp(app);
                }
              });
            }}
          >
            {apps.map((app) => (
              <option value={app.guid} key={`app-${app.guid}`}>
                {app.name} ({app.type})
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {chosenConnection && chosenConnection.options.length > 0 ? (
          <>
            <hr />
            <strong>Options for a {chosenConnection.name} destination</strong>
            <br />
            <br />

            {chosenConnection.options.map((opt) => {
              return (
                <Form.Group key={`opt-${opt.key}`}>
                  <Form.Label>
                    {opt.required ? (
                      <>
                        <Badge variant="info">required</Badge>&nbsp;
                      </>
                    ) : null}
                    <code>{opt.key}</code>: <small>{opt.description}</small>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={`_opt~${opt.key}`}
                    required={opt.required}
                    placeholder="..."
                    ref={register}
                  />
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
