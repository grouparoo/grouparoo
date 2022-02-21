import { act, render } from "@testing-library/react";
import SampleRecordCard, {
  RecordType,
  SampleRecordCardProps,
} from "../../../components/record/SampleRecordCard";
import { Models } from "../../../utils/apiData";
import { TestContextProvider } from "../../__utils__/ContextProvider";

describe("SampleRecordCard", () => {
  let cardProps: SampleRecordCardProps;
  const modelId = "test-model";

  beforeEach(() => {
    cardProps = {
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
        <TestContextProvider
          model={{ id: modelId }}
          client={
            {
              request: async () => ({
                records: [],
                total: 0,
              }),
            } as any
          }
        >
          <SampleRecordCard {...cardProps} />
        </TestContextProvider>
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
        <TestContextProvider
          model={{ id: modelId }}
          client={
            {
              request: async () => ({
                records: [],
                total: 0,
              }),
            } as any
          }
        >
          <SampleRecordCard {...cardProps} />
        </TestContextProvider>
      );
    });
    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record", async () => {
    const record: RecordType = {
      id: "test-record",
      modelId,
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
        <TestContextProvider
          model={{ id: modelId }}
          client={
            {
              request: async () => ({
                records: [record],
                total: 1,
              }),
            } as any
          }
        >
          <SampleRecordCard {...cardProps} />
        </TestContextProvider>
      );
    });
    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record in config mode", async () => {
    require("../../../components/record/SampleRecordCard").isConfigUI = true;
    const record: RecordType = {
      id: "test-record",
      modelId,
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
        <TestContextProvider
          model={{ id: modelId }}
          client={
            {
              request: async () => ({
                records: [record],
                total: 1,
              }),
            } as any
          }
        >
          <SampleRecordCard {...cardProps} />
        </TestContextProvider>
      );
    });
    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record that has a group and destination, in config mode", async () => {
    require("../../../components/record/SampleRecordCard").isConfigUI = true;
    const record: RecordType = {
      id: "test-record",
      modelId,
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
    const group: Models.GroupType = {
      id: "test-group-id",
      modelId,
      name: "test-group",
    };
    const destination: Models.DestinationType = {
      id: "test-destination-id",
      modelId,
      name: "test-destination",
    };
    const fetchRecord: (recordId?: string) => Promise<{
      record?: RecordType;
      groups?: Models.GroupType[];
      destinations?: Models.DestinationType[];
    }> = async () => {
      return {
        record,
        groups: [group],
        destinations: [destination],
      };
    };
    cardProps.fetchRecord = fetchRecord;

    let card: ReturnType<typeof render>;
    await act(async () => {
      card = render(
        <TestContextProvider
          model={{ id: modelId }}
          client={
            {
              request: async () => ({
                records: [record],
                total: 1,
              }),
            } as any
          }
        >
          <SampleRecordCard {...cardProps} />
        </TestContextProvider>
      );
    });
    expect(card.container).toMatchSnapshot();
  });
});
