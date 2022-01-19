import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

export type NextPageWithInferredProps<
  GetServerSidePropsFn extends GetServerSideProps
> = NextPage<InferGetServerSidePropsType<GetServerSidePropsFn>>;
