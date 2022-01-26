import { useEffect, useMemo, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormInputContainer from "../lib/form/FormInputContainer";
import { Models } from "../../utils/apiData";

const renderExamples = (exampleText?: string) => (
  <p>
    <strong>Example Data:</strong> {exampleText}
  </p>
);

interface Props {
  disabled?: boolean;
  columnName?: string;
  propertyKey?: string;
  preview: Record<string, unknown>[];
  properties: Models.PropertyType[];
  propertyExamples: Record<string, string[]>;
  source: Models.SourceType;
  register: ReturnType<typeof useForm>["register"];
  mappingDisabled?: boolean;
}

const FormMappingSelector: React.FC<Props> = ({
  columnName,
  propertyKey,
  disabled = false,
  preview,
  properties,
  propertyExamples,
  register,
  source,
  mappingDisabled,
}) => {
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

  const [selectedColumn, setSelectedColumn] = useState<string>(
    () => columnName || previewColumns?.[0] || ""
  );

  useEffect(() => {
    // The preview changes if one of the source options has changed
    // So we reset the selected column
    if (!previewColumns.length) return;
    setSelectedColumn(
      (selectedColumn) => previewColumns.find((c) => c === selectedColumn) || ""
    );
  }, [previewColumns]);

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
    // Include unique properties in own source if it has the primary key or the primary key has not been defined
    // Otherwise, it's not the primary source and show all properties from other sources
    return properties.filter((property) =>
      isPrimaryKeyInSource || !hasPrimaryKeyProperty
        ? property.sourceId === source.id && property.unique
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
      <Col md={!mappingDisabled && hasAvailableProperties ? 6 : 12} xl={12}>
        <FormInputContainer
          controlId="mapping_source_column"
          label="Source Column"
          required
        >
          <Form.Control
            as="select"
            required
            disabled={disabled || !previewColumns.length}
            value={selectedColumn}
            onChange={(e) => {
              setSelectedColumn(e.target.value);
            }}
            name="mapping.sourceColumn"
            ref={register}
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
        {columnExample && renderExamples(columnExample)}
      </Col>
      {!mappingDisabled && hasAvailableProperties && (
        <Col>
          <>
            <FormInputContainer
              controlId="mapping_property"
              label="Mapped to Grouparoo Property"
              required
            >
              <Form.Control
                as="select"
                required
                disabled={disabled}
                value={selectedProperty?.key}
                onChange={(e) => {
                  setSelectedProperty(
                    availableProperties.find(
                      ({ key }) => key === e.target.value
                    )
                  );
                }}
                name="mapping.propertyKey"
                ref={register}
              >
                <option value={""} disabled>
                  Select an option
                </option>
                {availableProperties.map((property) => (
                  <option
                    key={`mapping-property-${property.key}`}
                    value={property.key}
                  >
                    {property.key} {property.unique && "(unique)"}
                  </option>
                ))}
              </Form.Control>
            </FormInputContainer>
            {!!availableProperties.length && renderExamples(propertyExample)}
          </>
        </Col>
      )}
    </Row>
  );
};

export default FormMappingSelector;
