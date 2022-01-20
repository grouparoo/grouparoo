import { useCallback } from "react";
import SampleRecordCard, {
  SampleRecordCardProps,
} from "../../record/SampleRecordCard";
import { Actions } from "../../../utils/apiData";
import { useApi } from "../../../contexts/api";

const ModelOverviewSampleRecord: React.FC<
  Omit<SampleRecordCardProps, "fetchRecord">
> = (props) => {
  const { client } = useApi();
  const fetchRecord = useCallback(
    (recordId: string) =>
      client.action<Actions.RecordView>("get", `/record/${recordId}`),
    [client]
  );

  return <SampleRecordCard {...props} fetchRecord={fetchRecord} />;
};

export default ModelOverviewSampleRecord;
