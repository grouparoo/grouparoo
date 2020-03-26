import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState({
    guid: "",
    name: "",
    read: null,
    write: null,
    administer: null,
    deletable: null,
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/team/${guid}`);
    setLoading(false);
    if (response?.team) {
      setTeam(response.team);
    }
  }

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/team/${guid}`,
      data
    );
    setLoading(false);
    if (response?.team) {
      successHandler.set({ message: "Team updated" });
      setTeam(response.team);
    }
  };

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/team/${guid}`
      );
      if (response) {
        Router.push("/teams");
      }
    }
  }

  return (
    <>
      <p>
        <span className="text-muted">{team.guid}</span>
      </p>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Team Name"
            defaultValue={team.name}
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="readAccess">
          <Form.Check
            type="checkbox"
            name="read"
            label="Read Access"
            defaultChecked={team.read}
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="writeAccess">
          <Form.Check
            type="checkbox"
            name="write"
            label="Write Access"
            defaultChecked={team.write}
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="adminAccess">
          <Form.Check
            type="checkbox"
            name="administer"
            label="Admin Access"
            defaultChecked={team.administer}
            ref={register}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
        <hr />
        {team.deletable ? (
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        ) : null}
      </Form>
    </>
  );
}
