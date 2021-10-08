import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import RecordsPage from "@grouparoo/ui-components/pages/model/[modelId]/records";

export default function Page(props) {
  const router = useRouter();
  return (
    <>
      <RecordsPage {...props} />
      <Button
        variant="primary"
        onClick={() => {
          router.push(
            "/model/[modelId]/record/new",
            `/model/${router.query.modelId}/record/new`
          );
        }}
      >
        Add Sample Record
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return RecordsPage.getInitialProps(ctx);
};
