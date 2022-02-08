import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";
import { useGrouparooModel } from "../../contexts/grouparooModel";

export default function GroupTabs({ group }: { group: Models.GroupType }) {
  const { model } = useGrouparooModel();

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
      tabs = ["edit", "rules", "members", "destinations", "runs"];
      break;
  }

  return (
    <Tabs
      name={group.name}
      tabs={tabs}
      defaultTab={defaultTab}
      parentNames={[model.name]}
      hideScopeBreadcrumb
    />
  );
}
