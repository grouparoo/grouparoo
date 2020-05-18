import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button } from "react-bootstrap";
import PermissionsList from "../../lists/permissions";
import Router from "next/router";

import { ApiKeyAPIData } from "../../../utils/apiData";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState<ApiKeyAPIData>({ name: "", apiKey: "" });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/apiKey/${guid}`);
    setLoading(false);
    if (response?.apiKey) {
      setApiKey(response.apiKey);
    }
  }

  const updateApiKey = async (event) => {
    event.preventDefault();
    const _apiKey = Object.assign({}, apiKey);
    delete _apiKey.apiKey;

    if (_apiKey.permissionAllRead === null) {
      _apiKey["disabledPermissionAllRead"] = true;
    }
    if (_apiKey.permissionAllWrite === null) {
      _apiKey["disabledPermissionAllWrite"] = true;
    }

    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/apiKey/${guid}`,
      _apiKey
    );
    setLoading(false);
    if (response?.apiKey) {
      successHandler.set({ message: "API Key updated" });
      setApiKey(response.apiKey);
    }
  };

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/apiKey/${guid}`
      );
      if (response) {
        successHandler.set({ message: "API Key deleted" });
        Router.push("/apiKeys");
      }
    }
  }

  function updatePermission(topic, read, write) {
    const _apiKey = Object.assign({}, apiKey);
    for (const i in _apiKey.permissions) {
      if (_apiKey.permissions[i].topic === topic) {
        _apiKey.permissions[i].read = read;
        _apiKey.permissions[i].write = write;
      }
    }
    setApiKey(_apiKey);
  }

  return (
    <>
      <Form id="form" onSubmit={updateApiKey}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="API Key Name"
            value={apiKey.name}
            onChange={(event) => {
              const _apiKey = Object.assign({}, apiKey);
              _apiKey.name = event.target.value;
              setApiKey(_apiKey);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>API Key</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="API Key"
            value={apiKey.apiKey}
          />
        </Form.Group>

        <h3>Permissions</h3>
        <PermissionsList
          permissions={apiKey.permissions}
          permissionAllRead={apiKey.permissionAllRead}
          permissionAllWrite={apiKey.permissionAllWrite}
          updatePermission={updatePermission}
          updatePermissionAll={(read, write) => {
            const _apiKey = Object.assign({}, apiKey);
            _apiKey.permissionAllRead = read;
            _apiKey.permissionAllWrite = write;
            setApiKey(_apiKey);
          }}
        />

        <Button variant="primary" type="submit">
          Update
        </Button>
        <hr />
        <Button
          disabled={loading}
          variant="danger"
          size="sm"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </Button>
      </Form>
    </>
  );
}
