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

const editPagesForCommunityEdition: readonly string[] = ["records"];

export default function FindObject(props) {
  const router = useRouter();
  const {
    errorHandler,
  }: {
    errorHandler: ErrorHandler;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [error, setError] = useState<string>(null);
  const [results, setResults] = useState<{ name: string; href: string }[]>();

  const id = router.query.id?.toString();

  const detailPages = {
    records: redirectTopicWithModel("record"),
    groups: redirectTopicWithModel("group", "members"),
    destinations: redirectTopicWithModel("destination"),
    sources: redirectTopicWithModel("source", "overview"),
    properties: redirectProperty,
    schedules: redirectSchedule,
  };

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response: Actions.ObjectFind = await execApi("get", `/object/${id}`);
    const table: string = response?.records[0]?.tableName?.toLowerCase();
    const itemsFound: number = response?.records?.length ?? 0;
    const uiEdition = grouparooUiEdition();

    if (itemsFound === 0) {
      setError(`Cannot find object "${id}"`);
    } else if (
      itemsFound === 1 &&
      (uiEdition === "enterprise" ||
        editPagesForCommunityEdition.includes(table))
    ) {
      const detailPage = detailPages[table] || "edit";
      if (typeof detailPage === "function") {
        await detailPage(id);
      } else {
        router.replace(`/${singular(table)}/${id}/${detailPage}`);
      }
    } else if (itemsFound === 1 && uiEdition === "community") {
      await replaceWithListPage(table);
    } else {
      const isEnterpriseUI = uiEdition === "enterprise";
      const tableNames = response.records.map((r) => r.tableName.toLowerCase());

      const nextResults: { name: string; href: string }[] = [];
      for (const name of tableNames) {
        const detailPage = detailPages[name] || "edit";
        const href =
          isEnterpriseUI && typeof detailPage === "string"
            ? `/${singular(name)}/${id}/${detailPage}`
            : await getListPage(name);

        nextResults.push({ name, href });
      }

      setResults(nextResults);
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

  async function getListPage(topic: string) {
    const singularTopic = singular(topic);
    const response = await execApi("get", `/${singularTopic}/${id}`);

    if (!response || !response[singularTopic]) {
      setError(`Cannot find object "${id}"`);
      return undefined;
    }

    const page = topic === "records" ? topic : "overview";
    const modelId = response[singularTopic].modelId;
    return `/model/${modelId}/${page}`;
  }

  async function replaceWithListPage(topic: string) {
    const href = await getListPage(topic);
    if (href) {
      const page = topic === "records" ? topic : "overview";
      router.replace(`/model/[modelId]/${page}`, href);
    }
  }

  return results?.length > 0 ? (
    <>
      <h2>Multiple objects found:</h2>
      <table>
        <tbody>
          {results.map(({ name, href }) => {
            return (
              <tr>
                <td>{id} in </td>
                <td>
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  ) : error ? (
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
  );
}
