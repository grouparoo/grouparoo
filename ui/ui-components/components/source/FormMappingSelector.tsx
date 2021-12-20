import { useMemo, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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
  types: string[];
}

const FormMappingSelector: React.FC<Props> = ({
  columnName,
  propertyKey,
  disabled = false,
  preview,
  properties,
  propertyExamples,
  source,
  types,
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Models.PropertyType>(
    () =>
      propertyKey
        ? properties.find(({ key }) => key === propertyKey)
        : undefined
  );
  const [newProperty, setNewProperty] = useState({
    key: "",
    type: "",
  });

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

  const [selectedColumn, setSelectedColumn] = useState<string>(
    () => columnName || previewColumns?.[0]
  );

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

  const hasAvailableProperties = !!availableProperties.length;

  return (
    <Row>
      <Col xs={12} lg={6}>
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
        {hasAvailableProperties ? (
          <>
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
            {!!availableProperties.length && renderExamples(propertyExample)}
          </>
        ) : (
          <>
            <FormInputContainer
              controlId="key"
              label="Grouparoo Property Key"
              required
            >
              <Form.Control
                required
                type="text"
                placeholder="Property Key"
                defaultValue={newProperty.key}
                disabled={disabled}
                onChange={(e) => {
                  setNewProperty({
                    ...newProperty,
                    key: e.target.value,
                  });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Key is required
              </Form.Control.Feedback>
            </FormInputContainer>

            <FormInputContainer controlId="type" label="Property Type" required>
              <Form.Control
                as="select"
                required
                defaultValue={newProperty.type}
                disabled={disabled}
                onChange={(e) => {
                  setNewProperty({
                    ...newProperty,
                    //@ts-ignore
                    type: e.target.value,
                  });
                }}
              >
                <option value={""} disabled>
                  Select a type
                </option>
                {types?.map((type) => (
                  <option key={`type-${type}`}>{type}</option>
                ))}
              </Form.Control>
            </FormInputContainer>

            <p>
              This will create a Unique Property for{" "}
              <code>{source.modelName}</code> Records that will be mapped to the
              Source Column <code>{selectedColumn}</code>. This Record Property
              must be mapped to a unique Source Column, meaning only one record
              in the data will have this value. Usually, this is an ID or email.
            </p>
          </>
        )}
      </Col>
    </Row>
  );
};

export default FormMappingSelector;
