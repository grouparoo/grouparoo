import { Component } from "react";
import { Client } from "../client/client";

export interface GrouparooPluginPageProps {
  query: any;
  errorHandler: any;
  successHandler: any;
}

export interface GrouparooPluginPageState {
  Plugin: any;
  client: Client;
}

export class GrouparooPluginPage extends Component<
  GrouparooPluginPageProps,
  GrouparooPluginPageState
> {}
