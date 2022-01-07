import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function GroupTabs({
  group,
  model,
}: {
  group: Models.GroupType;
  model: Models.GrouparooModelType;
}) {
  let tabs = [];
  let defaultTab = "rules";

  switch (grouparooUiEdition()) {
    case "community":
      tabs = ["members"];
      defaultTab = "members";
      break;
    case "config":
      tabs = ["edit", "rules"];
      break;
    case "enterprise":
      tabs = ["edit", "rules", "members", "destinations", "runs", "logs"];
      break;
  }

  return (
    <Tabs
      name={group.name}
      tabs={tabs}
      defaultTab={defaultTab}
      scopeName={model.name}
    />
  );
}
