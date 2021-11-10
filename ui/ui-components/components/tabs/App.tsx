import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function AppTabs({ app }: { app: Models.AppType }) {
  const tabs = ["edit"];
  if (app.pluginApp.methods.hasOwnProperty("appQuery")) {
    tabs.push("refresh");
  }
  return (
    <div>
      <Tabs name={app.name} draftType={app.type} tabs={tabs} />
    </div>
  );
}
