import { Badge } from "react-bootstrap";
import Link from "next/link";
import { Models } from "../../utils/apiData";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export function ExportProfilePropertiesDiff({
  _export,
}: {
  _export: Models.ExportType;
}) {
  const keys = [
    ...Object.keys(_export.oldProfileProperties),
    ...Object.keys(_export.newProfileProperties),
  ]
    .filter(onlyUnique)
    .sort();

  return (
    <ul>
      {keys.map((k) => {
        const hasChanges =
          JSON.stringify(_export.oldProfileProperties[k]) !==
          JSON.stringify(_export.newProfileProperties[k])
            ? true
            : false;
        const nullOld =
          _export.oldProfileProperties[k] === null ||
          _export.oldProfileProperties[k] === undefined;
        const nullNew =
          _export.newProfileProperties[k] === null ||
          _export.newProfileProperties[k] === undefined;

        const badge = hasChanges ? (
          nullOld && !nullNew ? (
            <Badge variant="success">+</Badge>
          ) : !nullOld && nullNew ? (
            <Badge variant="danger">-</Badge>
          ) : (
            <Badge variant="warning">-/+</Badge>
          )
        ) : (
          <Badge variant="info">○</Badge>
        );

        return (
          <li key={`${_export.id}-prp-${k}`}>
            {badge} <strong>{k}</strong>:{" "}
            {nullOld ? (
              <code>null</code>
            ) : (
              _export.oldProfileProperties[k].toString()
            )}{" "}
            /{" "}
            {nullNew ? (
              <code>null</code>
            ) : (
              _export.newProfileProperties[k].toString()
            )}
          </li>
        );
      })}
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
  return (
    <ul>
      {_export.oldGroups.map((g) => {
        return (
          <li key={`${_export.id}-grp-${g}`}>
            {!_export.newGroups.includes(g) ? (
              <Badge variant={"danger"}>
                {!_export.newGroups.includes(g) ? "-" : "+"}
              </Badge>
            ) : (
              <Badge variant="info">○</Badge>
            )}
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
