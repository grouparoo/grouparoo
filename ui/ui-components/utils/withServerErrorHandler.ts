import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getRedirectFromErrorCode } from "./getRedirectFromErrorCode";

export const withServerErrorHandler =
  <T>(getServerSideProps: GetServerSideProps<T>) =>
  async (ctx: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(ctx);
    } catch (error) {
      const requestPath = ctx?.req?.url?.match("^[^?]*")[0];
      const redirect = getRedirectFromErrorCode(error.code, requestPath);
      if (redirect) {
        return { redirect };
      }

      const message = error?.message;
      // @ts-ignore This is a special error cast that does not obey the type T
      return { props: { hydrationError: message } } as { props: T };
    }
  };
