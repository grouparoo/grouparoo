import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button, Table, Badge } from "react-bootstrap";
import StateBadge from "../../stateBadge";
import Loader from "../../loader";

export default function RulesBuilder({
  errorHandler,
  successHandler,
  apiVersion,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [group, setGroup] = useState({
    guid: "",
    name: "",
    type: "",
    state: "",
    calculatedAt: "",
    matchType: "",
    rules: [],
  });
  const [loading, setLoading] = useState(false);
  const [localRules, setLocalRules] = useState([]);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const [ruleLimit, setRuleLimit] = useState(0);
  const [ops, setOps] = useState({ _dictionary: {} });
  const [countPotentialMembers, setCountPotentialMembers] = useState(0);
  const [componentCounts, setComponentCounts] = useState({});
  // const [funnelCounts, setFunnelCounts] = useState([]);

  const { guid } = query;

  useEffect(() => {
    async function loadAll() {
      const _group = await load();
      if (_group.type === "calculated") {
        loadRuleOptions();
        loadProfilePropertyRules();
        getCounts();
      }
    }

    loadAll();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/group/${guid}`);
    setLoading(false);
    if (response?.group) {
      // TODO: Why is this require to break the object chain to rules?
      setGroup(JSON.parse(JSON.stringify(response.group)));
      setLocalRules(response.group.rules);
    }

    return response.group;
  }

  async function loadRuleOptions() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/groups/ruleOptions`
    );
    setLoading(false);
    if (response?.ruleLimit) {
      setRuleLimit(response.ruleLimit);
      setOps(response.ops);
    }
  }

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`,
      { state: "ready" }
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
    }
  }

  async function getCounts(useCache = true) {
    setLoading(true);
    let response = await execApi(
      "get",
      `/api/${apiVersion}/group/${guid}/countComponentMembers`,
      { rules: localRules },
      null,
      null,
      useCache
    );
    setLoading(false);
    if (response?.componentCounts) {
      setComponentCounts(response.componentCounts);
      // setFunnelCounts(response.funnelCounts);
    }

    response = await execApi(
      "get",
      `/api/${apiVersion}/group/${guid}/countPotentialMembers`,
      { rules: localRules },
      null,
      null,
      useCache
    );
    if (response) {
      setCountPotentialMembers(response.count);
    }
  }

  function addRule() {
    const _rules = [...localRules];
    if (_rules.length >= ruleLimit) {
      alert(`only ${ruleLimit} rules allowed`);
      return;
    }

    _rules.push({
      key: profilePropertyRules[0].key,
      match: "",
      op: "gt",
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
    const response = await execApi("put", `/api/${apiVersion}/group/${guid}`, {
      guid: group.guid,
      rules: localRules,
    });
    setLoading(false);
    if (response?.group) {
      successHandler.set({ message: "Group Updated" });
      setGroup(response.group);
      setLocalRules(response.group.rules);
    }
  }

  if (group.type === "") {
    return <Loader />;
  }

  if (group.type === "manual") {
    return <p>Group is not calculated</p>;
  }

  let rowChanges = false;

  return (
    <>
      <h3>Rules for {group.name}</h3>
      <p>
        <Badge style={{ fontSize: 20 }} variant="info">
          {countPotentialMembers}
        </Badge>{" "}
        profiles matching {group.matchType} rules
      </p>

      <p>
        <StateBadge state={group.state} />
      </p>

      <Form>
        <Table bordered size="sm">
          <thead>
            <tr>
              <td />
              <td>
                <strong>Profile Property</strong>
              </td>
              <td>
                <strong>Op</strong>
              </td>
              <td>
                <strong>Match</strong>
              </td>

              <td>Profiles fitting rule</td>
              <td>&nbsp;</td>
            </tr>
          </thead>

          <tbody>
            {localRules.map((rule, idx) => {
              let type: string;
              profilePropertyRules.forEach((r) => {
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
                        onChange={(e: any) => {
                          const _rules = [...localRules];
                          rule.key = e.target.value;
                          _rules[idx] = rule;
                          setLocalRules(_rules);
                        }}
                      >
                        {profilePropertyRules.map((rule) => (
                          <option key={`ruleKeyOpt-${rule.key}-${idx}`}>
                            {rule.key}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </td>

                  <td>
                    <Form.Group controlId={`${rule.key}-op-${idx}`}>
                      <Form.Control
                        as="select"
                        value={rule.op}
                        onChange={(e: any) => {
                          const _rules = [...localRules];
                          rule.op = e.target.value;
                          _rules[idx] = rule;
                          setLocalRules(_rules);
                        }}
                      >
                        {ops[type]
                          ? ops[type].map((op) => (
                              <option
                                value={op}
                                key={`ruleKeyOpt-${rule.key}-${idx}-${op}`}
                              >
                                {ops._dictionary[op]} ({op})
                              </option>
                            ))
                          : null}
                      </Form.Control>
                    </Form.Group>
                  </td>

                  <td>
                    {rule.op === "exists" || rule.op === "notExists" ? (
                      "N/A"
                    ) : (
                      <Form.Group controlId={`${rule.key}-match-${idx}`}>
                        <Form.Control
                          required
                          type="text"
                          value={rule.match.toString()}
                          onChange={(e: any) => {
                            const _rules = [...localRules];
                            rule.match = e.target.value;
                            _rules[idx] = rule;
                            setLocalRules(_rules);
                          }}
                        />
                      </Form.Group>
                    )}
                  </td>

                  <td>
                    <Badge variant="info">{componentCounts[idx]}</Badge>
                  </td>

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
        <Button size="sm" variant="info" onClick={addRule}>
          Add Rule
        </Button>
        &nbsp;
        <Button
          active={!loading}
          variant="info"
          size="sm"
          onClick={async () => {
            await getCounts(false);
          }}
        >
          Count Potential Members
        </Button>
        <br />
        <br />
        <Button
          active={!loading}
          variant="success"
          onClick={async () => {
            await updateRules();
            await getCounts();
          }}
        >
          Save Rules
        </Button>
      </Form>
    </>
  );
}

function rulesAreEqual(a, b) {
  let matched = true;

  const keys = [
    "key",
    "op",
    "match",
    "relativeMatchNumber",
    "relativeMatchUnit",
    "relativeMatchDirection",
  ];

  if (!a || !b) {
    return false;
  }

  for (const i in keys) {
    const key = keys[i];

    if (
      (a[key] === undefined || a[key] == null) &&
      (b[key] === undefined || b[key] == null)
    ) {
      continue;
    }

    if (a[key] !== b[key]) {
      matched = false;
      break;
    }
  }

  return matched;
}
