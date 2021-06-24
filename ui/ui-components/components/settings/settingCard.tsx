import { Models } from "../../utils/apiData";
import { Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import LockedBadge from "../badges/lockedBadge";
import LoadingButton from "../loadingButton";
import { formatTimestamp } from "../../utils/formatTimestamp";

export default function SettingCard({
  setting,
  updateSetting,
  loading,
}: {
  setting: Models.SettingType;
  updateSetting: Function;
  loading: boolean;
}) {
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
    setting.value = data.value;
    updateSetting(setting);
  }

  return (
    <>
      <Card border={setting.variant}>
        <Card.Body>
          <Card.Title>{setting.title}</Card.Title>
          {setting.type !== "boolean" ? (
            <Card.Subtitle className="mb-2 text-muted">
              {setting.description}
            </Card.Subtitle>
          ) : null}
          <LockedBadge object={setting} />

          <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <fieldset disabled={setting.locked !== null}>
              <Form.Group>
                {setting.type === "string" ? (
                  <Form.Control
                    style={{ width: "100%" }}
                    required
                    type="text"
                    name="value"
                    disabled={loading}
                    ref={register}
                    defaultValue={setting.value}
                  />
                ) : null}
                {setting.type === "number" ? (
                  <Form.Control
                    style={{ width: "100%" }}
                    required
                    type="number"
                    name="value"
                    disabled={loading}
                    ref={register}
                    defaultValue={setting.value}
                  />
                ) : null}
                {setting.type === "boolean" ? (
                  <Form.Check
                    type="checkbox"
                    name="value"
                    disabled={loading}
                    label={setting.description}
                    ref={register}
                    defaultChecked={setting.value === "true"}
                  />
                ) : null}
              </Form.Group>

              <LoadingButton
                style={{ marginTop: 5 }}
                disabled={loading}
                size="sm"
                type="submit"
                variant="outline-secondary"
              >
                Update
              </LoadingButton>
            </fieldset>
          </Form>

          <br />

          <Card.Text>
            <small>Default: {setting.defaultValue}</small>
            <br />
            <small>Last Updated: {formatTimestamp(setting.updatedAt)}</small>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
