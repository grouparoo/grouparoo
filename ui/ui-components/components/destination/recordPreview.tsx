import { useState, useEffect } from "react";
import { UseApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../Loader";
import { useRouter } from "next/router";
import { ErrorHandler } from "../../utils/errorHandler";
import { Models, Actions } from "../../utils/apiData";

export default function RecordPreview(props) {
  const {
    errorHandler,
    destination,
    collection,
    groupId,
    modelId,
    mappingOptions,
  }: {
    errorHandler: ErrorHandler;
    destination: Models.DestinationType;
    collection: Models.DestinationType["collection"];
    groupId: string;
    modelId: string;
    mappingOptions: Actions.DestinationMappingOptions["options"];
  } = props;
  const router = useRouter();
  const [recordId, setRecordId] = useState(router.query.recordId?.toString());
  const [toHide, setToHide] = useState(true);
  const [record, setRecord] = useState<
    Partial<Actions.DestinationRecordPreview["record"]>
  >({
    id: "",
    properties: {},
    groupNames: [],
  });
  const [sleeping, setSleeping] = useState(false);
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
    destination.id,
    groupId,
    collection,
    JSON.stringify(destination.group),
    JSON.stringify(destination.mapping),
    JSON.stringify(destination.destinationGroupMemberships),
  ]);

  function storeRecordPropertyId(recordId = "") {
    setRecordId(recordId);
    let url = `${window.location.pathname}?`;
    if (recordId) url += `recordId=${recordId}&`;

    if (url !== `${window.location.pathname}?`) {
      router.replace(router.route, url, { shallow: true });
    }
  }

  async function load(_recordId = "", _sleep = sleep) {
    setSleeping(true);
    setToHide(false);
    storeRecordPropertyId(_recordId);

    if (collection === "none" || (collection === "group" && !groupId)) {
      setToHide(true);
      return;
    }

    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const destinationGroupMembershipsObject = {};
      destination.destinationGroupMemberships.forEach(
        (dgm) =>
          (destinationGroupMembershipsObject[dgm.groupId] = dgm.remoteKey)
      );

      const { record }: Actions.DestinationRecordPreview = await execApi(
        "get",
        `/destination/${destination.id}/recordPreview`,
        {
          groupId: groupId,
          modelId: modelId,
          mapping: destination.mapping,
          destinationGroupMemberships: destinationGroupMembershipsObject,
          recordId: _recordId !== "" ? _recordId : undefined,
        }
      );

      setSleeping(false);

      if (record) {
        setToHide(false);
        setRecord(record);
        storeRecordPropertyId(record.id);
      } else {
        setToHide(true);
      }
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

  let email;
  for (const key in record.properties) {
    if (record.properties[key].type === "email") {
      email = record.properties[key].values[0];
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
            <Card.Link
              href={`/model/${record.modelId}/record/${record.id}/edit`}
              style={{ color: "white" }}
            >
              View Record
            </Card.Link>{" "}
            <br />
            <small onClick={chooseRecordProperty}>change</small>
          </>
        )}
      </Card.Body>

      {sleeping ? null : (
        <>
          <Card.Body style={{ textAlign: "center" }}>
            <strong>{mappingOptions?.labels?.property?.plural}</strong>
          </Card.Body>

          <ListGroup variant="flush">
            {Object.keys(record.properties).map((k) => (
              <ListGroup.Item key={`record-prop-${k}`} variant="light">
                <strong>{k}</strong>:{" "}
                {record.properties[k]?.type === "date"
                  ? record.properties[k]?.values[0]
                    ? new Date(
                        record.properties[k]?.values[0].toString()
                      ).toLocaleString()
                    : null
                  : record.properties[k]?.values?.slice(0, 10).join(", ")}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card.Body style={{ textAlign: "center" }}>
            <strong>{mappingOptions?.labels?.group?.plural}</strong>
          </Card.Body>

          <ListGroup variant="flush">
            {record.groupNames.map((groupName) => (
              <ListGroup.Item key={`record-prop-${groupName}`} variant="light">
                <strong>{groupName}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Card>
  );
}
