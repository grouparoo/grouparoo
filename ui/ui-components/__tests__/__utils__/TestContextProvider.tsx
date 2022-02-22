import { FC } from "react";
import { Client } from "../../client/client";
import { ApiContext } from "../../contexts/api";
import { GrouparooModelContext } from "../../contexts/grouparooModel";
import { WebAppContext } from "../../contexts/webApp";
import { Models } from "../../utils/apiData";
import { renderNestedContextProviders } from "../../utils/contextHelper";

export interface ContextProviderProps {
  webAppContext?: WebAppContext;
  client?: Client;
  model?: Models.GrouparooModelType;
}

export const TestContextProvider: FC<ContextProviderProps> = ({
  children,
  webAppContext = {},
  client = new Client(),
  model = { id: "test-model" },
}) =>
  renderNestedContextProviders(
    [
      [WebAppContext.Provider, webAppContext],
      [ApiContext.Provider, { client }],
      [GrouparooModelContext.Provider, { model }],
    ],
    children
  );
