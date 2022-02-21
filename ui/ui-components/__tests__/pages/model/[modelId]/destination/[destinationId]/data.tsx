import { render } from "@testing-library/react";
import { Client } from "../../../../../../client/client";
import { ApiContext } from "../../../../../../contexts/api";
import DataPage, {
  getServerSideProps,
} from "../../../../../../pages/model/[modelId]/destination/[destinationId]/data";

const destinationId = "test-destination";
const modelId = "test-model";
const groupId = "test-group";

jest.mock("next/router", () => {
  return {
    useRouter: () => ({ query: { destinationId } }),
  };
});

jest.mock("../../../../../../client/client", () => {
  const fakeRequest = () =>
    Promise.resolve({
      destination: {
        destinationId,
        modelId,
        group: {
          groupId,
        },
        mapping: {},
        app: {
          icon: "",
        },
      },
      groups: [],
      properties: [],
      options: {
        properties: {
          known: [],
          required: [],
        },
      },
    });
  class FakeClient {
    constructor() {
      return {
        request: fakeRequest,
      };
    }
  }

  return {
    Client: FakeClient,
    generateClient: () => new FakeClient(),
  };
});

describe("model destination data page", () => {
  it("should render", async () => {
    const props: any = await getServerSideProps({
      query: {
        destinationId,
        modelId,
      },
    } as any);
    expect(
      render(
        <ApiContext.Provider value={{ client: new Client() }}>
          <DataPage {...props.props} />
        </ApiContext.Provider>
      ).container
    ).toMatchSnapshot();
  }, 10000);
});
