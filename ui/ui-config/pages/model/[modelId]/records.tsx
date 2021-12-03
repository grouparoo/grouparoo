import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import RecordsPage from "@grouparoo/ui-components/pages/model/[modelId]/records";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";
import { RecordsHandler } from "@grouparoo/ui-components/utils/recordsHandler";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useState } from "react";
import LoadingButton from "@grouparoo/ui-components/components/LoadingButton";

export default function Page(props) {
  const {
    modelId,
    errorHandler,
    successHandler,
    recordsHandler,
  }: {
    modelId: string;
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    recordsHandler: RecordsHandler;
  } = props;
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);

  async function importAllRecords() {
    setLoading(true);
    successHandler.set({ message: "enqueued for import..." });
    const response: Actions.RecordsImport = await execApi(
      "post",
      `/records/${modelId}/import`
    );
    if (response) {
      recordsHandler.publish(
        response.responses.map((r) => {
          return { id: r.recordId };
        })
      );
      successHandler.set({ message: "Import Complete!" });
    }
    setLoading(false);
  }
  return (
    <>
      <RecordsPage {...props} />
      <Button
        variant="primary"
        onClick={() => {
          router.push(
            "/model/[modelId]/record/new",
            `/model/${router.query.modelId}/record/new`
          );
        }}
      >
        Add Sample Record
      </Button>
      &nbsp;
      <LoadingButton
        variant="primary"
        onClick={() => importAllRecords()}
        disabled={loading}
      >
        Import All Records
      </LoadingButton>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return RecordsPage.getInitialProps(ctx);
};
