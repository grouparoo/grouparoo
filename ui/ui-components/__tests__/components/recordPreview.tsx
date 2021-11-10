import RecordPreview from "../../components/property/RecordPreview";
import { ErrorHandler } from "../../utils/errorHandler";
import { renderAndWait } from "../__utils__/renderAndWait";
import testRecord from "./test-record.json";

jest.mock("next/router", () => {
  const nextRouter = jest.requireActual("next/router");
  nextRouter.useRouter = jest.fn(() => ({
    route: "/",
    query: {
      modelId: "abcd",
      recordId: "asdf",
    },
    replace: jest.fn(),
    push: jest.fn(),
  }));
  return nextRouter;
});

const execApi = jest.fn(() => {
  return Promise.resolve({});
});
jest.mock("../../hooks/useApi", () => ({
  UseApi: () => ({
    execApi,
  }),
}));

const renderDefaultRecord = (overrideProps: any = {}) =>
  renderAndWait(
    <RecordPreview
      errorHandler={new ErrorHandler()}
      localFilters={{}}
      property={{
        id: "test-id",
        key: "test-key",
        type: "test-type",
        options: {},
      }}
      {...overrideProps}
    />
  );

describe("property / recordPreview", () => {
  const dateMock = jest
    .spyOn(Date.prototype, "toLocaleString")
    .mockReturnValue("9/8/2021, 6:58:38 PM");

  afterAll(() => {
    jest.unmock("next/router");
    jest.unmock("../../hooks/useApi");
    dateMock.mockRestore();
  });
  afterEach(() => {
    execApi.mockReset();
  });

  it("should render successfully with no record preview", async () => {
    const record = await renderDefaultRecord();
    expect(record.container).toMatchSnapshot();
  });

  it("should render with a number date", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        record: {
          id: "asdf",
          modelId: "abcd",
          properties: {
            date: { type: "date", values: [1631127518020] },
          },
        },
      });
    });

    const record = await renderDefaultRecord();
    expect(record.container).toMatchSnapshot();
  });

  it("should not render with a null date", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        record: {
          id: "asdf",
          modelId: "abcd",
          properties: {
            date: { type: "date", values: [null] },
          },
        },
      });
    });

    const record = await renderDefaultRecord();
    expect(record.container).toMatchSnapshot();
  });

  it("should not render with a boolean date", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        record: {
          id: "asdf",
          modelId: "abcd",
          properties: {
            date: { type: "date", values: [true] },
          },
        },
      });
    });

    const record = await renderDefaultRecord();
    expect(record.container).toMatchSnapshot();
  });

  it("should render with a string date", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        record: {
          id: "asdf",
          modelId: "abcd",
          properties: {
            date: { type: "date", values: ["6/18/2021, 6:07:22 AM"] },
          },
        },
      });
    });

    const record = await renderDefaultRecord();
    expect(record.container).toMatchSnapshot();
  });

  it("should render with a Date date", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        record: {
          id: "asdf",
          modelId: "abcd",
          properties: {
            date: { type: "date", values: [new Date("2/5/2019, 4:22:21 AM")] },
          },
        },
      });
    });

    const record = await renderDefaultRecord();
    expect(record.container).toMatchSnapshot();
  });

  it("should render a whole user record including the date", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        record: testRecord,
      });
    });

    const record = await renderDefaultRecord({
      property: {
        id: "last_purchase_date",
        key: "",
        type: "date",
        options: {},
      },
    });
    expect(record.container).toMatchSnapshot();
  });
});
