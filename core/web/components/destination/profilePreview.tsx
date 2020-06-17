import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../loader";

export default function ProfilePreview(props) {
  const {
    errorHandler,
    destination,
    groups,
    trackedGroupGuid,
    mappingOptions,
  } = props;
  const [profileGuid, setProfileGuid] = useState("");
  const [toHide, setToHide] = useState(true);
  const [profile, setProfile] = useState({
    guid: "",
    properties: {},
    groupNames: [],
  });
  const [sleeping, setSleeping] = useState(false);
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
    destination.guid,
    trackedGroupGuid,
    JSON.stringify(destination.destinationGroups),
    JSON.stringify(destination.mapping),
    JSON.stringify(destination.destinationGroupMemberships),
  ]);

  async function load(
    _profileGuid = profileGuid === "" ? undefined : profileGuid,
    _sleep = sleep
  ) {
    setSleeping(true);

    if (
      !destination.destinationGroups[0]?.guid &&
      trackedGroupGuid === "_none"
    ) {
      return;
    }

    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const destinationGroupMembershipsObject = {};
      destination.destinationGroupMemberships.forEach(
        (dgm) =>
          (destinationGroupMembershipsObject[dgm.groupGuid] = dgm.remoteKey)
      );

      const groupGuid =
        destination.trackAllGroups || trackedGroupGuid === "_all"
          ? groups[0].guid
          : destination.destinationGroups[0]?.guid || trackedGroupGuid;

      const response = await execApi(
        "get",
        `/destination/${destination.guid}/profilePreview`,
        {
          groupGuid,
          mapping: destination.mapping,
          destinationGroupMemberships: destinationGroupMembershipsObject,
          profileGuid: _profileGuid,
        }
      );

      if (response?.profile) {
        setToHide(false);
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
      email = profile.properties[key].value;
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
            <Card.Link
              href={`/profile/${profile.guid}/edit`}
              style={{ color: "white" }}
            >
              View Profile
            </Card.Link>{" "}
            <br />
            <small onClick={chooseProfileProperty}>change</small>
          </>
        )}
      </Card.Body>

      {sleeping ? null : (
        <>
          <Card.Body style={{ textAlign: "center" }}>
            <strong>{mappingOptions.labels.profilePropertyRule.plural}</strong>
          </Card.Body>

          <ListGroup variant="flush">
            {Object.keys(profile.properties).map((k) => (
              <ListGroup.Item key={`profile-prop-${k}`} variant="light">
                <strong>{k}</strong>:{" "}
                {profile.properties[k]?.type === "date"
                  ? profile.properties[k].value
                    ? new Date(profile.properties[k].value).toLocaleString()
                    : null
                  : profile.properties[k]?.value?.toString()}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card.Body style={{ textAlign: "center" }}>
            <strong>{mappingOptions.labels.group.plural}</strong>
          </Card.Body>

          <ListGroup variant="flush">
            {profile.groupNames.map((groupName) => (
              <ListGroup.Item key={`profile-prop-${groupName}`} variant="light">
                <strong>{groupName}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Card>
  );
}
