import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

interface Props {
  model: Models.GrouparooModelType;
}

export default function ModelTabs({ model }: Props) {
  const tabs = ["overview", "edit"];
  return (
    <Tabs name={model.name} draftType={model.type} tabs={tabs} hideScope />
  );
}
