import { Badge } from "react-bootstrap";
import Link from "next/link";
import { Models } from "../../utils/apiData";

export function ExportProfilePropertiesDiff({
  _export,
}: {
  _export: Models.ExportType;
}) {
  const complete = _export.completedAt;

  if (!complete) {
    return (
      <ul>
        {Object.keys(_export.oldProfileProperties).map((k) => {
          return (
            <li key={`${_export.id}-prp-${k}`}>
              {k}: {_export.oldProfileProperties[k]?.toString()}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul>
      {Object.keys(_export.oldProfileProperties).map((k) => {
        return (
          <li key={`${_export.id}-prp-${k}`}>
            {k}:{" "}
            {JSON.stringify(_export.oldProfileProperties[k]) !==
            JSON.stringify(_export.newProfileProperties[k]) ? (
              <>
                <Badge variant="danger">-</Badge>&nbsp;
                {_export.oldProfileProperties[k]?.toString()}
                {_export.newProfileProperties[k] !== null &&
                _export.newProfileProperties[k] !== undefined ? (
                  <>
                    {" "}
                    | <Badge variant="success">+</Badge>&nbsp;
                    {_export.newProfileProperties[k].toString()}
                  </>
                ) : null}
              </>
            ) : (
              <>{_export.oldProfileProperties[k]?.toString()}</>
            )}
          </li>
        );
      })}

      {Object.keys(_export.newProfileProperties).map((k) =>
        _export.oldProfileProperties[k] === undefined ? (
          <li key={`${_export.id}-prp-${k}`}>
            {k}: <Badge variant="success">+</Badge>&nbsp;
            {_export.newProfileProperties[k]?.toString()}
          </li>
        ) : null
      )}
    </ul>
  );
}

export function ExportGroupsDiff({
  _export,
  groups,
}: {
  _export: Models.ExportType;
  groups: Models.GroupType[];
}) {
  const complete = _export.completedAt;

  if (!complete) {
    return (
      <>
        <ul>
          {_export.oldGroups.map((g) => (
            <li key={`${_export.id}-grp-${g}`}>{groupLink(groups, g)}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <ul>
      {_export.oldGroups.map((g) => {
        return (
          <li key={`${_export.id}-grp-${g}`}>
            {!_export.newGroups.includes(g) ? (
              <Badge variant={"danger"}>
                {!_export.newGroups.includes(g) ? "-" : "+"}
              </Badge>
            ) : null}
            &nbsp;
            {groupLink(groups, g)}
          </li>
        );
      })}

      {_export.newGroups.map((g) =>
        !_export.oldGroups.includes(g) ? (
          <li key={`${_export.id}-grp-${g}`}>
            <Badge variant="success">+</Badge>&nbsp;
            {groupLink(groups, g)}
          </li>
        ) : null
      )}
    </ul>
  );
}

function groupLink(groups: Models.GroupType[], groupName: string) {
  const group = groups.find((g) => g.name === groupName);

  if (group) {
    return (
      <Link href="/group/[id]/edit" as={`/group/${group.id}/edit`}>
        <a>{group.name}</a>
      </Link>
    );
  } else {
    return <span>{groupName} (deleted)</span>;
  }
}
