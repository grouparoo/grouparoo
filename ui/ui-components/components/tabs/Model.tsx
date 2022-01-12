import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

interface Props {
  model: Models.GrouparooModelType;
}

export default function ModelTabs({ model }: Props) {
  if (grouparooUiEdition() === "community") {
    return null;
  }

  const tabs = ["overview", "edit"];

  return (
    <Tabs name={model.name} draftType={model.type} tabs={tabs} hideScope />
  );
}
