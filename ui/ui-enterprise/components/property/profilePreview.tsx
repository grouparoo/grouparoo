import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../loader";
import ProfileImageFromEmail from "../visualizations/profileImageFromEmail";
import { useRouter } from "next/router";
import { Actions } from "../../utils/apiData";

export default function ProfilePreview(props) {
  const { errorHandler, property, localFilters } = props;
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
    property.guid,
    property.type,
    property.unique,
    property.isArray,
    JSON.stringify(property.options),
    JSON.stringify(property.filters),
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
      const response: Actions.PropertyProfilePreview = await execApi(
        "get",
        `/property/${property.guid}/profilePreview`,
        {
          options: property.options,
          filters: localFilters,
          profileGuid: _profileGuid,
        }
      );

      if (response?.profile) {
        setToHide(false);
        setErrorMessage(
          response.errorMessage
            ? response.errorMessage.match(
                /is required for a property of type/ // ignore errors about missing options
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

  let thisPropertyValue: string;
  const otherProperties = {};
  for (const i in profile.properties) {
    if (profile.properties[i].guid === property.guid) {
      if (property.type === "date" && profile.properties[i].values) {
        thisPropertyValue = profile.properties[i].values[0]
          ? new Date(profile.properties[i].values[0]).toLocaleString()
          : null;
      } else {
        thisPropertyValue = profile.properties[i].values
          ? profile.properties[i]?.values.slice(0, 10).join(", ")
          : "";
      }
    } else {
      otherProperties[i] = profile.properties[i];
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
              {property.key === "" ? "Draft Profile Property" : property.key}
            </strong>
            :{" "}
            {errorMessage !== ""
              ? errorMessage
              : thisPropertyValue
              ? thisPropertyValue
              : "..."}
          </ListGroup.Item>

          {Object.keys(otherProperties).map((k) => (
            <ListGroup.Item key={`profile-preview-row-${k}`} variant="light">
              <strong>{k}</strong>:{" "}
              {otherProperties[k]?.type === "date"
                ? new Date(otherProperties[k]?.values[0]).toLocaleString()
                : otherProperties[k]?.values?.slice(0, 10).join(", ")}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
}
