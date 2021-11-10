import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function AppTabs({ app }: { app: Models.AppType }) {
  const tabs = ["edit"];
  if (app.appRefreshQuery !== null) {
    tabs.push("refresh");
  }
  return (
    <div>
      <Tabs name={app.name} draftType={app.type} tabs={tabs} />
    </div>
  );
}
