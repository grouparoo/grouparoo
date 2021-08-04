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
  const [profileId, setProfileId] = useState(
    router.query.profileId?.toString()
  );
  const [toHide, setToHide] = useState(true);
  const [profile, setProfile] = useState<
    Partial<Actions.ProfileView["profile"]>
  >({
    id: "",
    properties: {},
  });
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
    property.id,
    property.type,
    property.unique,
    property.isArray,
    JSON.stringify(property.options),
    JSON.stringify(property.filters),
    JSON.stringify(localFilters),
  ]);

  function storeProfilePropertyId(profileId: string) {
    setProfileId(profileId);
    let url = `${window.location.pathname}?`;
    url += `profileId=${profileId}&`;

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    router[routerMethod](router.route, url, { shallow: true });
  }

  async function load(
    _profileId = profileId === "" ? undefined : profileId,
    _sleep = sleep
  ) {
    setSleeping(true);
    setErrorMessage("");
    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const response: Actions.PropertyProfilePreview = await execApi(
        "get",
        `/property/${property.id}/profilePreview`,
        {
          options: property.options,
          filters: localFilters,
          profileId: _profileId,
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
        storeProfilePropertyId(response.profile.id);
      }

      setSleeping(false);
    }, _sleep);
  }

  function chooseProfileProperty() {
    const _profileId = prompt("Enter Profile Id", profileId);
    if (_profileId) {
      storeProfilePropertyId(_profileId);
      load(_profileId, 1);
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

  let email: string;
  for (const key in profile.properties) {
    if (profile.properties[key].type === "email") {
      email = profile.properties[key]?.values[0] as string;
    }
  }

  let thisPropertyValue: string;
  const otherProperties = {};
  for (const i in profile.properties) {
    if (profile.properties[i].id === property.id) {
      if (property.type === "date" && profile.properties[i].values) {
        thisPropertyValue = profile.properties[i].values[0]
          ? new Date(profile.properties[i].values[0] as number).toLocaleString()
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
              href={`/profile/${profile.id}/edit`}
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
