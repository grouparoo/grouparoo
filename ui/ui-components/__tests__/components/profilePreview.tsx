import { render, act } from "@testing-library/react";
import ProfilePreview from "../../components/property/profilePreview";
import { ErrorHandler } from "../../utils/errorHandler";
import { renderAndWait } from "../__utils__/renderAndWait";
import MockDate from "mockdate";

MockDate.set(1631127518020);

jest.mock("next/router", () => {
  const nextRouter = jest.requireActual("next/router");
  nextRouter.useRouter = jest.fn(() => ({
    route: "/",
    query: {
      profileId: "asdf",
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
  useApi: () => ({
    execApi,
  }),
}));

const renderDefaultProfile = (overrideProps: any = {}) =>
  renderAndWait(
    <ProfilePreview
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

describe("property / profilePreview", () => {
  afterAll(() => {
    jest.unmock("next/router");
    jest.unmock("../../hooks/useApi");
  });
  afterEach(() => {
    execApi.mockReset();
  });

  it("should render with no profile preview", async () => {
    const profile = await renderDefaultProfile();
    expect(profile.container).toMatchSnapshot();
  });

  it("should render", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        profile: {
          id: "asdf",
          properties: {
            date: { type: "date", values: [1631127518020] },
          },
        },
      });
    });

    const profile = await renderDefaultProfile();
    expect(profile.container).toMatchSnapshot();
  });

  it("should render with null date", async () => {
    execApi.mockImplementation(() => {
      return Promise.resolve({
        profile: {
          id: "asdf",
          properties: {
            date: { type: "date", values: [null] },
          },
        },
      });
    });

    const profile = await renderDefaultProfile();
    expect(profile.container).toMatchSnapshot();
  });
});
