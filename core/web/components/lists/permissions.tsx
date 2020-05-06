import { Table, Form, Row, Col } from "react-bootstrap";

interface Permission {
  guid: string;
  topic: string;
  read: boolean;
  write: boolean;
  locked: boolean;
}

export default function PermissionsList({
  permissions,
  permissionAllRead,
  permissionAllWrite,
  updatePermission,
  updatePermissionAll,
}: {
  permissions: Permission[];
  permissionAllRead: boolean;
  permissionAllWrite: boolean;
  updatePermission: (topic: string, read: boolean, write: boolean) => any;
  updatePermissionAll: (read: boolean, write: boolean) => any;
}) {
  const individualPermissions =
    permissionAllRead !== null || permissionAllWrite !== null ? true : false;

  return (
    <>
      <Form.Group controlId="groupControl">
        <Form.Check
          checked={individualPermissions}
          type="checkbox"
          label="Manage permissions in bulk?"
          onChange={(event) => {
            const checked = event.target.checked;
            if (checked) {
              updatePermissionAll(
                permissionAllRead === null ? false : permissionAllRead,
                permissionAllWrite === null ? false : permissionAllWrite
              );
            } else {
              updatePermissionAll(null, null);
            }
          }}
        />
      </Form.Group>

      <br />

      {individualPermissions ? (
        <>
          <Row>
            <Col>
              <Form.Group controlId="permissionAllRead">
                <Form.Check
                  checked={permissionAllRead || false}
                  type="checkbox"
                  label="Grant Read Access to all Topics"
                  onChange={() =>
                    updatePermissionAll(!permissionAllRead, permissionAllWrite)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="permissionAllWrite">
                <Form.Check
                  checked={permissionAllWrite || false}
                  type="checkbox"
                  label="Grant Write Access to all Topics"
                  onChange={() =>
                    updatePermissionAll(permissionAllRead, !permissionAllWrite)
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <br />
        </>
      ) : (
        <Table size="sm">
          <tbody>
            {permissions.map((permission) => {
              return (
                <tr key={`permission-${permission.guid}`}>
                  <td>
                    <strong>{permission.topic}</strong>
                  </td>
                  <td>
                    <Form.Group controlId={`${permission.guid}~read`}>
                      <Form.Check
                        checked={permission.read}
                        disabled={permission.locked}
                        type="checkbox"
                        label="Read Access"
                        onChange={() =>
                          updatePermission(
                            permission.topic,
                            !permission.read,
                            permission.write
                          )
                        }
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId={`${permission.guid}~write`}>
                      <Form.Check
                        checked={permission.write}
                        disabled={permission.locked}
                        type="checkbox"
                        label="Write Access"
                        onChange={() =>
                          updatePermission(
                            permission.topic,
                            permission.read,
                            !permission.write
                          )
                        }
                      />
                    </Form.Group>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
}
