import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

export type PageWithInferredProps<
  GetServerSidePropsFn extends GetServerSideProps
> = NextPage<InferGetServerSidePropsType<GetServerSidePropsFn>>;
