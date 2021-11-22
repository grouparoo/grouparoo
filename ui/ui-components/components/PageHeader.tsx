import { Fragment } from "react";
import AppIcon from "./AppIcon";
import ModelIcon from "./ModelIcon";
import GroupIcon from "./GroupIcon";
import RecordImageFromEmail from "./visualizations/RecordImageFromEmail";

interface Props {
  title: React.ReactNode;
  icon?: string;
  badges?: any[];
  iconType?: "grouparooRecord" | "grouparooModel" | "group" | "app";
  loading?: boolean;
  email?: string;
}

export default function PageHeader({
  title,
  icon,
  badges,
  iconType = "app",
  loading,
  email,
}: Props) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td valign="top" style={{ textAlign: "center", paddingRight: 20 }}>
              {iconType === "grouparooRecord" ? (
                <RecordImageFromEmail
                  width={100}
                  loading={loading}
                  email={email}
                />
              ) : iconType === "grouparooModel" ? (
                <ModelIcon model={{ icon }} size="3x" />
              ) : iconType === "group" ? (
                <GroupIcon size="7x" />
              ) : (
                <AppIcon src={icon} size={100} />
              )}
            </td>
            <td valign="top">
              <h1>
                {title ? (
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
                )}
              </h1>
              {badges && badges.length > 0 ? (
                <>
                  {badges.map((badge, idx) => (
                    <Fragment key={`header_badge_${idx}`}>
                      {badge}&nbsp;
                    </Fragment>
                  ))}
                </>
              ) : null}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </>
  );
}
