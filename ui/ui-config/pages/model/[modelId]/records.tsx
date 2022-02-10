import { useRouter } from "next/router";
import { useState } from "react";

import {
  recordsHandler,
  successHandler,
} from "@grouparoo/ui-components/eventHandlers";
import RecordsPage from "@grouparoo/ui-components/pages/model/[modelId]/records";
import { Actions, Models } from "@grouparoo/ui-components/utils/apiData";
import LoadingButton from "@grouparoo/ui-components/components/LoadingButton";
import AddSampleRecordModal from "@grouparoo/ui-components/components/record/AddSampleRecordModal";
import { useApi } from "@grouparoo/ui-components/contexts/api";
import { NextPageContext } from "next";
import { useGrouparooModel } from "@grouparoo/ui-components/contexts/grouparooModel";

export default function Page(
  props: Awaited<ReturnType<typeof Page.getInitialProps>>
) {
  const { model } = useGrouparooModel();
  const router = useRouter();
  const { client } = useApi();

  const [importing, setImporting] = useState(false);
  const [addingRecord, setAddingRecord] = useState(false);
  const [reloading, setReloading] = useState(false);

  async function importAllRecords() {
    setImporting(true);
    successHandler.set({ message: "Importing Records..." });
    const response: Actions.RecordsImport = await client.request(
      "post",
      `/records/${model.id}/import`
    );
    if (response) {
      recordsHandler.publish(
        response.responses.map((r) => {
          return { id: r.recordId };
        })
      );
      successHandler.set({ message: "Import complete!" });
    }
    setImporting(false);
  }

  return (
    <>
      <RecordsPage {...props} />
      <LoadingButton
        disabled={addingRecord || importing}
        loading={reloading}
        variant="primary"
        onClick={() => setAddingRecord(true)}
      >
        Add Sample Record
      </LoadingButton>
      &nbsp;
      <LoadingButton
        variant="primary"
        onClick={() => importAllRecords()}
        disabled={addingRecord || reloading}
        loading={importing}
      >
        Import All Records
      </LoadingButton>
      <AddSampleRecordModal
        properties={props.properties}
        show={addingRecord}
        onRecordCreated={() => {
          setReloading(true);
          router.reload();
        }}
        onHide={() => {
          setAddingRecord(false);
        }}
      />
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  return await RecordsPage.getInitialProps(ctx);
};
