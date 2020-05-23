import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button } from "react-bootstrap";
import PermissionsList from "../../lists/permissions";
import Router from "next/router";

import { TeamAPIData } from "../../../utils/apiData";

export default function ({ errorHandler, successHandler, teamHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState<TeamAPIData>({ name: "" });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/team/${guid}`);
    setLoading(false);
    if (response?.team) {
      setTeam(response.team);
    }
  }

  const updateTeam = async (event) => {
    event.preventDefault();
    const _team = Object.assign({}, team);
    if (_team.permissionAllRead === null) {
      _team["disabledPermissionAllRead"] = true;
    }
    if (_team.permissionAllWrite === null) {
      _team["disabledPermissionAllWrite"] = true;
    }

    setLoading(true);
    const response = await execApi("put", `/team/${guid}`, _team);
    setLoading(false);
    if (response?.team) {
      successHandler.set({ message: "Team updated" });
      setTeam(response.team);
      teamHandler.set();
    }
  };

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi("delete", `/team/${guid}`);
      if (response) {
        successHandler.set({ message: "Team deleted" });
        Router.push("/teams");
      }
    }
  }

  function updatePermission(topic, read, write) {
    const _team = Object.assign({}, team);
    _team.permissionAllRead = null;
    _team.permissionAllWrite = null;
    for (const i in _team.permissions) {
      if (_team.permissions[i].topic === topic) {
        _team.permissions[i].read = read;
        _team.permissions[i].write = write;
      }
    }
    setTeam(_team);
  }

  function updatePermissionAll(read, write) {
    const _team = Object.assign({}, team);
    _team.permissionAllRead = read;
    _team.permissionAllWrite = write;
    for (const i in _team.permissions) {
      _team.permissions[i].read = read;
      _team.permissions[i].write = write;
    }
    setTeam(_team);
  }

  return (
    <>
      <p>
        <span className="text-muted">{team.guid}</span>
      </p>

      <Form id="form" onSubmit={updateTeam}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Team Name"
            value={team.name}
            onChange={(event) => {
              const _team = Object.assign({}, team);
              _team.name = event.target.value;
              setTeam(_team);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <h3>Permissions</h3>
        <PermissionsList
          permissions={team.permissions}
          permissionAllRead={team.permissionAllRead}
          permissionAllWrite={team.permissionAllWrite}
          updatePermission={updatePermission}
          updatePermissionAll={updatePermissionAll}
        />

        <Button variant="primary" type="submit">
          Update
        </Button>
        <hr />
        <Button
          disabled={loading || team.locked}
          variant="danger"
          size="sm"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </Button>
      </Form>
    </>
  );
}
