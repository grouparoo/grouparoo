import { Spinner, SpinnerProps } from "react-bootstrap";

interface Props extends React.HTMLAttributes<HTMLElement> {
  size?: SpinnerProps["size"];
}

const Loader: React.FC<Props> = (props) => (
  <Spinner {...props} animation="border" role="status" />
);

export default Loader;
