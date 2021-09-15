import { Fragment } from "react";
import AppIcon from "./appIcon";
import ModelIcon from "./modelIcon";

export default function PageHeader({
  title,
  icon,
  badges,
  iconType,
}: {
  title: string;
  icon?: string;
  badges?: any[];
  iconType?: string;
}) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td valign="top" style={{ textAlign: "center", paddingRight: 20 }}>
              {iconType === "grouparooModel" ? (
                <ModelIcon model={{ icon }} size="7x" />
              ) : (
                <AppIcon src={icon} size={100} />
              )}
            </td>
            <td valign="top">
              <h1>{title ? title : <em>Draft</em>}</h1>
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
