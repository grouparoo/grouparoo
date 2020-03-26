import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";
import Loader from "./../../loader";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  sourceGuid,
}) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    loadOptions();
    loadSources();
  }, []);

  async function loadOptions() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRuleOptions`
    );
    setLoading(false);
    if (response?.types) {
      setTypes(response.types);
    }
  }

  async function loadSources() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/sources`);
    setLoading(false);
    if (response?.sources) {
      setSources(response.sources);
    }
  }

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi(
      "post",
      `/api/${apiVersion}/profilePropertyRule`,
      data
    );
    setLoading(false);
    if (response?.profilePropertyRule) {
      successHandler.set({ message: "Profile Property Rule Created" });
      Router.push(
        `/profilePropertyRule/${response.profilePropertyRule.guid}?tab=edit`
      );
    }
  }

  if (sources.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Key</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            placeholder="Key Name"
            name="key"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Key is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Profile Property Type</Form.Label>
          <Form.Control as="select" name="type" ref={register}>
            {types.map((type) => (
              <option key={`type-${type}`}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Profile Property Source</Form.Label>
          <Form.Control
            as="select"
            name="sourceGuid"
            required
            ref={register}
            disabled={sourceGuid ? true : false}
            defaultValue={sourceGuid ? sourceGuid : null}
          >
            {sources.map((source) => (
              <option key={`source-${source.guid}`} value={source.guid}>
                {source.name} ({source.app.name})
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="uniqueProperty">
          <Form.Check
            type="checkbox"
            label="Unique Property"
            name="unique"
            ref={register}
          />
        </Form.Group>

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
