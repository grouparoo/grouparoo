import { useMemo, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormInputContainer from "../lib/form/FormInputContainer";
import { Models } from "../../utils/apiData";

const renderExamples = (exampleText?: string) => (
  <div style={{ visibility: exampleText ? "visible" : "hidden" }}>
    <strong>Example Data:</strong> {exampleText}
  </div>
);

interface Props {
  disabled?: boolean;
  columnName?: string;
  propertyKey?: string;
  preview: Record<string, unknown>[];
  properties: Models.PropertyType[];
  propertyExamples: Record<string, string[]>;
  source: Models.SourceType;
}

const FormMappingSelector: React.FC<Props> = ({
  columnName,
  propertyKey,
  disabled = false,
  preview,
  properties,
  propertyExamples,
  source,
}) => {
  const [selectedColumn, setSelectedColumn] = useState<string>(columnName);
  const [selectedProperty, setSelectedProperty] = useState<Models.PropertyType>(
    () =>
      propertyKey
        ? properties.find(({ key }) => key === propertyKey)
        : undefined
  );

  const previewColumns = useMemo<string[]>(() => {
    return preview
      .map((row) => Object.keys(row))
      .reduce((acc, keys) => {
        keys.forEach((key) => {
          if (!acc.includes(key)) acc.push(key);
        });

        return acc;
      }, [] as string[])
      .sort();
  }, [preview]);

  const columnExample = useMemo<string>(
    () =>
      selectedColumn
        ? preview
            .map((p) => p[selectedColumn])
            .slice(0, 3)
            .join(", ")
        : undefined,
    [preview, selectedColumn]
  );

  const hasPrimaryKeyProperty = useMemo(
    () => properties.filter(({ isPrimaryKey }) => isPrimaryKey).length > 0,
    [properties]
  );

  const availableProperties = useMemo<Models.PropertyType[]>(() => {
    const isPrimaryKeyInSource =
      source &&
      properties.filter(
        (property) => property.isPrimaryKey && property.sourceId === source.id
      ).length > 0;

    // Properties rules:
    // Include properties in own source if it has the primary key or the primary key has not been defined
    // Otherwise, show properties from other sources
    return properties.filter((property) =>
      isPrimaryKeyInSource || !hasPrimaryKeyProperty
        ? property.sourceId === source.id
        : property.sourceId !== source.id
    );
  }, [source, properties, hasPrimaryKeyProperty]);

  const propertyExample = useMemo<string>(
    () =>
      selectedProperty
        ? propertyExamples[selectedProperty.id].slice(0, 3).join(", ")
        : undefined,
    [properties, selectedProperty]
  );

  return (
    <Row>
      <Col lg={6} xs={12}>
        <FormInputContainer
          controlId="mapping_primary_key"
          label="Source Column"
          required
        >
          <Form.Control
            as="select"
            required
            disabled={disabled}
            value={selectedColumn}
            onChange={(e) => {
              setSelectedColumn(e.target.value);
            }}
          >
            <option value={""} disabled>
              Select an option
            </option>
            {previewColumns.map((col) => (
              <option key={`mapping-col-${col}`} value={col}>
                {col}
              </option>
            ))}
          </Form.Control>
        </FormInputContainer>
        {renderExamples(columnExample)}
      </Col>
      <Col>
        <FormInputContainer
          controlId="mapping_property"
          label="Grouparoo Property"
          required
        >
          <Form.Control
            as="select"
            required
            disabled={disabled}
            value={selectedProperty?.id}
            onChange={(e) => {
              setSelectedProperty(
                availableProperties.find(({ id }) => id === e.target.value)
              );
            }}
          >
            <option value={""} disabled>
              Select an option
            </option>
            {availableProperties.map((property) => (
              <option
                key={`mapping-property-${property.key}`}
                value={property.id}
              >
                {property.key} {property.unique && "(unique)"}
              </option>
            ))}
          </Form.Control>
        </FormInputContainer>
        {renderExamples(propertyExample)}
      </Col>
    </Row>
  );
};

export default FormMappingSelector;
