import { Card } from "react-bootstrap";

export default function FourOFourPage() {
  return (
    <>
      <Card border={"warning"}>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>This page cannot be found :(</p>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
