import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Card, ListGroup, Alert } from "react-bootstrap";
import Loader from "../../loader";
import ProfileImageFromEmail from "../../visualizations/profileImageFromEmail";

export default function ProfilePreview({
  apiVersion,
  errorHandler,
  profilePropertyRule,
}) {
  const [profileGuid, setProfileGuid] = useState("");
  const [profile, setProfile] = useState({ guid: "", properties: {} });
  const [sleeping, setSleeping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [debounceCounter, setDebounceCounter] = useState(0);
  const { execApi } = useApi(errorHandler);

  const sleep = debounceCounter === 0 ? 0 : 1000; // we only want to make one request every ~second, so wait for more input

  let timer: NodeJS.Timeout;

  useEffect(() => {
    load();

    return () => {
      clearTimeout(timer);
    };
  }, [profilePropertyRule.guid, JSON.stringify(profilePropertyRule.options)]);

  async function load() {
    setSleeping(true);
    setErrorMessage("");
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
        setErrorMessage(response.errorMessage || "");
        setProfile(response.profile);
        setProfileGuid(response.profile.guid);
      }

      setSleeping(false);
    }, sleep);
  }

  let email;
  for (const key in profile.properties) {
    if (profile.properties[key].type === "email") {
      email = profile.properties[key].value;
    }
  }

  let thisProfilePropertyRuleValue: string;
  const otherProfilePropertyRules = {};
  for (const i in profile.properties) {
    if (profile.properties[i].guid === profilePropertyRule.guid) {
      thisProfilePropertyRuleValue = profile.properties[i]?.value?.toString();
    } else {
      otherProfilePropertyRules[i] = profile.properties[i];
    }
  }

  return (
    <Card bg="info">
      <Card.Body style={{ textAlign: "center", color: "white" }}>
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
            <Card.Link
              href={`/profile/${profile.guid}`}
              style={{ color: "white" }}
            >
              View Profile
            </Card.Link>
          </>
        )}
      </Card.Body>

      {sleeping ? null : (
        <ListGroup variant="flush">
          <ListGroup.Item
            variant={errorMessage !== "" ? "danger" : "secondary"}
          >
            <strong>{profilePropertyRule.key}</strong>:{" "}
            {errorMessage !== "" ? errorMessage : thisProfilePropertyRuleValue}
          </ListGroup.Item>

          {Object.keys(otherProfilePropertyRules).map((k) => (
            <ListGroup.Item key={`profile-preview-row-${k}`} variant="info">
              <strong>{k}</strong>:{" "}
              {otherProfilePropertyRules[k]?.value?.toString()}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
}
