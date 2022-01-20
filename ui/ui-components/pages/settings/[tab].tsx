import Head from "next/head";
import { useState, useEffect } from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import { capitalize } from "../../utils/languageHelper";
import { useRouter } from "next/router";
import { Models, Actions } from "../../utils/apiData";
import SettingCard from "../../components/settings/SettingCard";
import ImportAndUpdateAllRecords from "../../components/settings/ImportAndUpdate";
import ResetCluster from "../../components/settings/ResetCluster";
import ResetData from "../../components/settings/ResetData";
import ResetCache from "../../components/settings/ResetCache";
import { errorHandler, successHandler } from "../../eventHandlers";
import { getRequestContext, useApi } from "../../contexts/api";
import { NextPageContext } from "next";
import { Client } from "../../client/client";

const settingsWhichTriggerInterfaceReload = [["core", "cluster-name"]];

export default function Page(props) {
  const {
    tab,
  }: {
    tab: string;
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<Models.SettingType[]>(
    props.settings
  );
  const [activeTab, setActiveTab] = useState(tab || "core");

  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  async function updateSetting(setting: Models.SettingType) {
    setLoading(true);
    const response: Actions.SettingEdit = await client.action(
      "put",
      `/setting/${setting.id}`,
      setting
    );
    setLoading(false);
    if (response?.setting) {
      const _settings = [...settings];
      for (const i in _settings) {
        if (_settings[i].id === response.setting.id) {
          _settings[i] = response.setting;
        }
      }
      setSettings(_settings);
      successHandler.set({ message: "Setting Updated" });

      const shouldReload = settingsWhichTriggerInterfaceReload.find(
        ([pluginName, key]) =>
          setting.pluginName === pluginName && setting.key === key
      );
      if (shouldReload) window.location.reload();
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

            {/* Regular Settings organized by Plugin */}
            {settings
              .filter((setting) => setting.pluginName === pluginName)
              .sort((a, b) => {
                if (a.key > b.key) return 1;
                if (a.key < b.key) return -1;
              })
              .map((setting) => (
                <SettingCard
                  key={`team-${setting.id}`}
                  setting={setting}
                  loading={loading}
                  updateSetting={updateSetting}
                />
              ))}
          </Tab>
        ))}
      </Tabs>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { tab } = ctx.query;
  const client = new Client(getRequestContext(ctx));
  const { settings }: Actions.SettingsList = await client.action(
    "get",
    `/settings`
  );
  return { settings, tab };
};

function ActionsTab({ errorHandler, successHandler }) {
  return (
    <>
      <br />
      <h2>Cluster Actions</h2>

      <ImportAndUpdateAllRecords />
      <br />

      <ResetCache />
      <br />

      <Row>
        <Col md={6}>
          <ResetData />
          <br />
        </Col>
        <Col md={6}>
          <ResetCluster />
          <br />
        </Col>
      </Row>
    </>
  );
}
