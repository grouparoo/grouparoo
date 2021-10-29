import Link from "next/link";
import { grouparooUiEdition } from "../utils/uiEdition";

const EnterpriseLink = Link;

const CommunityLink = function ({ children }) {
  return <span>{children}</span>;
};

export default grouparooUiEdition === "enterprise" ||
grouparooUiEdition === "config"
  ? EnterpriseLink
  : CommunityLink;
