import { Fragment, useState } from "react";
import { UseApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "../Pagination";
import LoadingTable from "../LoadingTable";
import { Alert } from "react-bootstrap";
import { Models, Actions } from "../../utils/apiData";
import { formatTimestamp } from "../../utils/formatTimestamp";
import { ErrorHandler } from "../../utils/errorHandler";
import { ImportRecordPropertiesDiff, ImportGroupsDiff } from "./Diff";

export default function ImportList(props) {
  const {
    errorHandler,
    groups,
  }: { errorHandler: ErrorHandler; groups: Models.GroupType[] } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [imports, setImports] = useState<Models.ImportType[]>(props.imports);
  const [total, setTotal] = useState(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  let recordId = router.query.recordId;
  let creatorId: string;
  if (router.query.creatorId) {
    creatorId = router.query.creatorId.toString();
  }

  useSecondaryEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);

    const response: Actions.ImportsList = await execApi("get", `/imports`, {
      limit,
      offset,
      creatorId,
      recordId,
    });
    setLoading(false);
    if (response?.imports) {
      setImports(response.imports);
      setTotal(response.total);
    }
  }

  return (
    <>
      {props.header ? props.header : <h1>Imports</h1>}

      <p>
        {total} imports {creatorId ? `for ${creatorId}` : null}{" "}
        {recordId ? `for record ${recordId}` : null}
      </p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Ids</th>
            <th>Times</th>
            <th>Record Properties</th>
            <th>Groups</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {imports.map((_import) => {
            return (
              <Fragment key={`import-${_import.id}`}>
                <tr>
                  <td>
                    id:
                    <Link href={`/import/${_import.id}/edit`}>
                      <a> {_import.id}</a>
                    </Link>
                    <br /> Record:{" "}
                    {_import.recordId ? (
                      <Link href={`/object/${_import.recordId}`}>
                        <a>{_import.recordId}</a>
                      </Link>
                    ) : (
                      "none"
                    )}
                    <br />
                    Model:{" "}
                    <Link href={`/model/${_import.modelId}/edit`}>
                      <a>{_import.modelId}</a>
                    </Link>
                    <br />
                    Creator:{" "}
                    {_import.creatorType === "run" ? (
                      <Link href={`/run/${_import.creatorId}/edit`}>
                        <a>{_import.creatorId}</a>
                      </Link>
                    ) : (
                      _import.creatorId
                    )}
                  </td>
                  <td>
                    Created: {formatTimestamp(_import.createdAt)}
                    <br /> Record Associated:{" "}
                    {_import.recordAssociatedAt
                      ? formatTimestamp(_import.recordAssociatedAt)
                      : "pending"}
                    <br /> Record Updated:{" "}
                    {_import.recordUpdatedAt
                      ? formatTimestamp(_import.recordUpdatedAt)
                      : "pending"}
                    <br /> Groups Updated:{" "}
                    {_import.groupsUpdatedAt
                      ? formatTimestamp(_import.groupsUpdatedAt)
                      : "pending"}
                  </td>
                  <td>
                    <ImportRecordPropertiesDiff _import={_import} />
                  </td>
                  <td>
                    <ImportGroupsDiff _import={_import} groups={groups} />
                  </td>
                  <td>
                    {Object.keys(_import.data).map((k) => (
                      <li key={`import-${_import.id}-${k}`}>
                        {k}: {_import.data[k].toString()}
                      </li>
                    ))}
                  </td>
                </tr>

                {_import.errorMessage ? (
                  <tr>
                    <td colSpan={7} style={{ border: 0 }}>
                      <Alert variant="warning">
                        {_import.errorMessage}
                        {_import.errorMetadata ? (
                          <EventErrorMetadata import={_import} />
                        ) : null}
                      </Alert>
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </LoadingTable>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
    </>
  );
}

ImportList.hydrate = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { creatorId, limit, offset, recordId } = ctx.query;

  const { imports, total } = await execApi("get", `/imports`, {
    limit,
    offset,
    creatorId,
    recordId,
  });

  const { groups } = await execApi("get", `/groups`);
  return { groups, imports, total };
};

function EventErrorMetadata({ import: _import }) {
  const data = JSON.parse(_import.errorMetadata);

  return (
    <>
      <br />
      <br />
      <p>
        step: <code>{data.step}</code>
      </p>
    </>
  );
}
