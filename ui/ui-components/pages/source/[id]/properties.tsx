import { Fragment, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Button, Form, Badge, Alert } from "react-bootstrap";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";
import LoadingButton from "../../../components/loadingButton";
import Link from "next/link";
import SourceTabs from "../../../components/tabs/source";
import Head from "next/head";
import { Models, Actions } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { makeLocal } from "../../../utils/makeLocal";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    source,
    preview,
    types,
    defaultPropertyOptions,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    source: Models.SourceType;
    preview: Actions.SourcePreview["preview"];
    types: Actions.PropertiesOptions["types"];
    defaultPropertyOptions: Actions.SourceDefaultPropertyOptions["defaultPropertyOptions"];
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Models.PropertyType[]>(
    props.properties
  );

  async function loadProperties() {
    setLoading(true);
    const response: Actions.PropertiesList = await execApi(
      "get",
      `/properties`
    );
    if (response?.properties) setProperties(response.properties);
    setLoading(false);
  }

  function TableRow({ column }: { column: string }) {
    const existingProperty =
      properties.find((p) => p.key.toLowerCase() === column.toLowerCase()) ||
      properties.find((p) => p.options?.column === column);
    const disabled = existingProperty ? true : false;

    const [id, setId] = useState(
      existingProperty ? existingProperty.id : column
    );
    const [key, setKey] = useState(
      existingProperty ? existingProperty.key : column
    );
    const [type, setType] = useState<string>(
      existingProperty ? existingProperty.type : "string"
    );
    const [unique, setUnique] = useState(
      existingProperty ? existingProperty.unique : false
    );
    const [isArray, setIsArray] = useState(
      existingProperty ? existingProperty.isArray : false
    );

    const defaultOptions: { [key: string]: string } = {};
    defaultPropertyOptions.map((propertyOption) => {
      const defaultOption = propertyOption.options.find((o) => o.default) ??
        propertyOption.options.find((o) => o.key === column) ??
        propertyOption.options[0] ?? { key: "?" };
      defaultOptions[propertyOption.key] = defaultOption.key;
    });

    const [options, setOptions] = useState(
      existingProperty ? existingProperty.options : defaultOptions
    );

    async function createProperty() {
      setLoading(true);
      const response: Actions.PropertyCreate = await execApi(
        "post",
        `/property/`,
        {
          sourceId: source.id,
          id,
          key,
          type,
          unique,
          isArray,
          state: "ready",
          options,
        }
      );
      if (response.property) {
        await loadProperties();
        successHandler.set({ message: "Property Created!" });
      }
      setLoading(false);
    }

    return (
      <tr>
        <td>
          <strong>
            {existingProperty ? (
              <Link
                href={`/property/[id]/edit`}
                as={`/property/${existingProperty.id}/edit`}
              >
                <a>{column}</a>
              </Link>
            ) : (
              column
            )}
          </strong>
        </td>
        <td>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={disabled}
          />
        </td>
        <td>
          <Form.Control
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            disabled={disabled}
          />
        </td>
        <td>
          <Form.Control
            as="select"
            value={type}
            onChange={(e) => setType(e.target.value)}
            disabled={disabled}
          >
            {types.map((v) => (
              <option key={`types-opt-${v}`}>{v}</option>
            ))}
          </Form.Control>
        </td>
        <td>
          <Form.Check
            checked={unique}
            onChange={(e) => setUnique(e.target.checked)}
            disabled={disabled}
          />
        </td>
        <td>
          <Form.Check
            checked={isArray}
            onChange={(e) => setIsArray(e.target.checked)}
            disabled={disabled}
          />
        </td>
        <td>
          <code>
            <Fragment key={`opts-${column}`}>
              {Object.keys(options).map((opt) => (
                <Form.Group as={Col} key={`opt-${column}-${opt}`}>
                  <Form.Label>{opt}</Form.Label>
                  <Form.Control
                    style={{ fontSize: 10 }}
                    type="text"
                    value={options[opt].toString()}
                    disabled={disabled}
                    onChange={(e) => {
                      const _options = makeLocal(options);
                      _options[opt] = e.target.value;
                      setOptions(_options);
                    }}
                  />
                </Form.Group>
              ))}
            </Fragment>
          </code>
        </td>
        <td>
          {existingProperty ? (
            <Badge variant="info">exists</Badge>
          ) : (
            // <Button
            //   size="sm"
            //   onClick={() => createProperty()}
            //   disabled={loading}
            // >
            //   Create
            // </Button>
            <LoadingButton
              size="sm"
              disabled={loading}
              onClick={() => createProperty()}
            >
              Create
            </LoadingButton>
          )}
        </td>
      </tr>
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <PageHeader
        icon={source.app.icon}
        title={`${source.name} - Properties`}
        badges={[
          <LockedBadge object={source} />,
          <StateBadge state={source.state} />,
        ]}
      />

      <p>
        Here are the Properties that this source provides. You can quickly add
        simple Properties from here. If you need more control over your
        Properties, you can create a single Property from the{" "}
        <Link
          href={`/source/[id]/overview`}
          as={`/source/${source.id}/overview`}
        >
          <a>Soruce Overview page</a>
        </Link>
        .
      </p>

      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>column</th>
                <th>id</th>
                <th>key</th>
                <th>type</th>
                <th>unique</th>
                <th>isArray</th>
                <th>options</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {preview[0]
                ? Object.keys(preview[0]).map((column) => (
                    <TableRow key={`column-${column}`} column={column} />
                  ))
                : null}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${id}`);
  const { preview } = await execApi("get", `/source/${id}/preview`);
  const { defaultPropertyOptions } = await execApi(
    "get",
    `/source/${id}/defaultPropertyOptions`
  );
  const { properties } = await execApi("get", `/properties`);
  const { types } = await execApi("get", `/propertyOptions`);

  return { source, properties, preview, types, defaultPropertyOptions };
};
