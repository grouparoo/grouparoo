import Link from "next/link";

const EnterpriseLink = Link;

const CommunityLink = function ({ children }) {
  return <span>{children}</span>;
};

export default process.env.GROUPAROO_UI_EDITION === "enterprise" ||
process.env.GROUPAROO_UI_EDITION === "config"
  ? EnterpriseLink
  : CommunityLink;
