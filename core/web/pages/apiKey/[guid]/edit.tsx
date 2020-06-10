import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Head from "next/head";
import PermissionsList from "../../../components/permissions";
import Router from "next/router";
import ApiKeyTabs from "../../../components/tabs/apiKey";

import { ApiKeyAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState<ApiKeyAPIData>(props.apiKey);
  const { guid } = query;

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
    const response = await execApi("put", `/apiKey/${guid}`, _apiKey);
    setLoading(false);
    if (response?.apiKey) {
      successHandler.set({ message: "API Key updated" });
      setApiKey(response.apiKey);
    }
  };

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi("delete", `/apiKey/${guid}`);
      if (response) {
        successHandler.set({ message: "API Key deleted" });
        Router.push("/apiKeys");
      }
    }
  }

  function updatePermission(topic, read, write) {
    const _apiKey = Object.assign({}, apiKey);
    _apiKey.permissionAllRead = null;
    _apiKey.permissionAllWrite = null;
    for (const i in _apiKey.permissions) {
      if (_apiKey.permissions[i].topic === topic) {
        _apiKey.permissions[i].read = read;
        _apiKey.permissions[i].write = write;
      }
    }
    setApiKey(_apiKey);
  }

  function updatePermissionAll(read, write) {
    const _apiKey = Object.assign({}, apiKey);
    _apiKey.permissionAllRead = read;
    _apiKey.permissionAllWrite = write;
    for (const i in _apiKey.permissions) {
      _apiKey.permissions[i].read = read;
      _apiKey.permissions[i].write = write;
    }
    setApiKey(_apiKey);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {apiKey.name}</title>
      </Head>

      <ApiKeyTabs apiKey={apiKey} />

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

        <p>
          Try this API Key in the browser{" "}
          <a
            href={`/examples/events.html?apiKey=${apiKey.apiKey}`}
            target="_new"
          >
            here
          </a>
          .
        </p>

        <h3>Permissions</h3>
        <PermissionsList
          permissions={apiKey.permissions}
          permissionAllRead={apiKey.permissionAllRead}
          permissionAllWrite={apiKey.permissionAllWrite}
          updatePermission={updatePermission}
          updatePermissionAll={updatePermissionAll}
        />

        <hr />

        <Button variant="primary" type="submit">
          Update
        </Button>

        <br />
        <br />

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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { apiKey } = await execApi("get", `/apiKey/${guid}`);
  return { apiKey };
};
