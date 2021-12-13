import { useState, useCallback, useMemo } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { Actions, Models } from "../../utils/apiData";
import SampleRecordCard, {
  SampleRecordCardProps,
} from "../record/SampleRecordCard";

interface Props {
  property: Models.PropertyType;
  localFilters: Actions.PropertyView["property"]["filters"];
}

const PropertySampleRecord: React.FC<
  Props & Omit<SampleRecordCardProps, "fetchRecord" | "highlightProperty">
> = ({ property, localFilters, ...props }) => {
  const { execApi } = props;
  const debouncedProperty = useDebouncedValue(property, 1000);
  const [errorMessage, setErrorMessage] = useState<string>();

  const reloadKey = useMemo(() => {
    return JSON.stringify([
      debouncedProperty.id,
      debouncedProperty.type,
      debouncedProperty.unique,
      debouncedProperty.isArray,
      debouncedProperty.options,
      debouncedProperty.filters,
      JSON.stringify(localFilters),
    ]);
  }, [
    debouncedProperty.id,
    debouncedProperty.type,
    debouncedProperty.unique,
    debouncedProperty.isArray,
    JSON.stringify(debouncedProperty.options),
    JSON.stringify(debouncedProperty.filters),
    JSON.stringify(localFilters),
  ]);

  const fetchRecord = useCallback(
    async (recordId: string) => {
      setErrorMessage(undefined);

      const response: Actions.PropertyRecordPreview = await execApi(
        "get",
        `/property/${debouncedProperty.id}/recordPreview`,
        {
          options: debouncedProperty.options,
          filters: localFilters,
          recordId,
        }
      );

      if (response?.record) {
        setErrorMessage(
          response.errorMessage
            ? response.errorMessage.match(
                /is required for a property of type/ // ignore errors about missing options
              )
              ? undefined
              : response.errorMessage
            : undefined
        );
        return response;
      }

      return {
        record: undefined,
        groups: undefined,
        destinations: undefined,
      };
    },
    [debouncedProperty]
  );

  return (
    <SampleRecordCard
      {...props}
      highlightProperty={debouncedProperty}
      highlightPropertyError={errorMessage}
      fetchRecord={fetchRecord}
      reloadKey={reloadKey}
    />
  );
};

export default PropertySampleRecord;
