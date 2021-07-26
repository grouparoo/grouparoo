import { Component } from "react";
import { Client } from "../client/client";
import { ErrorHandler } from "../utils/errorHandler";
import { SuccessHandler } from "../utils/successHandler";

export interface GrouparooPluginPageProps {
  query: any;
  errorHandler: ErrorHandler;
  successHandler: SuccessHandler;
}

export interface GrouparooPluginPageState {
  Plugin: any;
  client: Client;
}

export class GrouparooPluginPage extends Component<
  GrouparooPluginPageProps,
  GrouparooPluginPageState
> {}
