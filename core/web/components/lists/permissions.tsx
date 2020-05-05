import { Table, Form } from "react-bootstrap";

interface Permission {
  guid: string;
  topic: string;
  read: boolean;
  write: boolean;
  locked: boolean;
}

export default function PermissionsList({
  permissions,
  update,
}: {
  permissions: Permission[];
  update: (topic: string, read: boolean, write: boolean) => any;
}) {
  return (
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
                      update(
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
                      update(
                        permission.topic,
                        permission.read,
                        !permission.write
                      )
                    }
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId={`${permission.guid}~locked`}>
                  <Form.Check
                    disabled
                    defaultChecked={permission.locked}
                    type="checkbox"
                    label="Locked"
                  />
                </Form.Group>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
