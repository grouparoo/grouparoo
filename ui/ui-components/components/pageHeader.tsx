import { Fragment } from "react";
import AppIcon from "./appIcon";
import ModelIcon from "./modelIcon";
import GroupIcon from "./groupIcon";
import RecordImageFromEmail from "./visualizations/recordImageFromEmail";

export default function PageHeader({
  title,
  icon,
  badges,
  iconType,
  loading,
  email,
}: {
  title: string | JSX.Element[];
  icon?: string;
  badges?: any[];
  iconType?: string;
  loading?: boolean;
  email?: string;
}) {
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
                <ModelIcon model={{ icon }} size="7x" />
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
