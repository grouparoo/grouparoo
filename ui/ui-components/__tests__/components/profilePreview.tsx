import ProfilePreview from "../../components/property/profilePreview";
import { create, act } from "react-test-renderer";
import { ErrorHandler } from "../../utils/errorHandler";

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

describe("property / profilePreview", () => {
  afterAll(() => {
    jest.unmock("next/router");
  });
  afterEach(() => {
    execApi.mockReset();
  });

  it("should render with no profile preview", () => {
    expect(
      create(
        <ProfilePreview
          errorHandler={new ErrorHandler()}
          localFilters={{}}
          property={{
            id: "test-id",
            key: "test-key",
            type: "test-type",
            options: {},
          }}
        />
      )
    ).toMatchSnapshot();
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
    let profile: ReturnType<typeof create>;
    await act(async () => {
      profile = create(
        <ProfilePreview
          errorHandler={new ErrorHandler()}
          localFilters={{}}
          property={{
            id: "test-id",
            key: "test-key",
            type: "test-type",
            options: {},
          }}
        />
      );
      await new Promise((res) => setTimeout(res, 2000));
    });
    expect(profile).toMatchSnapshot();
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
    let profile: ReturnType<typeof create>;
    await act(async () => {
      profile = create(
        <ProfilePreview
          errorHandler={new ErrorHandler()}
          localFilters={{}}
          property={{
            id: "test-id",
            key: "test-key",
            type: "test-type",
            options: {},
          }}
        />
      );
      await new Promise((res) => setTimeout(res, 2000));
    });
    expect(profile).toMatchSnapshot();
  });
});
