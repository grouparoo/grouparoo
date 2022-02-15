import Head from "next/head";
import { useForm } from "react-hook-form";
import { Badge, Form } from "react-bootstrap";
import { useState } from "react";
import DestinationTabs from "../../../../../components/tabs/Destination";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { Actions } from "../../../../../utils/apiData";
import { successHandler } from "../../../../../eventHandlers";
import LoadingButton from "../../../../../components/LoadingButton";
import { useApi } from "../../../../../contexts/api";
import { generateClient } from "../../../../../client/client";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../../../utils/pageHelper";

interface RetryFormValues {
  fromDate: Date;
  toDate: Date;
}

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { destinationId, modelId } = ctx.query;
  const { destination } = await client.request<Actions.DestinationView>(
    "get",
    `/destination/${destinationId}`
  );
  ensureMatchingModel("Destination", destination.modelId, modelId.toString());

  return { props: { destination } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  destination,
}) => {
  const [loading, setLoading] = useState(false);
  const [previewCount, setPreviewCount] = useState(0);
  const { client } = useApi();

  const { handleSubmit, register, getValues } = useForm<RetryFormValues>();

  const retryFailedExports = async (
    fromDate: Date,
    toDate: Date,
    preview: boolean
  ) => {
    if (!fromDate || !toDate) return;

    if (!preview) setLoading(true);
    const response = await client.request<Actions.ExportsRetryFailed>(
      "get",
      `/exports/retryFailed`,
      {
        destinationId: destination.id,
        startTimestamp: fromDate.getTime(),
        endTimestamp: toDate.getTime(),
        preview,
      },
      { useCache: false }
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

      <DestinationTabs destination={destination} />

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
            {...register("fromDate", {
              setValueAs: (v) => v && new Date(v),
              onChange: () => {
                updatePreview();
              },
            })}
            disabled={loading}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>To</Form.Label>
          <Form.Control
            required
            type="datetime-local"
            name="toDate"
            {...register("toDate", {
              setValueAs: (v) => v && new Date(v),
              onChange: () => updatePreview(),
            })}
            disabled={loading}
          />
        </Form.Group>

        <LoadingButton variant="primary" type="submit" loading={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
};

export default Page;
