import SampleRecordCard, {
  SampleRecordCardProps,
} from "../../../components/record/SampleRecordCard";
import { Models } from "../../../utils/apiData";
import { asyncRenderWithContext } from "../../__utils__/renderWithContext";

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

    const model = { id: modelId };
    const client: any = {
      request: async () => ({
        records: [],
        total: 0,
      }),
    };
    const card = await asyncRenderWithContext(
      <SampleRecordCard {...cardProps} />,
      { model, client }
    );

    expect(card.container).toMatchSnapshot();
  });

  it("should render with no records in 'config mode'", async () => {
    require("../../../components/record/SampleRecordCard").isConfigUI = true;
    cardProps.properties = [{ id: "some-property", sourceId: "some-source" }];

    const model = { id: modelId };
    const client: any = {
      request: async () => ({
        records: [],
        total: 0,
      }),
    };
    const card = await asyncRenderWithContext(
      <SampleRecordCard {...cardProps} />,
      { model, client }
    );

    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record", async () => {
    const record: Models.GrouparooRecordType = {
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
      record?: Models.GrouparooRecordType;
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

    const model = { id: modelId };
    const client: any = {
      request: async () => ({
        records: [record],
        total: 1,
      }),
    };
    const card = await asyncRenderWithContext(
      <SampleRecordCard {...cardProps} />,
      { model, client }
    );

    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record in config mode", async () => {
    require("../../../components/record/SampleRecordCard").isConfigUI = true;
    const record: Models.GrouparooRecordType = {
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
      record?: Models.GrouparooRecordType;
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

    const model = { id: modelId };
    const client: any = {
      request: async () => ({
        records: [record],
        total: 1,
      }),
    };
    const card = await asyncRenderWithContext(
      <SampleRecordCard {...cardProps} />,
      { model, client }
    );

    expect(card.container).toMatchSnapshot();
  });

  it("should render with 1 record that has a group and destination, in config mode", async () => {
    require("../../../components/record/SampleRecordCard").isConfigUI = true;
    const record: Models.GrouparooRecordType = {
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
      record?: Models.GrouparooRecordType;
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

    const model = { id: modelId };
    const client: any = {
      request: async () => ({
        records: [record],
        total: 1,
      }),
    };
    const card = await asyncRenderWithContext(
      <SampleRecordCard {...cardProps} />,
      { model, client }
    );

    expect(card.container).toMatchSnapshot();
  });
});
