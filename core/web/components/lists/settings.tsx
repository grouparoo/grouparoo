import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";

function SettingRow({ setting, updateSetting, loading }) {
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
    setting.value = data.value;
    updateSetting(setting);
  }

  return (
    <tr>
      <td>
        <strong>{setting.key}</strong>
        <br />
        <br />
        default: {setting.defaultValue}
      </td>
      <td>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Control
              required
              type="text"
              name="value"
              ref={register}
              defaultValue={setting.value}
            />
          </Form.Group>

          <Button active={!loading} type="submit" variant="secondary">
            Update
          </Button>
        </Form>
      </td>
      <td>{setting.description}</td>
      <td>
        <Moment fromNow>{setting.updatedAt}</Moment>
      </td>
    </tr>
  );
}

export default function ({ errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/settings`);
    setLoading(false);
    if (response?.settings) {
      setSettings(response.settings);
    }
  }

  async function updateSetting(setting) {
    setLoading(true);
    const response = await execApi("put", `/setting/${setting.guid}`, setting);
    setLoading(false);
    if (response?.setting) {
      successHandler.set({ message: "Setting Updated" });
      load();
    }
  }

  const pluginNames = [];
  settings.map((s) => {
    if (pluginNames.indexOf(s.pluginName) < 0) {
      pluginNames.push(s.pluginName);
    }
  });

  return (
    <>
      {pluginNames.map((pluginName) => {
        return (
          <div key={`plugin-${pluginName}`}>
            <h2>{pluginName}</h2>

            <LoadingTable loading={loading}>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                  <th>Description</th>
                  <th>Updated At</th>
                </tr>
              </thead>
              <tbody>
                {settings.map((setting) =>
                  setting.pluginName === pluginName ? (
                    <SettingRow
                      key={`team-${setting.guid}`}
                      setting={setting}
                      loading={loading}
                      updateSetting={updateSetting}
                    />
                  ) : null
                )}
              </tbody>
            </LoadingTable>
          </div>
        );
      })}
    </>
  );
}
