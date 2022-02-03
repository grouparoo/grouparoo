import { useState, useCallback, useMemo } from "react";
import { useApi } from "../../contexts/api";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { Actions, Models } from "../../utils/apiData";
import SampleRecordCard, {
  SampleRecordCardProps,
} from "../record/SampleRecordCard";

interface Props {
  property: Models.PropertyType;
  localFilters: Actions.PropertyView["property"]["filters"];
}

type SampleRecordOmittedProps = Omit<
  SampleRecordCardProps,
  | "fetchRecord"
  | "reloadKey"
  | "highlightProperty"
  | "highlightPropertyError"
  | "importDisabled"
>;

const PropertySampleRecord: React.FC<Props & SampleRecordOmittedProps> = ({
  property,
  localFilters,
  ...props
}) => {
  const debouncedProperty = useDebouncedValue(property, 1000);
  const [errorMessage, setErrorMessage] = useState<string>();
  const { client } = useApi();

  const reloadKey = useMemo(
    () =>
      JSON.stringify([
        debouncedProperty.id,
        debouncedProperty.key,
        debouncedProperty.type,
        debouncedProperty.unique,
        debouncedProperty.isArray,
        debouncedProperty.options,
        debouncedProperty.filters,
        localFilters,
      ]),
    [debouncedProperty, localFilters]
  );

  const fetchRecord = useCallback(
    async (recordId: string) => {
      setErrorMessage(undefined);

      const response: Actions.PropertyRecordPreview = await client.request(
        "get",
        `/property/${debouncedProperty.id}/recordPreview`,
        {
          options: debouncedProperty.options,
          filters: localFilters,
          recordId,
        }
      );

      if (
        response?.errorMessage &&
        !response.errorMessage.match(
          /is required for a property of type/ // ignore errors about missing options
        )
      ) {
        setErrorMessage(response.errorMessage);
      }

      if (response?.record) {
        return response;
      }

      return {};
    },
    [client, debouncedProperty.id, debouncedProperty.options, localFilters]
  );

  return (
    <SampleRecordCard
      {...props}
      highlightProperty={debouncedProperty}
      highlightPropertyError={errorMessage}
      fetchRecord={fetchRecord}
      reloadKey={reloadKey}
      importDisabled
    />
  );
};

export default PropertySampleRecord;
