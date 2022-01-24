import { act, render } from "@testing-library/react";
import SampleRecordCard, {
  RecordType,
  SampleRecordCardProps,
} from "../../../components/record/SampleRecordCard";
import { ApiContext } from "../../../contexts/api";
import { Models } from "../../../utils/apiData";

describe("SampleRecordCard", () => {
  let cardProps: SampleRecordCardProps;

  beforeEach(() => {
    cardProps = {
      modelId: "test-model",
      fetchRecord: async () => ({}),
      properties: [],
    };
    require("../../../components/record/SampleRecordCard").isConfigUI = false;
  });

  it("should render with no records", async () => {
    cardProps.properties = [{ id: "some-property", sourceId: "some-source" }];

    let card: ReturnType<typeof render>;
    await act(async () => {
      card = render(
        <ApiContext.Provider
          value={{
            client: {
              request: async () => ({
                records: [],
                total: 0,
              }),
            } as any,
          }}
        >
          <SampleRecordCard {...cardProps} />
        </ApiContext.Provider>
      );
    });
    expect(card.container).toMatchSnapshot();
  });

  it("should render with no records in 'config mode'", async () => {
    require("../../../components/record/SampleRecordCard").isConfigUI = true;
    cardProps.properties = [{ id: "some-property", sourceId: "some-source" }];

    let card: ReturnType<typeof render>;
    await act(async () => {
      card = render(
        <ApiContext.Provider
          value={{
            client: {
              request: async () => ({
                records: [],
                total: 0,
              }),
            } as any,
          }}
        >
          <SampleRecordCard {...cardProps} />
        </ApiContext.Provider>
      );
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
          sourceId: "some-source",
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
      card = render(
        <ApiContext.Provider
          value={{
            client: {
              request: async () => ({
                records: [record],
                total: 1,
              }),
            } as any,
          }}
        >
          <SampleRecordCard {...cardProps} />
        </ApiContext.Provider>
      );
    });
    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record in config mode", async () => {
    require("../../../components/record/SampleRecordCard").isConfigUI = true;
    const record: RecordType = {
      id: "test-record",
      modelId: "test-model",
      properties: {
        asdf: {
          id: "fake-property",
          sourceId: "some-source",
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
      card = render(
        <ApiContext.Provider
          value={{
            client: {
              request: async () => ({
                records: [record],
                total: 1,
              }),
            } as any,
          }}
        >
          <SampleRecordCard {...cardProps} />
        </ApiContext.Provider>
      );
    });
    expect(card.container).toMatchSnapshot();
  });
});
