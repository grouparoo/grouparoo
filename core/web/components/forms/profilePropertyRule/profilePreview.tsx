import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Card, ListGroup, Alert } from "react-bootstrap";
import Loader from "../../loader";
import { ErrorHandler } from "../../../utils/errorHandler";
import ProfileImageFromEmail from "../../visualizations/profileImageFromEmail";

export default function ProfilePreview({ apiVersion, profilePropertyRule }) {
  const [profileGuid, setProfileGuid] = useState("");
  const [profile, setProfile] = useState({ guid: "", properties: {} });
  const [sleeping, setSleeping] = useState(false);
  const [error, setError] = useState("");
  const [debounceCounter, setDebounceCounter] = useState(0);

  const localErrorHandler = new ErrorHandler();
  const { execApi } = useApi(localErrorHandler);

  const sleep = debounceCounter === 0 ? 0 : 1000; // we only want to make one request every ~second, so wait for more input

  let timer: NodeJS.Timeout;

  useEffect(() => {
    load();
    localErrorHandler.subscribe(
      "profile-preview-error",
      subscription.bind(this)
    );

    return () => {
      localErrorHandler.unsubscribe("profile-preview-error");
      clearTimeout(timer);
    };
  }, [profilePropertyRule.guid, JSON.stringify(profilePropertyRule.options)]);

  async function load() {
    setSleeping(true);
    setError("");
    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const response = await execApi(
        "get",
        `/api/${apiVersion}/profilePropertyRule/${profilePropertyRule.guid}/profilePreview`,
        {
          options: profilePropertyRule.options,
          profileGuid: profileGuid === "" ? undefined : profileGuid,
        }
      );

      if (response?.profile) {
        setProfile(response.profile);
        setProfileGuid(response.profile.guid);
      }

      setSleeping(false);
    }, sleep);
  }

  function subscription({ error: _error }) {
    setError(_error.message);
  }

  let email;
  for (const key in profile.properties) {
    if (profile.properties[key].type === "email") {
      email = profile.properties[key].value;
    }
  }

  return (
    <Card bg="secondary">
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>Example Profile</Card.Title>
        {sleeping ? (
          <>
            <br />
            <Loader />
          </>
        ) : (
          <>
            <ProfileImageFromEmail email={email} width={100} />
            <br />
            <Card.Link href={`/profile/${profile.guid}`}>
              View Profile
            </Card.Link>
          </>
        )}
      </Card.Body>

      {error !== "" ? <Alert variant="danger">{error}</Alert> : null}

      {sleeping ? null : error === "" ? (
        <ListGroup variant="flush">
          {Object.keys(profile.properties).map((k) => (
            <ListGroup.Item
              key={`profile-preview-row-${k}`}
              variant={k === profilePropertyRule.key ? "success" : "secondary"}
            >
              <strong>{k}</strong>: {profile.properties[k].value}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : null}
    </Card>
  );
}
