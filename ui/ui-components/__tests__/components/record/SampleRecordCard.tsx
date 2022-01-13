import { render, act } from "@testing-library/react";
import SampleRecordCard, {
  RecordType,
  SampleRecordCardProps,
} from "../../../components/record/SampleRecordCard";
import { UseApi } from "../../../hooks/useApi";
import { Models } from "../../../utils/apiData";

describe("SampleRecordCard", () => {
  let cardProps: SampleRecordCardProps;

  beforeEach(() => {
    cardProps = {
      execApi: UseApi(undefined).execApi,
      modelId: "test-model",
      fetchRecord: async () => ({}),
      properties: [],
    };
  });

  it("should render loading", () => {
    expect(
      render(<SampleRecordCard {...cardProps} />).container
    ).toMatchSnapshot();
  });

  it("should render with no records", async () => {
    cardProps.execApi = async () => ({ records: [], total: 0 } as any);
    let card: ReturnType<typeof render>;
    await act(async () => {
      card = render(<SampleRecordCard {...cardProps} />);
    });
    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record", async () => {
    const record: RecordType = {
      id: "test-record",
      modelId: "test-model",
      properties: {
        asdf: {
          id: "fake-property",
          configId: "fake-config-id",
          state: "pending",
          values: [2],
          type: "integer",
          unique: false,
          isPrimaryKey: true,
          isArray: false,
          confirmedAt: new Date(1000),
          valueChangedAt: new Date(1000),
          updatedAt: new Date(1000),
          stateChangedAt: new Date(1000),
          startedAt: new Date(1000),
          invalidValue: null,
          invalidReason: null,
          createdAt: new Date(1000),
        },
      },
    };
    cardProps.execApi = async () =>
      ({
        records: [record] as RecordType[],
        total: 1,
      } as any);
    const fetchRecord: (recordId?: string) => Promise<{
      record?: RecordType;
      groups?: Models.GroupType[];
      destinations?: Models.DestinationType[];
    }> = async () => {
      return {
        record,
        groups: [],
        destinations: [],
      };
    };
    cardProps.fetchRecord = fetchRecord;

    let card: ReturnType<typeof render>;
    await act(async () => {
      card = render(<SampleRecordCard {...cardProps} />);
    });
    expect(card.container).toMatchSnapshot();
  });
});
