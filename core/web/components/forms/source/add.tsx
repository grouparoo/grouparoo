import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button } from "react-bootstrap";
import SelectorList from "../../selectorList";
import Link from "next/link";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [connectionApps, setConnectionApps] = useState([]);
  const [source, setSource] = useState({
    appGuid: "",
    type: "",
  });

  useEffect(() => {
    loadApps();
  }, []);

  async function loadApps() {
    const connectionsResponse = await execApi(
      "get",
      `/api/${apiVersion}/sources/connectionApps`
    );
    if (connectionsResponse?.connectionApps) {
      setConnectionApps(connectionsResponse.connectionApps);
    }
  }

  const create = async (event) => {
    event.preventDefault();
    const response = await execApi("post", `/api/${apiVersion}/source`, source);
    if (response?.source) {
      successHandler.set({ message: "Source Created" });
      Router.push(
        "/source/[guid]?tab=edit",
        `/source/${response.source.guid}?tab=edit`
      );
    }
  };

  const update = async (event) => {
    const _source = Object.assign({}, source);
    _source[event.target.id] = event.target.value;
    setSource(_source);
  };

  function updateSource(clickedOnButton) {
    setSource({
      type: clickedOnButton.connection.name,
      appGuid: clickedOnButton.app.guid,
    });
  }

  if (connectionApps.length === 0) {
    return (
      <p>
        Please create an{" "}
        <Link href="/apps">
          <a>App</a>
        </Link>{" "}
        first.
      </p>
    );
  }

  return (
    <>
      <h1>Choose App and Connection</h1>

      <Form id="form" onSubmit={create}>
        <SelectorList
          onClick={updateSource}
          selectedItem={source}
          items={connectionApps}
          displayAddAppButton={true}
        />

        <br />
        <Button type="submit">Create Source</Button>
      </Form>
    </>
  );
}
