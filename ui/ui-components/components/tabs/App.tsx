import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function AppTabs({
  app,
  name,
}: {
  app: Models.AppType;
  name: string;
}) {
  const tabs = ["edit"];

  if (app.refreshQueryAvailable === true) {
    tabs.push("refresh");
  }

  return (
    <div>
      <Tabs name={name} draftType={app.type} tabs={tabs} />
    </div>
  );
}
