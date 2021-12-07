import { Button, ButtonProps } from "react-bootstrap";
import { GrouparooUIEdition, grouparooUiEdition } from "../utils/uiEdition";
import Loader from "./Loader";

const uiEdition = grouparooUiEdition();

interface Props extends ButtonProps {
  loading?: boolean;
  displayOn?: GrouparooUIEdition[];
  hideOn?: GrouparooUIEdition[];
}

const LoadingButton: React.FC<Props> = ({
  children = "Submit",
  disabled,
  displayOn,
  hideOn,
  loading,
  ...buttonProps
}) => {
  if (
    (displayOn && !displayOn.includes(uiEdition)) ||
    (hideOn && hideOn.includes(uiEdition))
  ) {
    return null;
  }

  return (
    <Button
      {...buttonProps}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...buttonProps.style,
      }}
      disabled={disabled || loading}
    >
      {loading && (
        <Loader
          size="sm"
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
          }}
        />
      )}
      <span style={{ opacity: loading ? 0 : 1 }}>{children}</span>
    </Button>
  );
};

export default LoadingButton;
