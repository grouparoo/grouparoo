import { useCallback } from "react";
import SampleRecordCard, {
  SampleRecordCardProps,
} from "../../record/SampleRecordCard";
import { Actions } from "../../../utils/apiData";

const ModelOverviewSampleRecord: React.FC<
  Omit<SampleRecordCardProps, "fetchRecord">
> = (props) => {
  const { execApi } = props;
  const fetchRecord = useCallback(
    (recordId: string) =>
      execApi<Actions.RecordView>("get", `/record/${recordId}`),
    [execApi]
  );

  return <SampleRecordCard {...props} fetchRecord={fetchRecord} />;
};

export default ModelOverviewSampleRecord;
