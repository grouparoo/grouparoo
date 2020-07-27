import Tabs from "../tabs";
import { ApiKeyAPIData } from "../../utils/apiData";

export default function ApiKeyTabs({ apiKey }: { apiKey: ApiKeyAPIData }) {
  const tabs = ["edit"];
  return <Tabs name={apiKey.name} tabs={tabs} />;
}
