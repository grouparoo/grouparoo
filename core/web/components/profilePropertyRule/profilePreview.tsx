import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../loader";
import ProfileImageFromEmail from "../visualizations/profileImageFromEmail";

export default function ProfilePreview(props) {
  const { errorHandler, profilePropertyRule } = props;
  const [profileGuid, setProfileGuid] = useState("");
  const [toHide, setToHide] = useState(true);
  const [profile, setProfile] = useState({ guid: "", properties: {} });
  const [sleeping, setSleeping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [debounceCounter, setDebounceCounter] = useState(0);
  const { execApi } = useApi(props, errorHandler);

  const sleep = debounceCounter === 0 ? 0 : 1000; // we only want to make one request every ~second, so wait for more input

  let timer: NodeJS.Timeout;

  useEffect(() => {
    load();

    return () => {
      clearTimeout(timer);
    };
  }, [
    profilePropertyRule.guid,
    profilePropertyRule.type,
    profilePropertyRule.unique,
    profilePropertyRule.isArray,
    JSON.stringify(profilePropertyRule.options),
    JSON.stringify(profilePropertyRule.filters),
  ]);

  async function load(
    _profileGuid = profileGuid === "" ? undefined : profileGuid,
    _sleep = sleep
  ) {
    setSleeping(true);
    setErrorMessage("");
    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const response = await execApi(
        "get",
        `/profilePropertyRule/${profilePropertyRule.guid}/profilePreview`,
        {
          options: profilePropertyRule.options,
          filters: profilePropertyRule.filters,
          profileGuid: _profileGuid,
        }
      );

      if (response?.profile) {
        setToHide(false);
        setErrorMessage(
          response.errorMessage
            ? response.errorMessage.match(
                /is required for a profilePropertyRule of type/ // ignore errors about missing options
              )
              ? ""
              : response.errorMessage
            : ""
        );
        setProfile(response.profile);
        setProfileGuid(response.profile.guid);
      }

      setSleeping(false);
    }, _sleep);
  }

  function chooseProfileProperty() {
    const _profileGuid = prompt("Enter Profile Guid", profileGuid);
    if (_profileGuid) {
      setProfileGuid(_profileGuid);
      load(_profileGuid, 1);
    }
  }

  if (toHide) {
    return (
      <Card bg="light">
        <Card.Body style={{ textAlign: "center" }}>
          Profile preview unavailable
        </Card.Body>
      </Card>
    );
  }

  let email;
  for (const key in profile.properties) {
    if (profile.properties[key].type === "email") {
      email = profile.properties[key].values[0];
    }
  }

  let thisProfilePropertyRuleValue: string;
  const otherProfilePropertyRules = {};
  for (const i in profile.properties) {
    if (profile.properties[i].guid === profilePropertyRule.guid) {
      if (profilePropertyRule.type === "date") {
        thisProfilePropertyRuleValue = profile.properties[i].values[0]
          ? new Date(profile.properties[i].values[0]).toLocaleString()
          : null;
      } else {
        thisProfilePropertyRuleValue = profile.properties[i].values
          ? profile.properties[i]?.values.slice(0, 10).join(", ")
          : "";
      }
    } else {
      otherProfilePropertyRules[i] = profile.properties[i];
    }
  }

  return (
    <Card bg="light">
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
              href={`/profile/${profile.guid}/edit`}
              style={{ color: "white" }}
            >
              View Profile
            </Card.Link>
            <br />
            <small onClick={chooseProfileProperty}>change</small>
          </>
        )}
      </Card.Body>

      {sleeping ? null : (
        <ListGroup variant="flush">
          <ListGroup.Item variant={errorMessage !== "" ? "danger" : "success"}>
            <strong>
              {profilePropertyRule.key === ""
                ? "Draft Profile Property"
                : profilePropertyRule.key}
            </strong>
            :{" "}
            {errorMessage !== ""
              ? errorMessage
              : thisProfilePropertyRuleValue
              ? thisProfilePropertyRuleValue
              : "..."}
          </ListGroup.Item>

          {Object.keys(otherProfilePropertyRules).map((k) => (
            <ListGroup.Item key={`profile-preview-row-${k}`} variant="light">
              <strong>{k}</strong>:{" "}
              {otherProfilePropertyRules[k]?.type === "date"
                ? new Date(
                    otherProfilePropertyRules[k]?.values[0]
                  ).toLocaleString()
                : otherProfilePropertyRules[k]?.values?.slice(0, 10).join(", ")}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
}
