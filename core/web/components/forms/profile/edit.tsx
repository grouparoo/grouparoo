import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Button } from "react-bootstrap";
import Router from "next/router";
import ProfileImageFromEmail from "../../visualizations/profileImageFromEmail";
import Moment from "react-moment";

import { ProfileAPIData } from "../../../utils/apiData";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  profileHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ProfileAPIData>({});
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);

  const { guid } = query;

  useEffect(() => {
    load();
    loadProfilePropertyRules();

    profileHandler.subscribe("profile-edit", load.bind(this));

    return () => {
      profileHandler.unsubscribe("profile-edit", load.bind(this));
    };
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/profile/${guid}`);
    setLoading(false);
    if (response?.profile) {
      setProfile(response.profile);
    }
  }

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
    }
  }

  async function importAndUpdate() {
    setLoading(true);
    successHandler.set({ message: "enqueued for import..." });
    const response = await execApi(
      "post",
      `/api/${apiVersion}/profile/${guid}/importAndUpdate`
    );
    setLoading(false);
    if (response?.profile) {
      successHandler.set({ message: "Import Complete!" });
      profileHandler.set();
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/profile/${guid}`
      );
      setLoading(false);
      if (response) {
        Router.push("/profiles");
      }
    }
  }

  const uniqueProfileProperties = [];
  let email;
  profilePropertyRules.forEach((rule) => {
    if (rule.unique) {
      uniqueProfileProperties.push(rule.key);
    }

    if (rule.type === "email" && profile.properties[rule.key]) {
      email = profile.properties[rule.key].value;
    }
  });

  return (
    <>
      <Row>
        <Col md={2}>
          <ProfileImageFromEmail email={email} />
        </Col>
        <Col md={10}>
          <span className="text-muted">Created At: </span>
          <Moment fromNow>{profile.createdAt}</Moment>
          <br />
          <span className="text-muted">Updated At: </span>
          <Moment fromNow>{profile.updatedAt}</Moment>
          <br />
          <span className="text-muted">
            Anonymous ID: {profile.anonymousId || "None"}
          </span>
          <br />
          <br />
          {uniqueProfileProperties.map((key) => {
            return (
              <h3 key={`profileHeader-${key}`}>
                <span className="text-muted">{key}: </span>
                {profile.properties[key] ? profile.properties[key].value : null}
              </h3>
            );
          })}
          <br />
          <Button
            onClick={() => {
              importAndUpdate();
            }}
          >
            Import and Export
          </Button>
          <hr />
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
}
