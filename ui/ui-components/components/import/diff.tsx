import { Badge } from "react-bootstrap";
import EnterpriseLink from "../enterpriseLink";
import { Models } from "../../utils/apiData";

export function ImportProfilePropertiesDiff({
  _import,
}: {
  _import: Models.ImportType;
}) {
  const complete = _import.profileUpdatedAt && _import.groupsUpdatedAt;

  if (!complete) {
    return (
      <>
        <ul>
          {Object.keys(_import.oldProfileProperties).map((k) => {
            return (
              <li key={`${_import.id}-prp-${k}`}>
                {k}: {_import.oldProfileProperties[k]?.toString()}
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <>
      <ul>
        {Object.keys(_import.oldProfileProperties).map((k) => {
          return (
            <li key={`${_import.id}-prp-${k}`}>
              {k}:{" "}
              {JSON.stringify(_import.oldProfileProperties[k]) !==
              JSON.stringify(_import.newProfileProperties[k]) ? (
                <>
                  <Badge variant="danger">-</Badge>&nbsp;
                  {_import.oldProfileProperties[k]?.toString()}
                  {_import.newProfileProperties[k] !== null &&
                  _import.newProfileProperties[k] !== undefined ? (
                    <>
                      {" "}
                      | <Badge variant="success">+</Badge>&nbsp;
                      {_import.newProfileProperties[k].toString()}
                    </>
                  ) : null}
                </>
              ) : (
                _import.oldProfileProperties[k]?.toString()
              )}
            </li>
          );
        })}

        {Object.keys(_import.newProfileProperties).map((k) =>
          _import.oldProfileProperties[k] === undefined ? (
            <li key={`${_import.id}-prp-${k}`}>
              {k}: <Badge variant="success">+</Badge>&nbsp;
              {_import.newProfileProperties[k]?.toString()}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
}

export function ImportGroupsDiff({
  _import,
  groups,
}: {
  _import: Models.ImportType;
  groups: Models.GroupType[];
}) {
  const complete = _import.profileUpdatedAt && _import.groupsUpdatedAt;

  if (!complete) {
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
              ) : null}{" "}
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
      <EnterpriseLink href="/group/[id]/edit" as={`/group/${group.id}/edit`}>
        <a>{group.name}</a>
      </EnterpriseLink>
    );
  } else {
    return <span>{groupId} (deleted)</span>;
  }
}
