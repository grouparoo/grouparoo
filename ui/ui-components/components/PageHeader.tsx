import { Fragment, ReactText, useMemo } from "react";
import AppIcon from "./AppIcon";
import ModelIcon from "./ModelIcon";
import GroupIcon from "./GroupIcon";
import RecordImageFromEmail from "./visualizations/RecordImageFromEmail";
import { Media } from "react-bootstrap";

interface Props {
  title: React.ReactNode;
  icon?: string;
  badges?: React.ReactNode[];
  iconType?: "grouparooRecord" | "grouparooModel" | "group" | "app";
  loading?: boolean;
  email?: string;
}

const PageHeader: React.FC<Props> = ({
  title,
  icon,
  badges,
  iconType = "app",
  loading,
  email,
}) => {
  const iconNode = useMemo<React.ReactNode>(() => {
    switch (iconType) {
      case "grouparooRecord":
        return (
          <RecordImageFromEmail
            width={100}
            loading={loading}
            email={email}
            className="mr-4"
          />
        );

      case "grouparooModel":
        return <ModelIcon model={{ icon }} size="3x" className="mr-4" />;

      case "group":
        return <GroupIcon size="7x" className="mr-4" />;

      default:
        return <AppIcon src={icon} size={100} className="mr-4" />;
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

  const badgesNode: React.ReactNode =
    badges && !!badges.length
      ? badges.map((badge, idx) => (
          <Fragment key={`header_badge_${idx}`}>{badge} </Fragment>
        ))
      : null;

  return (
    <Media className="mb-3">
      {iconNode}
      <Media.Body>
        <h1>{titleNode}</h1>
        {badgesNode}
      </Media.Body>
    </Media>
  );
};

export default PageHeader;
