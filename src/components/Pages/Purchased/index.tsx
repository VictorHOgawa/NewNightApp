import { Row, Stack } from "react-bootstrap";
import { Btn, Container, Img } from "./styles";

export function Items() {
  const List = [
    {
      location: "/Purchased/Tickets.svg",
    },
    {
      location: "/Purchased/Products.svg",
    },
    {
      location: "/Purchased/Suggestions.svg",
    },
    {
      location: "/Purchased/VIP.svg",
    },
  ];
  return (
    <Container>
      <Row>
        {List.map((item) => (
          <Btn>
            <Img src={item.location} width={200} height={200} alt="" />
          </Btn>
        ))}
      </Row>
    </Container>
  );
}
