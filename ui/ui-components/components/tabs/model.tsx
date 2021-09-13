import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function AppTabs({
  model,
}: {
  model: Models.GrouparooModelType;
}) {
  const tabs = ["edit"];
  return <Tabs name={model.name} draftType={model.type} tabs={tabs} />;
}
