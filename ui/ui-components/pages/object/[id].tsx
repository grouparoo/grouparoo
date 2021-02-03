import Loader from "../../components/loader";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { Card } from "react-bootstrap";
import { singular } from "pluralize";

export default function FindObject(props) {
  const router = useRouter();
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [error, setError] = useState<string>(null);
  const [records, setRecords] = useState<string[]>([]);

  const id = router.query.id?.toString();

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response: Actions.ObjectFind = await execApi("get", `/object/${id}`);
    if (response.records.length === 0) {
      setError(`Cannot find object "${id}"`);
    } else if (
      response.records.length === 1 &&
      process.env.GROUPAROO_UI_EDITION === "enterprise"
    ) {
      router.push(
        `/${singular(response.records[0].tableName.toLowerCase())}/${id}/edit`
      );
    } else if (
      response.records.length === 1 &&
      process.env.GROUPAROO_UI_EDITION === "community"
    ) {
      router.push(`/${response.records[0].tableName.toLowerCase()}`);
    } else {
      setRecords(response.records.map((r) => r.tableName.toLowerCase()));
    }
  }

  if (records.length > 0) {
    return (
      <>
        <h2>Multiple objects found:</h2>
        <table>
          <tbody>
            {records.map((r) => (
              <tr>
                <td>{id} in </td>
                <td>
                  <Link
                    href={
                      process.env.GROUPAROO_UI_EDITION === "enterprise"
                        ? `/${singular(r)}/${id}/edit`
                        : `/${r}`
                    }
                  >
                    <a>{r}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      {error ? (
        <Card border={"warning"}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{error}</p>
            </blockquote>
          </Card.Body>
        </Card>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Loader />{" "}
        </div>
      )}
    </>
  );
}
