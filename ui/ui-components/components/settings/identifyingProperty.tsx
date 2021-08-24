import { useApi } from "../../hooks/useApi";
import { Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Models } from "../../utils/apiData";
import LoadingButton from "../loadingButton";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";

export default function IdentifyingProperty(props) {
  const {
    errorHandler,
    successHandler,
  }: { errorHandler: ErrorHandler; successHandler: SuccessHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Models.PropertyType[]>([]);
  const [identifyingRecordPropertyId, setIdentifyingRecordPropertyId] =
    useState("");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/properties`, {
      state: "ready",
    });
    setLoading(false);

    if (response.properties) {
      setProperties(response.properties);
      const _identifyingRecordPropertyId = response.properties.filter(
        (rule) => rule.identifying
      )[0]?.id;
      if (_identifyingRecordPropertyId)
        setIdentifyingRecordPropertyId(_identifyingRecordPropertyId);
    }
  }

  async function onSubmit(event) {
    event.preventDefault();

    setLoading(true);

    if (identifyingRecordPropertyId !== "") {
      await execApi(
        "put",
        `/property/${identifyingRecordPropertyId}/makeIdentifying`
      );
    }

    setLoading(false);

    successHandler.set({ message: `Updated!` });
    load();
  }

  return (
    <Card border={"info"}>
      <Card.Body>
        <Card.Title>Identifying Record Property</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Which record should we display in the Grouparoo User Interface to
          identify your Records?
        </Card.Subtitle>

        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Record Property</Form.Label>
            <Form.Control
              as="select"
              disabled={loading}
              value={identifyingRecordPropertyId}
              onChange={(e) => setIdentifyingRecordPropertyId(e.target.value)}
            >
              {loading ? (
                <option disabled>...</option>
              ) : (
                <>
                  <option value="">None</option>
                  <option disabled>---</option>
                  {properties.map((rule) => (
                    <option key={rule.id} value={rule.id}>
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
