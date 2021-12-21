import { useEffect, useState } from "react";
import { UseApi } from "../../../../../hooks/useApi";
import { Row, Col, Form } from "react-bootstrap";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import { useRouter } from "next/router";
import Head from "next/head";
import GroupTabs from "../../../../../components/tabs/Group";
import LoadingButton from "../../../../../components/LoadingButton";
import { Models, Actions } from "../../../../../utils/apiData";
import { formatTimestamp } from "../../../../../utils/formatTimestamp";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";
import { GroupHandler } from "../../../../../utils/groupHandler";
import PageHeader from "../../../../../components/PageHeader";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    groupHandler,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    groupHandler: GroupHandler;
  } = props;
  const router = useRouter();
  const [group, setGroup] = useState<Models.GroupType>(props.group);
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.groupHandler.subscribe("group-edit", (_group) => {
      setGroup(_group);
    });

    return () => {
      props.groupHandler.unsubscribe("group-edit");
    };
  }, []);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response: Actions.GroupEdit = await execApi(
      "put",
      `/group/${group.id}`,
      group
    );

    if (response?.group) {
      successHandler.set({ message: "Group Updated" });
      setGroup(response.group);
      groupHandler.set(response.group);
    }
    setLoading(false);
  }

  async function handleDelete(force = false) {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.GroupDestroy = await execApi(
        "delete",
        `/group/${group.id}`,
        { force }
      );
      if (response?.success) {
        successHandler.set({
          message: force ? "Group Deleted" : "Group scheduled to be deleted",
        });
        router.push(
          "/model/[modelId]/groups",
          `/model/${group.modelId}/groups`
        );
      } else {
        setLoading(false);
      }
    }
  }

  function update(event) {
    const _group = Object.assign({}, group);
    _group[event.target.id] = event.target.value;
    setGroup(_group);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>

      <GroupTabs group={group} />

      <PageHeader
        title={group.name}
        iconType="group"
        badges={[
          <LockedBadge object={group} />,
          <StateBadge state={group.state} />,
          <ModelBadge modelName={group.modelName} modelId={group.modelId} />,
        ]}
      />

      {grouparooUiEdition() !== "config" && (
        <Row>
          <Col>
            <strong>Last Member Calculation</strong>:{" "}
            {group.calculatedAt ? (
              <span>{formatTimestamp(group.calculatedAt)}</span>
            ) : (
              "Never Calculated"
            )}
            <br />
            {group.nextCalculatedAt ? (
              <span>
                <strong>Next Member Calculation</strong>:{" "}
                {formatTimestamp(group.nextCalculatedAt)}
              </span>
            ) : null}
            <br />
            <br />
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Form id="form" onSubmit={submit} autoComplete="off">
            <fieldset disabled={Boolean(group.locked)}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Group Name"
                  value={group.name}
                  disabled={loading}
                  onChange={update}
                />
                <Form.Control.Feedback type="invalid">
                  Name is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="matchType">
                <Form.Label>Match Type</Form.Label>
                <Form.Control
                  as="select"
                  value={group.matchType}
                  onChange={update}
                  disabled={loading}
                >
                  <option>any</option>
                  <option>all</option>
                </Form.Control>
              </Form.Group>

              <LoadingButton variant="primary" type="submit" loading={loading}>
                Update
              </LoadingButton>

              <br />
              <br />

              {group.state === "deleted" ? (
                <>
                  <LoadingButton
                    variant="danger"
                    loading={loading}
                    size="sm"
                    onClick={() => {
                      handleDelete(true);
                    }}
                  >
                    Force Delete
                  </LoadingButton>
                  <p>
                    <br />
                    <em>
                      Force-Deleting this Group will immediately remove all
                      Group Members, but not export them to Destinations. Only
                      use this if there is a problem with your Group.
                    </em>
                  </p>
                </>
              ) : (
                <LoadingButton
                  variant="danger"
                  loading={loading}
                  size="sm"
                  onClick={() => {
                    handleDelete(grouparooUiEdition() === "config");
                  }}
                >
                  Delete
                </LoadingButton>
              )}
            </fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { groupId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  ensureMatchingModel("Group", group.modelId, modelId.toString());
  return { group };
};
