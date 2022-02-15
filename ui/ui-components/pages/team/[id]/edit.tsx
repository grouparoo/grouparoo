import { useApi } from "../../../contexts/api";
import { useState } from "react";
import { Form } from "react-bootstrap";
import LoadingButton from "../../../components/LoadingButton";
import PermissionsList from "../../../components/Permissions";
import { useRouter } from "next/router";
import { Models, Actions } from "../../../utils/apiData";
import TeamTabs from "../../../components/tabs/Team";
import LockedBadge from "../../../components/badges/LockedBadge";
import { successHandler, teamHandler } from "../../../eventHandlers";
import { generateClient } from "../../../client/client";
import { withServerErrorHandler } from "../../../utils/withServerErrorHandler";
import { NextPageWithInferredProps } from "../../../utils/pageHelper";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { id } = ctx.query;
  const { team } = await client.request<Actions.TeamView>("get", `/team/${id}`);
  return { props: { team } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState<Models.TeamType>(props.team);

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
    const response: Actions.TeamEdit = await client.request(
      "put",
      `/team/${team.id}`,
      _team
    );

    if (response?.team) {
      successHandler.set({ message: "Team updated" });
      setTeam(response.team);
      teamHandler.set(response.team);
    }
    setLoading(false);
  };

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.TeamDestroy = await client.request(
        "delete",
        `/team/${team.id}`
      );
      if (success) {
        successHandler.set({ message: "Team deleted" });
        router.push("/teams");
      } else {
        setLoading(false);
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
      <TeamTabs team={team} />

      <h1>{team.name}</h1>
      <LockedBadge object={team} />

      <Form id="form" onSubmit={updateTeam} autoComplete="off">
        <fieldset disabled={Boolean(team.locked)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Team Name"
              value={team.name}
              disabled={loading}
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

          <hr />

          {team.locked ? null : (
            <>
              <LoadingButton loading={loading} variant="primary" type="submit">
                Update
              </LoadingButton>

              <br />
              <br />

              <LoadingButton
                loading={loading}
                variant="danger"
                size="sm"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </LoadingButton>
            </>
          )}
        </fieldset>
      </Form>
    </>
  );
};

export default Page;
