import { useMemo } from "react";
import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";
import { useGrouparooModel } from "../../contexts/grouparooModel";

interface Props {
  source: Models.SourceType;
}

export default function SourceTabs({ source }: Props) {
  const { model } = useGrouparooModel();

  const tabs = useMemo<string[]>(() => {
    const tabs = ["overview", "edit"];

    if (source.schedule) {
      tabs.push("schedule");
      if (grouparooUiEdition() === "enterprise") tabs.push("runs");
    }

    return tabs;
  }, [source.schedule]);

  return (
    <Tabs
      name={source.name}
      draftType={source.type}
      tabs={tabs}
      parentNames={[model.name]}
      hideScopeBreadcrumb
    />
  );
}
