import Head from "next/head";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useForm } from "react-hook-form";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import Moment from "react-moment";
import LoadingTable from "../components/loadingTable";
import ImportAndUpdateAllProfiles from "../components/profile/importAndUpdate";

export default function Page(props) {
  const { errorHandler, successHandler, settings } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function updateSetting(setting) {
    setLoading(true);
    const response = await execApi("put", `/setting/${setting.guid}`, setting);
    setLoading(false);
    if (response?.setting) {
      successHandler.set({ message: "Setting Updated" });
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
      <Head>
        <title>Grouparoo: Settings</title>
      </Head>

      <h1>Settings</h1>

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

      <Card border="warning">
        <Card.Body>
          <h2>Operations</h2>
          <ImportAndUpdateAllProfiles
            errorHandler={errorHandler}
            successHandler={successHandler}
          />
        </Card.Body>
      </Card>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { settings } = await execApi("get", `/settings`);
  return { settings };
};

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
      </td>
      <td>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  required
                  type="text"
                  name="value"
                  ref={register}
                  defaultValue={setting.value}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                style={{ marginTop: 5 }}
                disabled={loading}
                size="sm"
                type="submit"
                variant="outline-secondary"
              >
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </td>
      <td>
        {setting.description} <br />
        <em>Default: {setting.defaultValue}</em>
      </td>
      <td>
        <Moment fromNow>{setting.updatedAt}</Moment>
      </td>
    </tr>
  );
}
