import { GetServerSideProps } from "next";

export function withServerErrorHandler<T>(
  getServerSideProps: GetServerSideProps<T>
) {
  const func: GetServerSideProps<T> = async (ctx) => {
    try {
      return await getServerSideProps(ctx);
    } catch (error) {
      const requestPath = ctx?.req?.url?.match("^[^?]*")[0];

      if (error.code === "NO_TEAMS_ERROR") {
        return {
          redirect: {
            destination: `/`,
            permanent: false,
          },
        };
      }
      if (
        error.code === "AUTHENTICATION_ERROR" &&
        requestPath !== "/session/sign-in"
      ) {
        return {
          redirect: {
            destination: `/session/sign-in?nextPage=${requestPath}`,
            permanent: false,
          },
        };
      }

      const message = error?.message;
      // @ts-ignore This is a special error cast that does not obey the type T
      return { props: { hydrationError: message } } as { props: T };
    }
  };

  return func;
}
