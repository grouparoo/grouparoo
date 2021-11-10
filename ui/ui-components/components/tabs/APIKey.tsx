import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function ApiKeyTabs({ apiKey }: { apiKey: Models.ApiKeyType }) {
  const tabs = ["edit"];
  return <Tabs name={apiKey.name} tabs={tabs} />;
}
