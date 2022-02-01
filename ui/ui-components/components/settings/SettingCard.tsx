import { Models } from "../../utils/apiData";
import { Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import LockedBadge from "../badges/LockedBadge";
import LoadingButton from "../LoadingButton";
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
            <fieldset disabled={Boolean(setting.locked)}>
              <Form.Group>
                {setting.type === "string" ? (
                  <Form.Control
                    style={{ width: "100%" }}
                    required
                    type="text"
                    name="value"
                    disabled={loading}
                    {...register("value")}
                    defaultValue={setting.value}
                  />
                ) : null}
                {setting.type === "number" ? (
                  <Form.Control
                    style={{ width: "100%" }}
                    required
                    type="number"
                    min="0"
                    name="value"
                    disabled={loading}
                    {...register("value")}
                    defaultValue={setting.value}
                  />
                ) : null}
                {setting.type === "boolean" ? (
                  <Form.Check
                    type="checkbox"
                    name="value"
                    disabled={loading}
                    label={setting.description}
                    {...register("value")}
                    defaultChecked={setting.value === "true"}
                  />
                ) : null}
              </Form.Group>

              <LoadingButton
                style={{ marginTop: 5 }}
                loading={loading}
                size="sm"
                type="submit"
                variant="outline-primary"
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
