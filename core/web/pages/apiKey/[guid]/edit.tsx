import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Head from "next/head";
import PermissionsList from "../../../components/permissions";
import { useRouter } from "next/router";
import ApiKeyTabs from "../../../components/tabs/apiKey";
import LoadingButton from "../../../components/loadingButton";

import { Models, Actions } from "../../../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState<Models.ApiKeyType>(props.apiKey);
  const { guid } = router.query;

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
    const response: Actions.ApiKeyEdit = await execApi(
      "put",
      `/apiKey/${guid}`,
      _apiKey
    );
    if (response?.apiKey) {
      successHandler.set({ message: "API Key updated" });
      setApiKey(response.apiKey);
    }
    setLoading(false);
  };

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response: Actions.ApiKeyDestroy = await execApi(
        "delete",
        `/apiKey/${guid}`
      );
      if (response) {
        successHandler.set({ message: "API Key deleted" });
        router.push("/apiKeys");
      } else {
        setLoading(false);
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

      <Form id="form" onSubmit={updateApiKey} autoComplete="off">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="API Key Name"
            disabled={loading}
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

        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Update
        </LoadingButton>

        <br />
        <br />

        <LoadingButton
          disabled={loading}
          variant="danger"
          size="sm"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { apiKey }: Actions.ApiKeyView = await execApi(
    "get",
    `/apiKey/${guid}`
  );
  return { apiKey };
};
