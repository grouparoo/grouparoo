import { Badge } from "react-bootstrap";
import EnterpriseLink from "../GrouparooLink";
import { Models } from "../../utils/apiData";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export function ImportRecordPropertiesDiff({
  _import,
}: {
  _import: Models.ImportType;
}) {
  if (_import.state !== "complete") {
    return (
      <>
        <ul>
          {Object.keys(_import.oldRecordProperties).map((k) => {
            return (
              <li key={`${_import.id}-prp-${k}`}>
                {k}: {_import.oldRecordProperties[k]?.toString()}
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  const keys = [
    ...Object.keys(_import.oldRecordProperties),
    ...Object.keys(_import.newRecordProperties),
  ]
    .filter(onlyUnique)
    .sort();

  return (
    <ul>
      {keys.map((k) => {
        const hasChanges =
          JSON.stringify(_import.oldRecordProperties[k]) !==
          JSON.stringify(_import.newRecordProperties[k])
            ? true
            : false;
        const nullOld =
          _import.oldRecordProperties[k] === null ||
          _import.oldRecordProperties[k] === undefined ||
          (_import.oldRecordProperties[k].length === 1 &&
            _import.oldRecordProperties[k][0] === null);
        const nullNew =
          _import.newRecordProperties[k] === null ||
          _import.newRecordProperties[k] === undefined ||
          (_import.newRecordProperties[k].length === 1 &&
            _import.newRecordProperties[k][0] === null);

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
          <li key={`${_import.id}-prp-${k}`}>
            {badge} <strong>{k}</strong>:{" "}
            {nullOld ? (
              <code>null</code>
            ) : (
              _import.oldRecordProperties[k].toString()
            )}{" "}
            /{" "}
            {nullNew ? (
              <code>null</code>
            ) : (
              _import.newRecordProperties[k].toString()
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ImportGroupsDiff({
  _import,
  groups,
}: {
  _import: Models.ImportType;
  groups: Models.GroupType[];
}) {
  if (_import.state !== "complete") {
    return (
      <>
        <ul>
          {_import.oldGroupIds.map((g) => (
            <li key={`${_import.id}-grp-${g}`}>{groupLink(groups, g)}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <ul>
        {_import.oldGroupIds.map((g) => {
          return (
            <li key={`${_import.id}-grp-${g}`}>
              {!_import.newGroupIds.includes(g) ? (
                <Badge variant="danger">-</Badge>
              ) : (
                <Badge variant="info">○</Badge>
              )}{" "}
              {groupLink(groups, g)}
            </li>
          );
        })}

        {_import.newGroupIds.map((g) =>
          !_import.oldGroupIds.includes(g) ? (
            <li key={`${_import.id}-grp-${g}`}>
              <Badge variant="success">+</Badge>&nbsp;
              {groupLink(groups, g)}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
}

function groupLink(groups: Models.GroupType[], groupId: string) {
  const group = groups.find((g) => g.id === groupId);

  if (group) {
    return (
      <EnterpriseLink href={`/model/${group.modelId}/group/${group.id}/edit`}>
        <a>{group.name}</a>
      </EnterpriseLink>
    );
  } else {
    return <span>{groupId} (deleted)</span>;
  }
}
