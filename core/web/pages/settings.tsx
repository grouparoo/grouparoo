import Head from "next/head";
import { Card } from "react-bootstrap";
import SettingsList from "../components/lists/settings";
import ImportAndUpdateAllProfiles from "../components/profile/importAndUpdate";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Settings</title>
      </Head>

      <h1>Settings</h1>
      <SettingsList {...props} />

      <Card border="warning">
        <Card.Body>
          <h2>Operations</h2>
          <ImportAndUpdateAllProfiles {...props} />
        </Card.Body>
      </Card>
    </>
  );
}
