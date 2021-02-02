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
              <li key={`${_import.guid}-prp-${k}`}>
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
            <li key={`${_import.guid}-prp-${k}`}>
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
            <li key={`${_import.guid}-prp-${k}`}>
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
          {_import.oldGroupGuids.map((g) => (
            <li key={`${_import.guid}-grp-${g}`}>{groupLink(groups, g)}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <ul>
        {_import.oldGroupGuids.map((g) => {
          return (
            <li key={`${_import.guid}-grp-${g}`}>
              {!_import.newGroupGuids.includes(g) ? (
                <Badge variant="danger">-</Badge>
              ) : null}{" "}
              {groupLink(groups, g)}
            </li>
          );
        })}

        {_import.newGroupGuids.map((g) =>
          !_import.oldGroupGuids.includes(g) ? (
            <li key={`${_import.guid}-grp-${g}`}>
              <Badge variant="success">+</Badge>&nbsp;
              {groupLink(groups, g)}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
}

function groupLink(groups: Models.GroupType[], groupGuid: string) {
  const group = groups.find((g) => g.guid === groupGuid);

  if (group) {
    return (
      <EnterpriseLink
        href="/group/[guid]/edit"
        as={`/group/${group.guid}/edit`}
      >
        <a>{group.name}</a>
      </EnterpriseLink>
    );
  } else {
    return <span>{groupGuid} (deleted)</span>;
  }
}
