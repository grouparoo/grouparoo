import Tabs from "../tabs";
import { AppAPIData } from "../../utils/apiData";

export default function AppTabs({ app }: { app: AppAPIData }) {
  const tabs = ["edit"];
  return <Tabs name={app.name} draftType={app.type} tabs={tabs} />;
}
