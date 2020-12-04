import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function AppTabs({ app }: { app: Models.AppType }) {
  const tabs = ["edit"];
  return <Tabs name={app.name} draftType={app.type} tabs={tabs} />;
}
