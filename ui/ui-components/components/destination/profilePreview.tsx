import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Card, ListGroup } from "react-bootstrap";
import Loader from "../loader";
import { useRouter } from "next/router";
import { Actions } from "../../utils/apiData";

export default function ProfilePreview(props) {
  const { errorHandler, destination, trackedGroupId, mappingOptions } = props;
  const router = useRouter();
  const [profileId, setProfileId] = useState(
    router.query.profileId?.toString()
  );
  const [toHide, setToHide] = useState(true);
  const [profile, setProfile] = useState<
    Partial<Actions.DestinationProfilePreview["profile"]>
  >({
    id: "",
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
    destination.id,
    trackedGroupId,
    JSON.stringify(destination.destinationGroup),
    JSON.stringify(destination.mapping),
    JSON.stringify(destination.destinationGroupMemberships),
  ]);

  function storeProfilePropertyId(profileId: string = "") {
    setProfileId(profileId);
    let url = `${window.location.pathname}?`;

    if (profileId !== "") {
      url += `profileId=${profileId}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    router[routerMethod](router.route, url, { shallow: true });
  }

  async function load(_profileId = "", _sleep = sleep) {
    setSleeping(true);
    setToHide(false);
    storeProfilePropertyId(_profileId);

    if (trackedGroupId === "_none") {
      setToHide(true);
      return;
    }

    setDebounceCounter(debounceCounter + 1);

    timer = setTimeout(async () => {
      const destinationGroupMembershipsObject = {};
      destination.destinationGroupMemberships.forEach(
        (dgm) =>
          (destinationGroupMembershipsObject[dgm.groupId] = dgm.remoteKey)
      );

      const groupId = destination.destinationGroup?.id || trackedGroupId;

      const { profile }: Actions.DestinationProfilePreview = await execApi(
        "get",
        `/destination/${destination.id}/profilePreview`,
        {
          groupId,
          mapping: destination.mapping,
          destinationGroupMemberships: destinationGroupMembershipsObject,
          profileId: _profileId !== "" ? _profileId : undefined,
        }
      );

      setSleeping(false);

      if (profile) {
        setToHide(false);
        setProfile(profile);
        storeProfilePropertyId(profile.id);
      } else {
        setToHide(true);
      }
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

  let email;
  for (const key in profile.properties) {
    if (profile.properties[key].type === "email") {
      email = profile.properties[key].values[0];
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
              href={`/profile/${profile.id}/edit`}
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
            <strong>{mappingOptions?.labels?.property.plural}</strong>
          </Card.Body>

          <ListGroup variant="flush">
            {Object.keys(profile.properties).map((k) => (
              <ListGroup.Item key={`profile-prop-${k}`} variant="light">
                <strong>{k}</strong>:{" "}
                {profile.properties[k]?.type === "date"
                  ? profile.properties[k]?.values[0]
                    ? new Date(
                        profile.properties[k]?.values[0].toString()
                      ).toLocaleString()
                    : null
                  : profile.properties[k]?.values?.slice(0, 10).join(", ")}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card.Body style={{ textAlign: "center" }}>
            <strong>{mappingOptions?.labels?.group.plural}</strong>
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
