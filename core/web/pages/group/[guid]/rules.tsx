import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import StateBadge from "../../../components/stateBadge";
import Head from "next/head";
import GroupTabs from "../../../components/tabs/group";
import DatePicker from "../../../components/datePicker";
import { Form, Button, Table, Badge } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import { GroupAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    profilePropertyRules,
    ruleLimit,
    ops,
  } = props;
  const [group, setGroup] = useState<GroupAPIData>(props.group);
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [localRules, setLocalRules] = useState([]);
  const [countPotentialMembers, setCountPotentialMembers] = useState(0);
  const [componentCounts, setComponentCounts] = useState({});
  const [autocompleteResults, setAutoCompleteResults] = useState({});
  // const [funnelCounts, setFunnelCounts] = useState([]);

  const typeaheadTypes = ["email", "string"];

  useEffect(() => {
    async function loadAll() {
      const _group = await load();
      if (_group.type === "calculated") {
        getCounts();
      }
    }

    loadAll();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/group/${group.guid}`);
    setLoading(false);
    if (response?.group) {
      // TODO: Why is this require to break the object chain to rules?
      setGroup(JSON.parse(JSON.stringify(response.group)));
      setLocalRules(response.group.rules);

      // seed typeahead responses
      const _autocompleteResults = Object.assign({}, autocompleteResults);
      response.group.rules.map((rule) => {
        _autocompleteResults[rule.key] = [rule.match];
      });
      setAutoCompleteResults(_autocompleteResults);
    }

    return response.group;
  }

  async function getCounts(useCache = true) {
    setLoading(true);
    let response = await execApi(
      "get",
      `/group/${group.guid}/countComponentMembers`,
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
      `/group/${group.guid}/countPotentialMembers`,
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
    const response = await execApi("put", `/group/${group.guid}`, {
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

  async function autocompleteProfilePropertySearch(localRule, match) {
    const profilePropertyRuleGuid = profilePropertyRules.filter(
      (r) => r.key === localRule.key
    )[0].guid;

    setLoading(true);
    const response = await execApi(
      "get",
      `/profiles/autocompleteProfileProperty`,
      { profilePropertyRuleGuid, match }
    );
    if (response.profileProperties) {
      const _autocompleteResults = Object.assign({}, autocompleteResults);
      _autocompleteResults[localRule.key] = response.profileProperties;
      setAutoCompleteResults(_autocompleteResults);
    }
    setLoading(false);
  }

  if (group.type === "manual") {
    return <p>Group is not calculated</p>;
  }

  let rowChanges = false;

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>

      <GroupTabs group={group} />

      <h1>Group Rules for {group.name}</h1>
      <p>
        <StateBadge state={group.state} />
      </p>
      <p>Define the profile properties that you want to segment by:</p>

      <Form>
        <Table bordered size="sm">
          <thead>
            <tr>
              <td />
              <td>
                <strong>Profile Property</strong>
              </td>
              <td>
                <strong>Operation</strong>
              </td>
              <td>
                <strong>Value</strong>
              </td>
              <td>
                <strong># of Profiles</strong>
              </td>
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
                          autocompleteProfilePropertySearch(
                            { key: e.target.value },
                            "%"
                          );
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
                    ) : typeaheadTypes.includes(type) ? (
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
                        options={autocompleteResults[rule.key] || []}
                        onSearch={(_match) => {
                          autocompleteProfilePropertySearch(rule, _match);
                        }}
                        placeholder={`matching string (% is wildcard)`}
                        defaultSelected={
                          rule.match ? [rule.match.toString()] : undefined
                        }
                      />
                    ) : type === "date" && !rule.op.match(/relative_/) ? (
                      <DatePicker
                        selected={
                          rule.match && rule.match !== "null"
                            ? new Date(parseInt(rule.match))
                            : new Date()
                        }
                        onChange={(d: Date) => {
                          const _rules = [...localRules];
                          rule.match = d.getTime();
                          _rules[idx] = rule;
                          setLocalRules(_rules);
                        }}
                      />
                    ) : (
                      <Form.Group controlId={`${rule.key}-match-${idx}`}>
                        <Form.Control
                          required
                          type="text"
                          value={
                            rule.relativeMatchDirection
                              ? rule.relativeMatchNumber?.toString()
                              : rule.match?.toString()
                          }
                          onChange={(e: any) => {
                            const _rules = [...localRules];
                            if (rule.relativeMatchDirection) {
                              rule.relativeMatchNumber = e.target.value;
                              delete rule.match;
                            } else {
                              rule.match = e.target.value;
                              delete rule.relativeMatchNumber;
                            }
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
        <Button size="sm" variant="outline-primary" onClick={addRule}>
          Add Rule
        </Button>
        &nbsp;
        <Button
          disabled={loading}
          variant="outline-dark"
          size="sm"
          onClick={async () => {
            await getCounts(false);
          }}
        >
          Count Potential Group Members
        </Button>
        <br />
        <br />
        <p>
          Total Profiles in this group: &nbsp;
          <Badge style={{ fontSize: 16 }} variant="info">
            {countPotentialMembers}
          </Badge>{" "}
        </p>
        <Button
          active={!loading}
          variant="primary"
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

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { group } = await execApi("get", `/group/${guid}`);
  const { profilePropertyRules } = await execApi(
    "get",
    `/profilePropertyRules`,
    {
      state: "ready",
    }
  );
  const { ruleLimit, ops } = await execApi("get", `/groups/ruleOptions`);
  return { group, profilePropertyRules, ruleLimit, ops };
};

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
