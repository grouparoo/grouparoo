import { Fragment, useState } from "react";
import { UseApi } from "../../../../../hooks/useApi";
import { Alert, Row, Col, Table, Form } from "react-bootstrap";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import LoadingButton from "../../../../../components/LoadingButton";
import LinkButton from "../../../../../components/LinkButton";
import Link from "next/link";
import SourceTabs from "../../../../../components/tabs/Source";
import Head from "next/head";
import { Models, Actions } from "../../../../../utils/apiData";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";
import { generateId } from "../../../../../utils/generateId";
import PropertyAddButton from "../../../../../components/property/Add";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";

export default function Page(props) {
  const {
    model,
    errorHandler,
    successHandler,
    source,
    preview,
    columnSpeculation,
    types,
    defaultPropertyOptions,
  }: {
    model: Models.GrouparooModelType;
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    source: Models.SourceType;
    preview: Actions.SourcePreview["preview"];
    columnSpeculation: Actions.SourcePreview["columnSpeculation"];
    types: Actions.PropertiesOptions["types"];
    defaultPropertyOptions: Actions.SourceDefaultPropertyOptions["defaultPropertyOptions"];
  } = props;

  const { execApi } = UseApi(props, errorHandler);
  const [properties, setProperties] = useState<Models.PropertyType[]>(
    props.properties
  );
  const primaryOptionKey = defaultPropertyOptions.find(
    (dpo) => dpo.primary === true
  )?.key; // e.g.: "column"
  const optionWithDefaults = defaultPropertyOptions
    .filter((dpo) => dpo.key !== primaryOptionKey)
    .filter((dpo) => dpo.options.find((o) => o.default));
  const optionWithDefaultOptionDefaults = optionWithDefaults.map((dpo) => {
    let defaultOpt = dpo.options.find((o) => o.default);
    return { key: dpo.key, defaultValue: defaultOpt.key };
  });

  async function loadProperties() {
    const response: Actions.PropertiesList = await execApi(
      "get",
      `/properties`
    );
    if (response?.properties) setProperties(response.properties);
  }

  function TableRow({ column }: { column: string }) {
    const [loading, setLoading] = useState(false);

    const defaultOptions: { [key: string]: string } = {};
    defaultPropertyOptions.map((propertyOption) => {
      const defaultOption = propertyOption.options.find((o) => o.default) ??
        propertyOption.options.find((o) => o.key === column) ??
        propertyOption.options[0] ?? { key: "?" };
      defaultOptions[propertyOption.key] = defaultOption.key;
    });

    let exactProperty: Models.PropertyType;
    let otherProperties: Models.PropertyType[] = [];

    for (const property of properties) {
      // console.log(property)
      if (property.sourceId !== source.id) continue;
      if (property.options[primaryOptionKey] !== column) continue;

      let optMatch = true;
      if (property.filters?.length > 0) optMatch = false;

      for (const [key, value] of Object.entries(property.options)) {
        if (key === primaryOptionKey) continue;
        if (!optionWithDefaults.map((dpo) => dpo.key).includes(key)) {
          optMatch = false;
        }
        let defaultValue = optionWithDefaultOptionDefaults.find(
          (o) => o.key === key
        );
        if (defaultValue && defaultValue.defaultValue !== value) {
          optMatch = false;
        }
      }

      if (optMatch) {
        exactProperty = property;
      } else {
        otherProperties.push(property);
      }
    }

    const disabled = exactProperty
      ? exactProperty.sourceId === source.id
      : false;

    const [key, setKey] = useState(
      exactProperty && exactProperty.sourceId === source.id
        ? exactProperty.key
        : columnSpeculation[column].suggestedPropertyKey
        
    );
    const [type, setType] = useState<typeof exactProperty["type"]>(
      exactProperty && exactProperty.sourceId === source.id
        ? exactProperty.type
        : columnSpeculation[column].type
    );
    const [unique, setUnique] = useState(
      exactProperty ? exactProperty.unique : columnSpeculation[column].isUnique
    );

    const hiddenOptions = optionWithDefaults.map((o) => o.key);
    const [options, setOptions] = useState(
      exactProperty && exactProperty.sourceId === source.id
        ? exactProperty.options
        : defaultOptions
    );

    async function createProperty() {
      setLoading(true);
      const response: Actions.PropertyCreate = await execApi(
        "post",
        `/property`,
        {
          sourceId: source.id,
          id: key, // reuse the key as ID
          key,
          type,
          unique,
          options,
          isArray: false,
          state: "ready",
        }
      );
      if (response.property) {
        successHandler.set({ message: "Property Created!" });
        loadProperties();
      } else {
        setLoading(false);
      }
    }

    return (
      <>
        <tr>
          <td>
            <Fragment>
              {Object.keys(options)
                .filter((opt) => !hiddenOptions.includes(opt))
                .sort()
                .map((opt) => (
                  <Form.Group as={Col} key={`opt-${column}-${opt}`}>
                    <Form.Row>
                      <Col md={3}>
                        <code>
                          <Form.Label>{opt}: </Form.Label>
                        </code>
                      </Col>
                      <Col>
                        <strong>{options[opt].toString()}</strong>
                        {/* We actually don't want to allow changes to the provided source options? */}
                        {/* <Form.Control
                        size="sm"
                        type="text"
                        value={options[opt].toString()}
                        disabled={disabled}
                        onChange={(e) => {
                          const _options = makeLocal(options);
                          _options[opt] = e.target.value;
                          setOptions(_options);
                        }}
                      /> */}
                      </Col>
                    </Form.Row>
                  </Form.Group>
                ))}
            </Fragment>
          </td>
          <td>➡</td>
          <td>
            <Form.Control
              size="sm"
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              disabled={disabled}
            />{!exactProperty && key !== column ? <Alert variant="info">Property with key "{column}" already exists</Alert>: null}
          </td>
          <td>
            <Form.Control
              size="sm"
              as="select"
              value={type}
              onChange={(e) =>
                setType(e.target.value as typeof exactProperty["type"])
              }
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
            {exactProperty && exactProperty.sourceId === source.id ? (
              <LinkButton
                variant="outline-info"
                size="sm"
                href={`/model/${source.modelId}/property/${exactProperty.id}/edit`}
              >
                View
              </LinkButton>
            ) : (
              <LoadingButton
                size="sm"
                loading={loading}
                onClick={() => createProperty()}
              >
                Create
              </LoadingButton>
            )}
          </td>
        </tr>
        {otherProperties.map((otherProperty) => (
          <tr key={`otherProperty-${otherProperty.id}`}>
            <td style={{ border: 0 }} />
            <td style={{ border: 0 }}>➡</td>
            <td style={{ border: 0 }}>
              <strong>{otherProperty.key}</strong>
            </td>
            <td style={{ border: 0 }} />
            <td style={{ border: 0 }} />
            <td style={{ border: 0 }}>
              <LinkButton
                variant="outline-info"
                size="sm"
                href={`/model/${source.modelId}/property/${otherProperty.id}/edit`}
              >
                View
              </LinkButton>
            </td>
          </tr>
        ))}
      </>
    );
  }

  if (!primaryOptionKey) {
    return (
      <>
        <Head>
          <title>Grouparoo: {source.name}</title>
        </Head>

        <SourceTabs source={source} model={model} />

        <PageHeader
          icon={source.app.icon}
          title={`${source.name} - Properties`}
          badges={[
            <LockedBadge object={source} />,
            <StateBadge state={source.state} />,
          ]}
        />

        <Alert variant="warning">
          <p>This source does not support quickly adding Properties.</p>

          <PropertyAddButton
            errorHandler={errorHandler}
            successHandler={successHandler}
            source={source}
          />
        </Alert>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} model={model} />

      <PageHeader
        icon={source.app.icon}
        title={`${source.name} - Properties`}
        badges={[
          <LockedBadge object={source} />,
          <StateBadge state={source.state} />,
          <ModelBadge modelName={source.modelName} modelId={source.modelId} />,
        ]}
      />

      <h2>
        Quickly Add{" "}
        <code>
          {optionWithDefaultOptionDefaults
            .map((e) => e.defaultValue)
            .join(", ")}
        </code>{" "}
        Properties{" "}
      </h2>

      <p>
        From this page, you can quickly add simple Properties, using default
        options. If you need more control over your Properties, you can create a
        single Property from the{" "}
        <Link href={`/model/${source.modelId}/source/${source.id}/overview`}>
          <a>Source Overview page</a>
        </Link>
        .
      </p>

      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Source Options</th>
                <th>{""}</th>
                <th>Key</th>
                <th>Type</th>
                <th>Unique</th>
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { sourceId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);

  const { source } = await execApi<Actions.SourceView>(
    "get",
    `/source/${sourceId}`
  );
  ensureMatchingModel("Source", source.modelId, modelId.toString());

  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const { preview, columnSpeculation } = await execApi<Actions.SourcePreview>(
    "get",
    `/source/${sourceId}/preview`
  );
  const { defaultPropertyOptions } =
    await execApi<Actions.SourceDefaultPropertyOptions>(
      "get",
      `/source/${sourceId}/defaultPropertyOptions`
    );
  const { properties } = await execApi<Actions.PropertiesList>(
    "get",
    `/properties`,
    { modelId }
  );
  const { types } = await execApi<Actions.PropertiesOptions>(
    "get",
    `/propertyOptions`
  );

  console.log(preview)

  return {
    model,
    source,
    properties,
    columnSpeculation,
    preview,
    types,
    defaultPropertyOptions,
  };
};
