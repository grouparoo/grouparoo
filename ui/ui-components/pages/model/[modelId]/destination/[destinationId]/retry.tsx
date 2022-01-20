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

import LoadingButton from "../../../../../components/LoadingButton";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";

export default function Page(props) {
  const {
    destination,
    model,
    errorHandler,
    successHandler,
  }: {
    model: Models.GrouparooModelType;
    destination: Models.DestinationType;
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
  } = props;
  const [loading, setLoading] = useState(false);
  const [previewCount, setPreviewCount] = useState(0);
  const { execApi } = UseApi(props, errorHandler);

  const { handleSubmit, register, getValues } = useForm();

  const onSubmit = ({ fromDate, toDate }: { fromDate: Date; toDate: Date }) => {
    console.log("submit", fromDate, toDate);
  };

  const updatePreview = async () => {
    const { fromDate, toDate } = getValues();
    if (!fromDate || !toDate) return;
    const response: Actions.ExportsRetryFailed = await execApi(
      "get",
      `/exports/retryFailed`,
      {
        destinationId: destination.id,
        startTimestamp: fromDate.getTime(),
        endTimestamp: toDate.getTime(),
        preview: true,
      },
      null,
      null,
      false
    );

    if (response) {
      setPreviewCount(response.count);
    }
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
