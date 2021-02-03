import Loader from "../../components/loader";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { Card } from "react-bootstrap";
import { singular } from "pluralize";

const detailPages = {
  groups: "members",
  sources: "overview",
};

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
      const table = response.records[0].tableName.toLowerCase();
      const detailPage = detailPages[table] || "edit";
      router.push(`/${singular(table)}/${id}/${detailPage}`);
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
            {records.map((r) => {
              const detailPage = detailPages[r] || "edit";
              return (
                <tr>
                  <td>{id} in </td>
                  <td>
                    <Link
                      href={
                        process.env.GROUPAROO_UI_EDITION === "enterprise"
                          ? `/${singular(r)}/${id}/${detailPage}`
                          : `/${r}`
                      }
                    >
                      <a>{r}</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
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
