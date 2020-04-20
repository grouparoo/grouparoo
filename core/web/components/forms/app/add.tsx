import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button, Card, CardDeck } from "react-bootstrap";
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
        <CardDeck>
          {types.map((_app) => {
            return (
              <div
                style={{
                  width: "150px",
                  borderRadius: "4px",
                  backgroundColor: "#242436",
                  borderColor: "gray",
                  color: "white",
                  margin: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                }}
                onClick={() => {
                  const __app = Object.assign({}, app);
                  __app.type = _app.name;
                  setApp(__app);
                }}
              >
                <div className="d-flex flex-column">
                  <div
                    className="align-self-center"
                    style={{
                      backgroundColor: "white",
                      width: "100px",
                      height: "100px",
                      borderRadius: "4px",
                      paddingTop: "5px",
                      textAlign: "center",
                    }}
                  >
                    <AppIcon
                      className="card-img"
                      src={_app.plugin.icon}
                      size={90}
                    />
                  </div>
                  <br />
                  <h4 className="align-self-center">{_app.name}</h4>
                </div>
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
