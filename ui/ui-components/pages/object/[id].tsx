import Loader from "../../components/loader";
import { useEffect, useState } from "react";
import Link from "../../components/enterpriseLink";
import { useRouter } from "next/router";
import { UseApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { Card } from "react-bootstrap";
import { singular } from "pluralize";
import { ErrorHandler } from "../../utils/errorHandler";

export default function FindObject(props) {
  const router = useRouter();
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [error, setError] = useState<string>(null);
  const [records, setRecords] = useState<string[]>([]);

  const id = router.query.id?.toString();

  const detailPages = {
    groups: "members",
    sources: "overview",
    schedules: redirectSchedule,
  };

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
      if (typeof detailPage === "function") {
        await detailPage(id);
      } else {
        router.push(`/${singular(table)}/${id}/${detailPage}`);
      }
    } else if (
      response.records.length === 1 &&
      process.env.GROUPAROO_UI_EDITION === "community"
    ) {
      router.push(`/${response.records[0].tableName.toLowerCase()}`);
    } else {
      setRecords(response.records.map((r) => r.tableName.toLowerCase()));
    }
  }

  async function redirectSchedule(id: string) {
    const response: Actions.ScheduleView = await execApi(
      "get",
      `/schedule/${id}`
    );
    if (response?.schedule) {
      router.push(
        `/source/[id]/schedule`,
        `/source/${response.schedule.sourceId}/schedule`
      );
    } else {
      setError(`Cannot find object "${id}"`);
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
                        process.env.GROUPAROO_UI_EDITION === "enterprise" &&
                        typeof detailPage === "string"
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
