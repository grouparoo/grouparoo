import Link from "next/link";
import { grouparooUiEdition } from "../utils/uiEdition";

const EnterpriseLink = Link;

const CommunityLink = function ({ children }) {
  return <span>{children}</span>;
};

const GrouparooLink = ["enterprise", "config"].includes(grouparooUiEdition())
  ? EnterpriseLink
  : CommunityLink;

export default GrouparooLink;
