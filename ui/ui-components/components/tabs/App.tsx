import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function AppTabs({ app }: { app: Models.AppType }) {
  const tabs = ["edit", "refresh"];
  //todo: expose pluginApp.methods!
  // if (app.pluginApp.methods.appQuery) {
  //   tabs.push("app-refresh");
  // }
  return (
    <div>
      <Tabs name={app.name} draftType={app.type} tabs={tabs} />
      {JSON.stringify(app.pluginApp)}
    </div>
  );
}
