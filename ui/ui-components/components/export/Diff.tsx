import { Badge } from "react-bootstrap";
import Link from "next/link";
import { Models } from "../../utils/apiData";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export function ExportRecordPropertiesDiff({
  _export,
}: {
  _export: Models.ExportType;
}) {
  const keys = [
    ...Object.keys(_export.oldRecordProperties),
    ...Object.keys(_export.newRecordProperties),
  ]
    .filter(onlyUnique)
    .sort();

  return (
    <ul>
      {keys.map((k) => {
        const hasChanges =
          JSON.stringify(_export.oldRecordProperties[k]) !==
          JSON.stringify(_export.newRecordProperties[k])
            ? true
            : false;
        const nullOld =
          _export.oldRecordProperties[k] === null ||
          _export.oldRecordProperties[k] === undefined;
        const nullNew =
          _export.newRecordProperties[k] === null ||
          _export.newRecordProperties[k] === undefined;

        const badge = hasChanges ? (
          nullOld && !nullNew ? (
            <Badge bg="success">+</Badge>
          ) : !nullOld && nullNew ? (
            <Badge bg="danger">-</Badge>
          ) : (
            <Badge bg="warning">-/+</Badge>
          )
        ) : (
          <Badge bg="info">○</Badge>
        );

        return (
          <li key={`${_export.id}-prp-${k}`}>
            {badge} <strong>{k}</strong>:{" "}
            {nullOld ? (
              <code>null</code>
            ) : (
              _export.oldRecordProperties[k].toString()
            )}{" "}
            /{" "}
            {nullNew ? (
              <code>null</code>
            ) : (
              _export.newRecordProperties[k].toString()
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
              <Badge bg={"danger"}>
                {!_export.newGroups.includes(g) ? "-" : "+"}
              </Badge>
            ) : (
              <Badge bg="info">○</Badge>
            )}
            &nbsp;
            {groupLink(groups, g)}
          </li>
        );
      })}

      {_export.newGroups.map((g) =>
        !_export.oldGroups.includes(g) ? (
          <li key={`${_export.id}-grp-${g}`}>
            <Badge bg="success">+</Badge>&nbsp;
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
      <Link href={`/model/${group.modelId}/group/${group.id}/edit`}>
        <a>{group.name}</a>
      </Link>
    );
  } else {
    return <span>{groupName} (deleted)</span>;
  }
}
