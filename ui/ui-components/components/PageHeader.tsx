import { Fragment, ReactText, useMemo } from "react";
import AppIcon from "./AppIcon";
import ModelIcon from "./ModelIcon";
import GroupIcon from "./GroupIcon";
import RecordImageFromEmail from "./visualizations/RecordImageFromEmail";
import SeparatedItems from "./lib/SeparatedItems";

interface Props {
  title: React.ReactNode;
  icon?: string;
  badges?: React.ReactNode[];
  iconType?: "grouparooRecord" | "grouparooModel" | "group" | "app";
  loading?: boolean;
  email?: string;
  actions?: React.ReactNode[];
}

const PageHeader: React.FC<Props> = ({
  title,
  icon,
  badges,
  iconType = "app",
  loading,
  email,
  actions,
}) => {
  const iconNode = useMemo<React.ReactNode>(() => {
    switch (iconType) {
      case "grouparooRecord":
        return (
          <RecordImageFromEmail
            width={100}
            loading={loading}
            email={email}
            className="me-3"
          />
        );

      case "grouparooModel":
        return <ModelIcon model={{ icon }} size="3x" className="me-3" />;

      case "group":
        return <GroupIcon size="7x" className="me-3" />;

      default:
        return <AppIcon src={icon} size={100} className="me-3" />;
    }
  }, [iconType, icon, loading, email]);

  const titleNode = useMemo<React.ReactNode>(
    () =>
      title ? (
        Array.isArray(title) ? (
          title.map((E, idx) => (
            <Fragment key={`header-fragment-${idx}`}>
              {E}
              <br />
            </Fragment>
          ))
        ) : (
          title
        )
      ) : (
        <em>Draft</em>
      ),
    [title]
  );

  return (
    <div className="d-flex mb-3">
      <div className="flex-shrink-0">{iconNode}</div>
      <div className="flex-grow-1 ms-3">
        <div>
          <h1 style={{ display: "inline" }} className="me-3">
            {titleNode}
          </h1>
          <SeparatedItems items={actions} />
        </div>
        <SeparatedItems items={badges} />
      </div>
    </div>
  );
};

export default PageHeader;
