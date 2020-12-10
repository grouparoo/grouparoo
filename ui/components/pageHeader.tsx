import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import AppIcon from "./appIcon";

export default function PageHeader({
  title,
  icon,
  badges,
}: {
  title: string;
  icon?: string;
  badges?: any[];
}) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td valign="top" style={{ textAlign: "center", paddingRight: 20 }}>
              <AppIcon src={icon} size={100} />
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
