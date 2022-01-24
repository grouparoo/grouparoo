import Head from "next/head";
import { NextPageContext } from "next";
import { useForm } from "react-hook-form";
import { Badge, Form } from "react-bootstrap";
import { useState } from "react";
import { UseApi } from "../../../../../hooks/useApi";
import DestinationTabs from "../../../../../components/tabs/Destination";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { Actions, Models } from "../../../../../utils/apiData";
import { errorHandler, successHandler } from "../../../../../eventHandlers";
import LoadingButton from "../../../../../components/LoadingButton";

type RetryFormValues = {
  fromDate: Date;
  toDate: Date;
};

export default function Page(props) {
  const {
    destination,
    model,
  }: {
    model: Models.GrouparooModelType;
    destination: Models.DestinationType;
  } = props;
  const [loading, setLoading] = useState(false);
  const [previewCount, setPreviewCount] = useState(0);
  const { execApi } = UseApi(props, errorHandler);

  const { handleSubmit, register, getValues } = useForm<RetryFormValues>();

  const retryFailedExports = async (
    fromDate: Date,
    toDate: Date,
    preview: boolean
  ) => {
    if (!fromDate || !toDate) return;

    if (!preview) setLoading(true);
    const response: Actions.ExportsRetryFailed = await execApi(
      "get",
      `/exports/retryFailed`,
      {
        destinationId: destination.id,
        startTimestamp: fromDate.getTime(),
        endTimestamp: toDate.getTime(),
        preview,
      },
      null,
      null,
      false
    );

    if (response) {
      if (preview) {
        setPreviewCount(response.count);
      } else {
        if (response.count) {
          successHandler.set({
            message: `Retrying ${response.count} failed exports...`,
          });
        } else {
          successHandler.set({
            message: "No failed exports to retry were found in this time range",
          });
        }
      }
    }

    setLoading(false);
  };

  const onSubmit = async ({ fromDate, toDate }: RetryFormValues) => {
    await retryFailedExports(fromDate, toDate, false);
    await updatePreview();
  };

  const updatePreview = async () => {
    const { fromDate, toDate } = getValues();
    return retryFailedExports(fromDate, toDate, true);
  };

  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs destination={destination} model={model} />

      <PageHeader
        icon={destination.app.icon}
        title={destination.name}
        badges={[
          <LockedBadge object={destination} />,
          <StateBadge state={destination.state} />,
          <ModelBadge
            modelName={destination.modelName}
            modelId={destination.modelId}
          />,
        ]}
      />

      <p>
        Retry failed exports for <b>{destination.name}</b> that were created in
        a given time frame.
      </p>
      <p>
        Exports to be retried: &nbsp;
        <Badge style={{ fontSize: 16 }} variant="info">
          {previewCount}
        </Badge>
      </p>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>From</Form.Label>
          <Form.Control
            autoFocus
            required
            type="datetime-local"
            name="fromDate"
            ref={register({ setValueAs: (v) => v && new Date(v) })}
            onChange={() => {
              updatePreview();
            }}
            disabled={loading}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>To</Form.Label>
          <Form.Control
            required
            type="datetime-local"
            name="toDate"
            ref={register({ setValueAs: (v) => v && new Date(v) })}
            onChange={() => {
              updatePreview();
            }}
            disabled={loading}
          />
        </Form.Group>

        <LoadingButton variant="primary" type="submit" loading={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { execApi } = UseApi(ctx);
  const { destinationId, modelId } = ctx.query;
  const { destination } = await execApi("get", `/destination/${destinationId}`);
  ensureMatchingModel("Destination", destination.modelId, modelId.toString());

  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );

  return { destination, model };
};
