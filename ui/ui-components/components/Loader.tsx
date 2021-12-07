import { Spinner, SpinnerProps } from "react-bootstrap";

interface Props extends React.HTMLAttributes<HTMLElement> {
  size?: SpinnerProps["size"];
}

const Loader: React.FC<Props> = ({ size, ...props }) => (
  <Spinner {...props} animation="border" role="status" size={size} />
);

export default Loader;
