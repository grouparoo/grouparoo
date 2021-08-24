import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../loader";
import { useRouter } from "next/router";
import { ErrorHandler } from "../../utils/errorHandler";
import { Models, Actions } from "../../utils/apiData";

export default function RecordPreview(props) {
  const {
    errorHandler,
    destination,
    trackedGroupId,
    mappingOptions,
  }: {
    errorHandler: ErrorHandler;
    destination: Models.DestinationType;
    trackedGroupId: string;
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
  const { execApi } = useApi(props, errorHandler);

  const sleep = debounceCounter === 0 ? 0 : 1000; // we only want to make one request every ~second, so wait for more input

  let timer: NodeJS.Timeout;

  useEffect(() => {
    load();

    return () => {
      clearTimeout(timer);
    };
  }, [
    destination.id,
    trackedGroupId,
    JSON.stringify(destination.destinationGroup),
    JSON.stringify(destination.mapping),
    JSON.stringify(destination.destinationGroupMemberships),
  ]);

  function storeRecordPropertyId(recordId: string = "") {
    setRecordId(recordId);
    let url = `${window.location.pathname}?`;

    if (recordId !== "") {
      url += `recordId=${recordId}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    router[routerMethod](router.route, url, { shallow: true });
  }

  async function load(_recordId = "", _sleep = sleep) {
    setSleeping(true);
    setToHide(false);
    storeRecordPropertyId(_recordId);

    if (trackedGroupId === "_none") {
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
          groupId: trackedGroupId,
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
              href={`/record/${record.id}/edit`}
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
            <strong>{mappingOptions?.labels?.property.plural}</strong>
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
            <strong>{mappingOptions?.labels?.group.plural}</strong>
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
