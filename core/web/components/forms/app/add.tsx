import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button, Card, CardColumns } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "../../appIcon";

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
        <CardColumns>
          {types.map((_app) => {
            return (
              <Card
                style={{
                  width: "20em",
                  borderRadius: "4px",
                }}
                bg={app.type === _app.name ? "primary" : "secondary"}
                border={"primary"}
                text={"white"}
                onClick={() => {
                  const __app = Object.assign({}, app);
                  __app.type = _app.name;
                  setApp(__app);
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100px",
                      height: "100px",
                      borderRadius: "4px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    <AppIcon
                      className="card-img"
                      src={_app.plugin.icon}
                      size={90}
                    />
                  </div>
                  <br />
                  <h4>{_app.name}</h4>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>

        <br />

        <Button variant="primary" type="submit" active={!loading}>
          Continue
        </Button>
      </Form>
    </>
  );
}
