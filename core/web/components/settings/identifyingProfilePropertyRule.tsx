import { useApi } from "../../hooks/useApi";
import { Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Models } from "../../utils/apiData";
import LoadingButton from "../loadingButton";

export default function IdentifyingProfilePropertyRule(props) {
  const { errorHandler, successHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [profilePropertyRules, setProfilePropertyRules] = useState<
    Models.ProfilePropertyRuleType[]
  >([]);
  const [
    identifyingProfilePropertyGuid,
    setIdentifyingProfilePropertyGuid,
  ] = useState("");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/profilePropertyRules`, {
      state: "ready",
    });
    setLoading(false);

    if (response.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
      const _identifyingProfilePropertyGuid = response.profilePropertyRules.filter(
        (rule) => rule.identifying
      )[0]?.guid;
      if (_identifyingProfilePropertyGuid)
        setIdentifyingProfilePropertyGuid(_identifyingProfilePropertyGuid);
    }
  }

  async function onSubmit(event) {
    event.preventDefault();

    setLoading(true);

    for (const i in profilePropertyRules) {
      if (profilePropertyRules[i].identifying) {
        await execApi(
          "put",
          `/profilePropertyRule/${profilePropertyRules[i].guid}`,
          { identifying: false }
        );
      }
    }

    if (identifyingProfilePropertyGuid !== "") {
      await execApi(
        "put",
        `/profilePropertyRule/${identifyingProfilePropertyGuid}`,
        { identifying: true }
      );
    }

    setLoading(false);

    successHandler.set({ message: `Updated!` });
    load();
  }

  return (
    <Card border={"info"}>
      <Card.Body>
        <Card.Title>Identifying Profile Property</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Which profile should we display in the Grouparoo User Interface to
          identify your Profiles?
        </Card.Subtitle>

        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Profile Property</Form.Label>
            <Form.Control
              as="select"
              disabled={loading}
              value={identifyingProfilePropertyGuid}
              onChange={(e) =>
                setIdentifyingProfilePropertyGuid(e.target.value)
              }
            >
              {loading ? (
                <option disabled>...</option>
              ) : (
                <>
                  <option value="">None</option>
                  <option disabled>---</option>
                  {profilePropertyRules.map((rule) => (
                    <option key={rule.guid} value={rule.guid}>
                      {rule.key}
                    </option>
                  ))}
                </>
              )}
            </Form.Control>
          </Form.Group>

          <LoadingButton
            style={{ marginTop: 5 }}
            disabled={loading}
            size="sm"
            type="submit"
            variant="outline-secondary"
          >
            Update
          </LoadingButton>
        </Form>
      </Card.Body>
    </Card>
  );
}
