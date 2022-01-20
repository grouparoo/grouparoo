import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Head from "next/head";
import PermissionsList from "@grouparoo/ui-components/components/Permissions";
import { useRouter } from "next/router";
import ApiKeyTabs from "@grouparoo/ui-components/components/tabs/APIKey";
import LoadingButton from "@grouparoo/ui-components/components/LoadingButton";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import {
  errorHandler,
  successHandler,
} from "@grouparoo/ui-components/eventHandlers";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";

export default function Page(props) {
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState<Models.ApiKeyType>(props.apiKey);
  const { id } = router.query;

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
    const response: Actions.ApiKeyEdit = await client.request(
      "put",
      `/apiKey/${id}`,
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
      const { success }: Actions.ApiKeyDestroy = await client.request(
        "delete",
        `/apiKey/${id}`
      );
      if (success) {
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

      <h1>{apiKey.name}</h1>
      <LockedBadge object={apiKey} />
      <Form id="form" onSubmit={updateApiKey} autoComplete="off">
        <fieldset disabled={Boolean(apiKey.locked)}>
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
        </fieldset>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { client } = useApi();
  const { id } = ctx.query;
  const { apiKey }: Actions.ApiKeyView = await client.request(
    "get",
    `/apiKey/${id}`
  );
  return { apiKey };
};
