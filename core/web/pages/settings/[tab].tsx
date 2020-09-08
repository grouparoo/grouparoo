import Head from "next/head";
import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Button, Form, Card, Tabs, Tab } from "react-bootstrap";
import Moment from "react-moment";
import ImportAndUpdateAllProfiles from "../../components/settings/importAndUpdate";
import IdentifyingProfilePropertyRule from "../../components/settings/identifyingProfilePropertyRule";
import ResetCluster from "../../components/settings/resetCluster";
import { capitalize } from "../../components/tabs";
import { useRouter } from "next/router";
import { SettingAPIData } from "../../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, tab } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<SettingAPIData[]>(props.settings);
  const [activeTab, setActiveTab] = useState(tab || "core");

  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  async function updateSetting(setting) {
    setLoading(true);
    const response = await execApi("put", `/setting/${setting.guid}`, setting);
    setLoading(false);
    if (response?.setting) {
      const _settings = [...settings];
      for (const i in _settings) {
        if (_settings[i].guid === response.setting.guid) {
          _settings[i] = response.setting;
        }
      }
      setSettings(_settings);

      successHandler.set({ message: "Setting Updated" });
      if (setting.key === "cluster-name") window.location.reload();
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

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => router.push(`/settings/${k}`)}
      >
        <Tab eventKey="actions" title="Actions">
          <ActionsTab
            errorHandler={errorHandler}
            successHandler={successHandler}
          />
        </Tab>

        {pluginNames.sort().map((pluginName) => (
          <Tab
            key={`plugin-${pluginName}`}
            eventKey={`${pluginName}`}
            title={capitalize(pluginName)}
          >
            <br />
            <h2>{capitalize(pluginName)}</h2>

            {/* Special Settings */}
            {pluginName === "interface" ? (
              <InterfaceTab
                errorHandler={errorHandler}
                successHandler={successHandler}
              />
            ) : null}

            {/* Regular Settings organized by Plugin */}
            {settings
              .sort((a, b) => {
                if (a.key > b.key) return 1;
                if (a.key < b.key) return -1;
              })
              .map((setting) =>
                setting.pluginName === pluginName ? (
                  <SettingCard
                    key={`team-${setting.guid}`}
                    setting={setting}
                    loading={loading}
                    updateSetting={updateSetting}
                  />
                ) : null
              )}
          </Tab>
        ))}
      </Tabs>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { tab } = ctx.query;
  const { execApi } = useApi(ctx);
  const { settings } = await execApi("get", `/settings`);
  return { settings, tab };
};

function SettingCard({
  setting,
  updateSetting,
  loading,
}: {
  setting: SettingAPIData;
  updateSetting: Function;
  loading: boolean;
}) {
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
    setting.value = data.value;
    updateSetting(setting);
  }

  function capitalize(key: string) {
    return key
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{capitalize(setting.key)}</Card.Title>
          {setting.type !== "boolean" ? (
            <Card.Subtitle className="mb-2 text-muted">
              {setting.description}
            </Card.Subtitle>
          ) : null}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              {setting.type === "string" ? (
                <Form.Control
                  style={{ width: "100%" }}
                  required
                  type="text"
                  name="value"
                  ref={register}
                  defaultValue={setting.value}
                />
              ) : null}
              {setting.type === "number" ? (
                <Form.Control
                  style={{ width: "100%" }}
                  required
                  type="number"
                  name="value"
                  ref={register}
                  defaultValue={setting.value}
                />
              ) : null}
              {setting.type === "boolean" ? (
                <Form.Check
                  type="checkbox"
                  name="value"
                  label={setting.description}
                  ref={register}
                  defaultChecked={setting.value === "true"}
                />
              ) : null}
            </Form.Group>

            <Button
              style={{ marginTop: 5 }}
              disabled={loading}
              size="sm"
              type="submit"
              variant="outline-secondary"
            >
              Update
            </Button>
          </Form>

          <br />

          <Card.Text>
            <small>Default: {setting.defaultValue}</small>
            <br />
            <small>
              Last Updated: <Moment fromNow>{setting.updatedAt}</Moment>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

function ActionsTab({ errorHandler, successHandler }) {
  return (
    <>
      <br />

      <h2>Cluster Actions</h2>

      <br />

      <ImportAndUpdateAllProfiles
        errorHandler={errorHandler}
        successHandler={successHandler}
      />

      <br />

      <ResetCluster
        errorHandler={errorHandler}
        successHandler={successHandler}
      />
    </>
  );
}

function InterfaceTab({ errorHandler, successHandler }) {
  return (
    <>
      <IdentifyingProfilePropertyRule
        errorHandler={errorHandler}
        successHandler={successHandler}
      />
      <br />
    </>
  );
}
