import Loader from "./Loader";
import { Table, Form, Button } from "react-bootstrap";
import { Models } from "../utils/apiData";

export default function PermissionsList({
  permissions,
  permissionAllRead,
  permissionAllWrite,
  updatePermission,
  updatePermissionAll,
}: {
  permissions: Models.PermissionType[];
  permissionAllRead: boolean | null;
  permissionAllWrite: boolean | null;
  updatePermission: (topic: string, read: boolean, write: boolean) => any;
  updatePermissionAll: (read: boolean, write: boolean) => any;
}) {
  const individualPermissions =
    permissionAllRead !== null || permissionAllWrite !== null ? true : false;

  if (!permissions) {
    return <Loader />;
  }

  return (
    <>
      <Table size="sm">
        <thead>
          <tr>
            <td>&nbsp;</td>
            <td>
              {permissionAllRead !== null ? (
                permissionAllRead ? (
                  <Button
                    size="sm"
                    variant="outline-success"
                    onClick={() =>
                      updatePermissionAll(
                        !permissionAllRead,
                        permissionAllWrite
                      )
                    }
                  >
                    All Read Topics Enabled
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() =>
                      updatePermissionAll(
                        !permissionAllRead,
                        permissionAllWrite
                      )
                    }
                  >
                    All Read Topics Disabled
                  </Button>
                )
              ) : (
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => updatePermissionAll(false, false)}
                >
                  Permission Set per Topic
                </Button>
              )}
            </td>
            <td>
              {permissionAllWrite !== null ? (
                permissionAllWrite ? (
                  <Button
                    size="sm"
                    variant="outline-success"
                    onClick={() =>
                      updatePermissionAll(
                        permissionAllRead,
                        !permissionAllWrite
                      )
                    }
                  >
                    All Write Topics Enabled
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() =>
                      updatePermissionAll(
                        permissionAllRead,
                        !permissionAllWrite
                      )
                    }
                  >
                    All Write Topics Disabled
                  </Button>
                )
              ) : (
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => updatePermissionAll(false, false)}
                >
                  Permission Set per Topic
                </Button>
              )}
            </td>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => {
            return (
              <tr key={`permission-${permission.id}`}>
                <td>
                  <strong>{permission.topic}</strong>
                </td>
                <td>
                  <Form.Group controlId={`${permission.id}~read`}>
                    <Form.Check
                      checked={permission.read}
                      disabled={Boolean(permission.locked)}
                      type="checkbox"
                      label="Read Access"
                      onChange={() => {
                        updatePermission(
                          permission.topic,
                          !permission.read,
                          permission.write
                        );
                      }}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${permission.id}~write`}>
                    <Form.Check
                      checked={permission.write}
                      disabled={Boolean(permission.locked)}
                      type="checkbox"
                      label="Write Access"
                      onChange={() => {
                        updatePermission(
                          permission.topic,
                          permission.read,
                          !permission.write
                        );
                      }}
                    />
                  </Form.Group>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
