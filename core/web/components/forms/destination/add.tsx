import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button } from "react-bootstrap";
import SelectorList from "../../selectorList";
import Link from "next/link";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [connectionApps, setConnectionApps] = useState([]);
  const [destination, setDestination] = useState({
    appGuid: "",
    type: "",
  });

  useEffect(() => {
    loadApps();
  }, []);

  async function loadApps() {
    const connectionsResponse = await execApi(
      "get",
      `/api/${apiVersion}/destinations/connectionApps`
    );
    if (connectionsResponse?.connectionApps) {
      setConnectionApps(connectionsResponse.connectionApps);
    }
  }

  const create = async (event) => {
    event.preventDefault();
    const response = await execApi(
      "post",
      `/api/${apiVersion}/destination`,
      destination
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination Created" });
      Router.push(`/destination/${response.destination.guid}?tab=edit`);
    }
  };

  const update = async (event) => {
    const _destination = Object.assign({}, destination);
    _destination[event.target.id] = event.target.value;
    setDestination(_destination);
  };

  function updateDestination(clickedOnButton) {
    setDestination({
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
          onClick={updateDestination}
          selectedItem={destination}
          items={connectionApps}
          displayAddAppButton={true}
        />
        <br />
        <Button type="submit">Create Destination</Button>
      </Form>
    </>
  );
}
