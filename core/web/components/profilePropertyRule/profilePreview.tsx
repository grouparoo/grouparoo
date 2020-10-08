import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../loader";
import ProfileImageFromEmail from "../visualizations/profileImageFromEmail";
import { useRouter } from "next/router";
import { Actions } from "../../utils/apiData";

export default function ProfilePreview(props) {
  const { errorHandler, profilePropertyRule, localFilters } = props;
  const router = useRouter();
  const [profileGuid, setProfileGuid] = useState(
    router.query.profileGuid?.toString()
  );
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
    JSON.stringify(localFilters),
  ]);

  function storeProfilePropertyGuid(profileGuid: string) {
    setProfileGuid(profileGuid);
    let url = `${window.location.pathname}?`;
    url += `profileGuid=${profileGuid}&`;

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    router[routerMethod](router.route, url, { shallow: true });
  }

  async function load(
    _profileGuid = profileGuid === "" ? undefined : profileGuid,
    _sleep = sleep
  ) {
    setSleeping(true);
    setErrorMessage("");
    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const response: Actions.ProfilePropertyRuleProfilePreview = await execApi(
        "get",
        `/profilePropertyRule/${profilePropertyRule.guid}/profilePreview`,
        {
          options: profilePropertyRule.options,
          filters: localFilters,
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
        storeProfilePropertyGuid(response.profile.guid);
      }

      setSleeping(false);
    }, _sleep);
  }

  function chooseProfileProperty() {
    const _profileGuid = prompt("Enter Profile Guid", profileGuid);
    if (_profileGuid) {
      storeProfilePropertyGuid(_profileGuid);
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
      if (profilePropertyRule.type === "date" && profile.properties[i].values) {
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
