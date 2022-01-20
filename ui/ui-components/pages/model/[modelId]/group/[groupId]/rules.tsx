import { NextPageContext } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Form, Table, Badge, Button } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { errorHandler, successHandler } from "../../../../../eventHandlers";
import { UseApi } from "../../../../../hooks/useApi";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import GroupTabs from "../../../../../components/tabs/Group";
import DatePicker from "../../../../../components/DatePicker";
import LoadingButton from "../../../../../components/LoadingButton";
import { Models, Actions } from "../../../../../utils/apiData";
import { makeLocal } from "../../../../../utils/makeLocal";
import PageHeader from "../../../../../components/PageHeader";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";

export default function Page(props) {
  const {
    model,
    properties,
    ruleLimit,
    ops,
    topLevelGroupRules,
  }: {
    model: Models.GrouparooModelType;
    properties: Models.PropertyType[];
    ruleLimit: Actions.GroupsRuleOptions["ruleLimit"];
    ops: Actions.GroupsRuleOptions["ops"];
    topLevelGroupRules: Actions.GroupsRuleOptions["topLevelGroupRules"];
  } = props;
  const [group, setGroup] = useState<Models.GroupType>(props.group);
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [localRules, setLocalRules] = useState(makeLocal(props.group.rules));
  const [countPotentialMembers, setCountPotentialMembers] = useState(0);
  const [componentCounts, setComponentCounts] = useState({});
  const [autocompleteResults, setAutoCompleteResults] = useState({});
  // const [funnelCounts, setFunnelCounts] = useState([]);

  useEffect(() => {
    getCounts();

    // seed typeahead responses
    const _autocompleteResults = Object.assign({}, autocompleteResults);
    props.group.rules.map((rule) => {
      _autocompleteResults[rule.key] = [rule.match];
    });
    setAutoCompleteResults(_autocompleteResults);
  }, []);

  async function getCounts(useCache = true) {
    setLoading(true);
    const componentMembersResponse: Actions.GroupCountComponentMembers =
      await execApi(
        "get",
        `/group/${group.id}/countComponentMembers`,
        { rules: localRules },
        useCache
      );

    if (componentMembersResponse?.componentCounts) {
      setComponentCounts(componentMembersResponse.componentCounts);
      // setFunnelCounts(response.funnelCounts);
    }

    const potentialMembersResponse: Actions.GroupCountPotentialMembers =
      await execApi(
        "get",
        `/group/${group.id}/countPotentialMembers`,
        { rules: localRules },
        useCache
      );
    if (potentialMembersResponse) {
      setCountPotentialMembers(potentialMembersResponse.count);
    }

    setLoading(false);
  }

  function addRule() {
    const _rules = [...localRules];
    if (_rules.length >= ruleLimit) {
      alert(`only ${ruleLimit} rules allowed`);
      return;
    }

    _rules.push({
      key: propertiesAndTopLevelGroupRules[0].key,
      topLevel: properties.length === 0,
      match: null,
      operation: { op: "exists" },
    });

    setLocalRules(_rules);
  }

  function deleteRule(idx: number) {
    const _rules = [...localRules];
    _rules.splice(idx, 1);
    setLocalRules(_rules);
  }

  async function updateRules() {
    setLoading(true);
    const response: Actions.GroupEdit = await execApi(
      "put",
      `/group/${group.id}`,
      { id: group.id, rules: localRules }
    );
    if (response?.group) {
      successHandler.set({ message: "Group Updated" });
      setGroup(response.group);
      setLocalRules(response.group.rules);
    }
    setLoading(false);
  }

  async function autocompleteRecordPropertySearch(localRule, match) {
    const propertyId = properties.filter((r) => r.key === localRule.key)[0]?.id;

    // we are dealing with a topLevelGroupRule
    if (!propertyId) return;

    setLoading(true);
    const response: Actions.RecordAutocompleteRecordProperty = await execApi(
      "get",
      `/records/autocompleteRecordProperty`,
      { propertyId, match }
    );
    if (response.recordProperties) {
      const _autocompleteResults = Object.assign({}, autocompleteResults);
      _autocompleteResults[localRule.key] = response.recordProperties;
      setAutoCompleteResults(_autocompleteResults);
    }
    setLoading(false);
  }

  let rowChanges = false;

  const propertiesAndTopLevelGroupRules = properties.concat(
    // @ts-ignore
    topLevelGroupRules
  );

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>
      <GroupTabs group={group} model={model} />

      <PageHeader
        title={`${group.name} - Rules`}
        iconType="group"
        badges={[
          <LockedBadge object={group} />,
          <StateBadge state={group.state} />,
          <ModelBadge modelName={group.modelName} modelId={group.modelId} />,
        ]}
      />

      {grouparooUiEdition() !== "config" && (
        <p>
          Total Records in this group: &nbsp;
          <Badge style={{ fontSize: 16 }} variant="info">
            {countPotentialMembers}
          </Badge>
        </p>
      )}
      <p>
        Define the record properties that you want to segment by. Records in
        this Group will match <Badge variant="success">{group.matchType}</Badge>{" "}
        of these rules.
      </p>
      <Form inline autoComplete="off">
        <fieldset disabled={Boolean(group.locked)}>
          <Table bordered size="sm">
            <thead>
              <tr>
                <th />
                <th>
                  <strong>Record Property</strong>
                </th>
                <th>
                  <strong>Operation</strong>
                </th>
                {grouparooUiEdition() !== "config" && (
                  <th>
                    <strong># of Records</strong>
                  </th>
                )}
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              {localRules.map((rule, idx) => {
                let type: string;
                propertiesAndTopLevelGroupRules.forEach((r) => {
                  if (rule.key === r.key) {
                    type = r.type;
                  }
                });

                if (ops[type] && rule.op) {
                  if (ops[type].indexOf(rule.op) < 0) {
                    rule.op = ops[type][0];
                  }
                }

                let rowChanged = false;
                if (!rulesAreEqual(group.rules[idx], localRules[idx])) {
                  rowChanged = true;
                  rowChanges = true;
                }

                return (
                  <tr key={`rule-${rule.key}-${idx}`}>
                    <td>
                      <h5>
                        <Badge variant={rowChanged ? "warning" : "light"}>
                          {idx}
                        </Badge>
                      </h5>
                    </td>
                    <td>
                      <Form.Group controlId={`${rule.key}-key-${idx}`}>
                        <Form.Control
                          as="select"
                          value={rule.key}
                          disabled={loading}
                          onChange={(e: any) => {
                            const _rules = [...localRules];
                            rule.key = e.target.value;
                            rule.operation.op = "exists"; // every type has an existence check
                            rule.match = undefined;
                            rule.relativeMatchNumber = undefined;
                            rule.relativeMatchUnit = undefined;
                            rule.relativeMatchDirection = undefined;
                            rule.topLevel = topLevelGroupRules
                              .map((tlgr) => tlgr.key)
                              .includes(rule.key);
                            _rules[idx] = rule;
                            setLocalRules(_rules);
                            autocompleteRecordPropertySearch(
                              { key: e.target.value },
                              "%"
                            );
                          }}
                        >
                          {propertiesAndTopLevelGroupRules.map((rule, idx) => (
                            <Fragment key={`ruleKeyOpt-${rule.key}-${idx}`}>
                              {idx === 0 ? (
                                <option disabled>
                                  --- record properties ---
                                </option>
                              ) : null}
                              {idx === properties.length ? (
                                <option disabled>--- record columns ---</option>
                              ) : null}
                              <option>{rule.key}</option>
                            </Fragment>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </td>

                    <td>
                      <Form.Group controlId={`${rule.key}-op-${idx}`}>
                        <Form.Control
                          as="select"
                          value={rule.operation.op}
                          disabled={loading}
                          onChange={(e: any) => {
                            const _rules = [...localRules];
                            rule.operation.op = e.target.value;
                            _rules[idx] = rule;
                            setLocalRules(_rules);
                          }}
                        >
                          <option disabled>(operation)</option>
                          {ops[type]
                            ? ops[type].map((operation) => (
                                <option
                                  value={operation.op}
                                  key={`ruleKeyOpt-${rule.key}-${idx}-${operation.op}`}
                                >
                                  {operation.description}
                                </option>
                              ))
                            : null}
                        </Form.Control>
                        <span>&nbsp;</span>

                        {/* exists or not exists */}
                        {["exists", "notExists"].includes(rule.operation.op) ? (
                          <></>
                        ) : null}

                        {/* absolute dates */}
                        {!["exists", "notExists"].includes(rule.operation.op) &&
                        type === "date" &&
                        !rule.operation.op.match(/relative_/) ? (
                          <>
                            <DatePicker
                              selected={
                                rule.match && rule.match !== "null"
                                  ? new Date(parseInt(rule.match))
                                  : null
                              }
                              onChange={(d: Date) => {
                                const _rules = [...localRules];
                                rule.match = d.getTime();
                                _rules[idx] = rule;
                                setLocalRules(_rules);
                              }}
                            />
                          </>
                        ) : null}

                        {/* relative dates */}
                        {!["exists", "notExists"].includes(rule.operation.op) &&
                        type === "date" &&
                        rule.operation.op.match(/relative_/) ? (
                          <>
                            <Form.Control
                              type="number"
                              disabled={loading}
                              placeholder="(number)"
                              value={rule.relativeMatchNumber?.toString() || ""}
                              onChange={(e: any) => {
                                const _rules = [...localRules];
                                rule.relativeMatchNumber = e.target.value;
                                delete rule.match;
                                _rules[idx] = rule;
                                setLocalRules(_rules);
                              }}
                            />

                            <span>&nbsp;</span>

                            <Form.Control
                              as="select"
                              disabled={loading}
                              value={rule.relativeMatchUnit || ""}
                              onChange={(e: any) => {
                                const _rules = [...localRules];
                                rule.relativeMatchUnit = e.target.value;
                                _rules[idx] = rule;
                                setLocalRules(_rules);
                              }}
                            >
                              <option disabled value="">
                                (unit)
                              </option>
                              {ops._relativeMatchUnits.map((unit) => (
                                <option
                                  value={unit}
                                  key={`relativeMatchUnit-${rule.key}-${idx}-${unit}`}
                                >
                                  {unit}
                                </option>
                              ))}
                            </Form.Control>
                          </>
                        ) : null}

                        {/* normal matchers - numbers */}
                        {!["exists", "notExists"].includes(rule.operation.op) &&
                        type !== "date" &&
                        ["integer", "float"].includes(type) ? (
                          <div
                            className="form-inline"
                            style={{ minWidth: 250 }}
                          >
                            <Form.Control
                              disabled={loading}
                              placeholder="(number)"
                              value={rule.match?.toString() || ""}
                              onChange={(e: any) => {
                                const _rules = [...localRules];
                                rule.match = e.target.value;
                                _rules[idx] = rule;
                                setLocalRules(_rules);
                              }}
                            />
                          </div>
                        ) : null}

                        {/* normal matchers - strings */}
                        {!["exists", "notExists"].includes(rule.operation.op) &&
                        type !== "date" &&
                        !["integer", "float"].includes(type) ? (
                          <div
                            className="form-inline"
                            style={{ minWidth: 250 }}
                          >
                            <AsyncTypeahead
                              key={`typeahead-${rule.key}`}
                              id={`typeahead-${rule.key}`}
                              minLength={0}
                              labelKey="key"
                              isLoading={loading}
                              allowNew={true}
                              onChange={(selected) => {
                                if (!selected[0]) {
                                  return;
                                }

                                const _rules = [...localRules];
                                rule.match = selected[0].key
                                  ? selected[0].key // when a new custom option is set
                                  : selected[0]; // when a list option is chosen
                                _rules[idx] = rule;
                                setLocalRules(_rules);
                              }}
                              onBlur={(e) => {
                                const value = e.target.value;
                                if (value && value.length > 0) {
                                  const _rules = [...localRules];
                                  rule.match = value;
                                  _rules[idx] = rule;
                                  setLocalRules(_rules);
                                }
                              }}
                              options={
                                autocompleteResults[rule.key]?.map((v) =>
                                  v?.toString()
                                ) || []
                              }
                              onSearch={(_match) => {
                                autocompleteRecordPropertySearch(rule, _match);
                              }}
                              placeholder={`match (% is wildcard)`}
                              defaultSelected={
                                rule.match ? [rule.match.toString()] : undefined
                              }
                            />
                          </div>
                        ) : null}
                      </Form.Group>
                    </td>

                    {grouparooUiEdition() !== "config" && (
                      <td>
                        <Badge variant="info">{componentCounts[idx]}</Badge>
                      </td>
                    )}

                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          deleteRule(idx);
                        }}
                      >
                        x
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {localRules.length < group.rules.length || rowChanges ? (
            <p>
              <Badge variant="warning">Unsaved Rule Changes</Badge>
            </p>
          ) : null}
          <Button size="sm" variant="outline-primary" onClick={addRule}>
            Add Rule
          </Button>
          &nbsp;
          <LoadingButton
            loading={loading}
            variant="outline-dark"
            size="sm"
            hideOn={["config"]}
            onClick={() => getCounts(false)}
          >
            Count Potential Group Members
          </LoadingButton>
          <br />
          <br />{" "}
          {group.locked ? (
            <Button disabled>Save Rules</Button>
          ) : (
            <LoadingButton
              loading={loading}
              variant="primary"
              onClick={async () => {
                await updateRules();
                await getCounts();
                window.location.reload();
              }}
            >
              Save Rules
            </LoadingButton>
          )}
        </fieldset>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { groupId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  ensureMatchingModel("Group", group.modelId, modelId.toString());

  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const { properties } = await execApi("get", `/properties`, {
    state: "ready",
    modelId: group?.modelId,
  });
  const { ruleLimit, ops, topLevelGroupRules } = await execApi(
    "get",
    `/groups/ruleOptions`
  );
  return { group, model, properties, ruleLimit, ops, topLevelGroupRules };
};

function rulesAreEqual(a, b) {
  if (!a || !b) return false;
  if (a.operation?.op !== b.operation?.op) return false;

  const keys = [
    "key",
    "match",
    "relativeMatchNumber",
    "relativeMatchUnit",
    "relativeMatchDirection",
  ];

  for (const i in keys) {
    const key = keys[i];

    if (
      (a[key] === undefined || a[key] == null) &&
      (b[key] === undefined || b[key] == null)
    ) {
      continue;
    }

    if (a[key] !== b[key]) return false;
  }

  return true;
}
