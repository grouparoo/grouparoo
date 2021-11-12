import { useState, useEffect } from "react";
import { UseApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../Loader";
import RecordImageFromEmail from "../visualizations/RecordImageFromEmail";
import { useRouter } from "next/router";
import { Actions } from "../../utils/apiData";

function canBeDate(
  date: number | string | Date | boolean | null | undefined
): date is number | string | Date {
  return ["number", "string"].includes(typeof date) || date instanceof Date;
}

export const generatePreviewDate = (
  date: number | string | Date | boolean | null | undefined
) => (canBeDate(date) ? new Date(date).toLocaleString() : null);

export default function RecordPreview(props) {
  const { errorHandler, property, localFilters } = props;
  const router = useRouter();
  const [recordId, setRecordId] = useState(router.query.recordId?.toString());
  const [toHide, setToHide] = useState(true);
  const [record, setRecord] = useState<Partial<Actions.RecordView["record"]>>({
    id: "",
    properties: {},
  });
  const [sleeping, setSleeping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [debounceCounter, setDebounceCounter] = useState(0);
  const { execApi } = UseApi(props, errorHandler);

  const sleep = debounceCounter === 0 ? 0 : 1000; // we only want to make one request every ~second, so wait for more input

  let timer: NodeJS.Timeout;

  useEffect(() => {
    load();

    return () => {
      clearTimeout(timer);
    };
  }, [
    property.id,
    property.type,
    property.unique,
    property.isArray,
    JSON.stringify(property.options),
    JSON.stringify(property.filters),
    JSON.stringify(localFilters),
  ]);

  function storeRecordPropertyId(recordId = "") {
    setRecordId(recordId);
    let url = `${window.location.pathname}?`;
    if (recordId) url += `recordId=${recordId}&`;

    if (url !== `${window.location.pathname}?`) {
      router.replace(router.route, url, { shallow: true });
    }
  }

  async function load(
    _recordId = recordId === "" ? undefined : recordId,
    _sleep = sleep
  ) {
    setSleeping(true);
    setErrorMessage("");
    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const response: Actions.PropertyRecordPreview = await execApi(
        "get",
        `/property/${property.id}/recordPreview`,
        {
          options: property.options,
          filters: localFilters,
          recordId: _recordId,
        }
      );

      if (response?.record) {
        setToHide(false);
        setErrorMessage(
          response.errorMessage
            ? response.errorMessage.match(
                /is required for a property of type/ // ignore errors about missing options
              )
              ? ""
              : response.errorMessage
            : ""
        );
        setRecord(response.record);
        storeRecordPropertyId(response.record.id);
      }

      setSleeping(false);
    }, _sleep);
  }

  function chooseRecordProperty() {
    const _recordId = prompt("Enter Record Id", recordId);
    if (_recordId) {
      storeRecordPropertyId(_recordId);
      load(_recordId, 1);
    }
  }

  if (toHide) {
    return (
      <Card bg="light">
        <Card.Body style={{ textAlign: "center" }}>
          Record preview unavailable
        </Card.Body>
      </Card>
    );
  }

  let email: string;
  for (const key in record.properties) {
    if (
      record.properties[key].type === "email" &&
      record.properties[key].values.length > 0
    ) {
      email = record.properties[key].values[0]?.toString();
    }
  }

  let thisPropertyValue: string;
  const otherProperties = {};
  for (const i in record.properties) {
    if (record.properties[i].id === property.id) {
      if (property.type === "date" && record.properties[i].values) {
        thisPropertyValue = generatePreviewDate(record.properties[i].values[0]);
      } else {
        thisPropertyValue = record.properties[i].values
          ? record.properties[i]?.values.slice(0, 10).join(", ")
          : "";
      }
    } else {
      otherProperties[i] = record.properties[i];
    }
  }

  return (
    <Card bg="light">
      <Card.Body style={{ textAlign: "center", color: "white" }}>
        <Card.Title>Example Record</Card.Title>
        {sleeping ? (
          <>
            <br />
            <Loader />
          </>
        ) : (
          <>
            <RecordImageFromEmail email={email} width={100} />
            <br />
            <Card.Link
              href={`/model/${record.modelId}/record/${record.id}/edit`}
              style={{ color: "white" }}
            >
              View Record
            </Card.Link>
            <br />
            <small onClick={chooseRecordProperty}>change</small>
          </>
        )}
      </Card.Body>

      {sleeping ? null : (
        <ListGroup variant="flush">
          <ListGroup.Item variant={errorMessage !== "" ? "danger" : "success"}>
            <strong>
              {property.key === "" ? "Draft Record Property" : property.key}
            </strong>
            :{" "}
            {errorMessage !== ""
              ? errorMessage
              : thisPropertyValue
              ? thisPropertyValue
              : "..."}
          </ListGroup.Item>

          {Object.keys(otherProperties).map((k) => (
            <ListGroup.Item key={`record-preview-row-${k}`} variant="light">
              <strong>{k}</strong>:{" "}
              {otherProperties[k]?.type === "date"
                ? generatePreviewDate(otherProperties[k]?.values[0])
                : otherProperties[k]?.values?.slice(0, 10).join(", ")}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
}
