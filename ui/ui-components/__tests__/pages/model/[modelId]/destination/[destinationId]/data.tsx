import { Client } from "../../../../../../client/client";
import { ApiContext } from "../../../../../../contexts/api";
import { GrouparooModelContext } from "../../../../../../contexts/grouparooModel";
import DataPage, {
  getServerSideProps,
} from "../../../../../../pages/model/[modelId]/destination/[destinationId]/data";
import { renderAndWait } from "../../../../../__utils__/renderAndWait";

const destinationId = "test-destination";
const modelId = "test-model";
const groupId = "test-group";

jest.mock("next/router", () => {
  return {
    useRouter: () => ({ query: { destinationId }, asPath: "", pathname: "" }),
  };
});

jest.mock(
  "../../../../../../components/destination/DestinationSampleRecord",
  () => () => null
);

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

    const dataPage = await renderAndWait(
      <GrouparooModelContext.Provider value={{ model: {} }}>
        <ApiContext.Provider value={{ client: new Client() }}>
          <DataPage {...props.props} />
        </ApiContext.Provider>
      </GrouparooModelContext.Provider>
    );
    expect(dataPage.container).toMatchSnapshot();
  });
});
