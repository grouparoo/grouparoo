import { useEffect } from "react";
import { UseApi } from "../../../hooks/useApi";
import { useRouter } from "next/router";
import { Actions } from "../../../utils/apiData";
import { NextPageContext } from "next";

export default function Page(props: { record: Actions.RecordView["record"] }) {
  const { record } = props;
  const router = useRouter();

  useEffect(() => {
    const verb = Array.isArray(router.query.verb)
      ? router.query.verb.join("/")
      : router.query.verb;
    router.replace(
      `/model/[modelId]/record/[recordId]/${verb}`,
      `/model/${record.modelId}/record/${record.id}/${verb}`
    );
  }, [record]);

  return <></>;
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { record } = await execApi("get", `/record/${id}`);
  return { record };
};
