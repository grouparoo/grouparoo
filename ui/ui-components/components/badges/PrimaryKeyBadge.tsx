import { Badge } from "react-bootstrap";

interface Props {
  isSource?: boolean;
}

const PrimaryKeyBadge: React.FC<Props> = ({ isSource }) => (
  <Badge variant="info">primary{isSource ? " source" : ""}</Badge>
);

export default PrimaryKeyBadge;
