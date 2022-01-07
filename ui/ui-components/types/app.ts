import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Actions } from "../utils/apiData";
import * as eventHandlers from "../utils/eventHandlers";

export interface GrouparooWebAppProps {
  clusterName: Actions.NavigationList["clusterName"];
  currentTeamMember: Partial<Actions.NavigationList["teamMember"]>;
  hydrationError?: string;
  navigation: Actions.NavigationList["navigation"];
  navigationMode: Actions.NavigationList["navigationMode"];
  navigationModel: Actions.NavigationList["navigationModel"];
}

export type GrouparooPageProps<P = {}> = P &
  GrouparooWebAppProps &
  typeof eventHandlers;

export type GrouparooPage<GetServerSidePropsFn extends GetServerSideProps> =
  NextPage<
    GrouparooPageProps<InferGetServerSidePropsType<GetServerSidePropsFn>>
  >;
