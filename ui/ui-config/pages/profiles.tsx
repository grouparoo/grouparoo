import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import ProfilesPage from "@grouparoo/ui-components/pages/profiles";

export default function Page(props) {
  const router = useRouter();
  return (
    <>
      <ProfilesPage {...props} />
      <Button
        variant="primary"
        onClick={() => {
          router.push("/profile/new");
        }}
      >
        Add Sample Profile
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return ProfilesPage.getInitialProps(ctx);
};
