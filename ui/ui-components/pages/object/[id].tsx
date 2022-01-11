import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import Link from "../../components/GrouparooLink";
import { useRouter } from "next/router";
import { UseApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { Card } from "react-bootstrap";
import { singular } from "pluralize";
import { ErrorHandler } from "../../utils/errorHandler";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function FindObject(props) {
  const router = useRouter();
  const {
    errorHandler,
    navigationModel,
  }: {
    errorHandler: ErrorHandler;
    navigationModel: Actions.NavigationList["navigationModel"];
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [error, setError] = useState<string>(null);
  const [records, setRecords] = useState<string[]>([]);

  const id = router.query.id?.toString();

  const detailPages = {
    records: redirectTopicWithModel("record"),
    groups: redirectTopicWithModel("group", "members"),
    destinations: redirectTopicWithModel("destination"),
    sources: redirectTopicWithModel("source", "overview"),
    properties: redirectProperty,
    schedules: redirectSchedule,
  };

  const editPagesForCommunityEdition = ["records"];

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response: Actions.ObjectFind = await execApi("get", `/object/${id}`);
    const table = response?.records[0]?.tableName?.toLowerCase();
    const itemsFound = response?.records?.length ?? 0;
    if (itemsFound === 0) {
      setError(`Cannot find object "${id}"`);
    } else if (
      itemsFound === 1 &&
      (grouparooUiEdition() === "enterprise" ||
        editPagesForCommunityEdition.includes(table))
    ) {
      const detailPage = detailPages[table] || "edit";
      if (typeof detailPage === "function") {
        await detailPage(id);
      } else {
        router.replace(`/${singular(table)}/${id}/${detailPage}`);
      }
    } else if (itemsFound === 1 && grouparooUiEdition() === "community") {
      const listPage = getListPage(table);
      router.replace(listPage);
    } else {
      setRecords(response.records.map((r) => r.tableName.toLowerCase()));
    }
  }

  async function redirectSchedule(id: string) {
    const response: Actions.ScheduleView = await execApi(
      "get",
      `/schedule/${id}`
    );

    if (!response || !response.schedule) {
      setError(`Cannot find object "${id}"`);
      return;
    }

    const { source }: Actions.SourceView = await execApi(
      "get",
      `/source/${response.schedule.sourceId}`
    );

    router.replace(
      `/model/[modelId]/source/[sourceId]/schedule`,
      `/model/${source.modelId}/source/${response.schedule.sourceId}/schedule`
    );
  }

  async function redirectProperty(id: string) {
    const response: Actions.PropertyView = await execApi(
      "get",
      `/property/${id}`
    );

    if (!response || !response.property) {
      setError(`Cannot find object "${id}"`);
      return;
    }

    const { source }: Actions.SourceView = await execApi(
      "get",
      `/source/${response.property.sourceId}`
    );

    router.replace(
      `/model/[modelId]/property/[propertyId]/edit`,
      `/model/${source.modelId}/property/${id}/edit`
    );
  }

  function redirectTopicWithModel(topic: string, page: string = "edit") {
    return async function (id: string) {
      const response = await execApi("get", `/${topic}/${id}`);

      if (!response || !response[topic]) {
        setError(`Cannot find object "${id}"`);
        return;
      }

      router.replace(
        `/model/[modelId]/${topic}/[${topic}Id]/${page}`,
        `/model/${response[topic].modelId}/${topic}/${response[topic].id}/${page}`
      );
    };
  }

  function getListPage(tableName: string) {
    const byModel = [
      "records",
      "groups",
      "destinations",
      "sources",
      "properties",
      "schedules",
    ];
    if (byModel.includes(tableName) && props.navigationModel.value) {
      return `/model/${navigationModel.value}/${tableName}`;
    }

    return `/${tableName}`;
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
                        grouparooUiEdition() === "enterprise" &&
                        typeof detailPage === "string"
                          ? `/${singular(r)}/${id}/${detailPage}`
                          : getListPage(r)
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
