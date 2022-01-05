import { Badge, Form } from "react-bootstrap";

interface Props {
  controlId?: string;
  description?: string;
  label?: React.ReactNode;
  required?: boolean;
}

const FormInputContainer: React.FC<Props> = ({
  controlId,
  description,
  label,
  required,
  children,
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>
        {label}{" "}
        {required ? (
          <>
            <Badge variant="info">required</Badge>&nbsp;
          </>
        ) : null}
      </Form.Label>
      {children}
      {description && (
        <Form.Text className="text-muted">{description}</Form.Text>
      )}
    </Form.Group>
  );
};

export default FormInputContainer;
