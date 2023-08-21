import { useRouter } from "next/router";
import { Row } from "react-bootstrap";
import { Btn, Container, Img } from "./styles";

export function Items() {
  const router = useRouter();
  const List = [
    {
      location: "/Purchased/Tickets.svg",
      onClick: () => router.push("/tickets"),
    },
    {
      location: "/Purchased/Products.svg",
      onClick: () => router.push("/products"),
    },
    {
      location: "/Purchased/Suggestions.svg",
      onClick: () => router.push("/suggestions"),
    },
    {
      location: "/Purchased/VIP.svg",
      onClick: () => router.push("/vip"),
    },
  ];
  return (
    <Container>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {List.map((item) => (
          <Btn>
            <Img
              src={item.location}
              width={200}
              height={200}
              alt=""
              onClick={item.onClick}
            />
          </Btn>
        ))}
      </Row>
    </Container>
  );
}
