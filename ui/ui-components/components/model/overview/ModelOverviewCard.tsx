import { Card } from "react-bootstrap";

interface Props {
  title: string;
}

const ModelOverviewCard: React.FC<Props> = ({ title, children }) => {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      {children}
    </Card>
  );
};

export default ModelOverviewCard;
