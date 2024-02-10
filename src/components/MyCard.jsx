import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function MyCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.texto}</Card.Text>
        <Tags text={props.text} color={props.color} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;
