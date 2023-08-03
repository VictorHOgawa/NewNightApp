import { Stack } from "react-bootstrap";
import { CheckoutTitle, Container } from "./styles";
import { Tabs } from "@/components/Global/Tabs";

export function Title() {
  return (
    <Container>
      <CheckoutTitle>CHECKOUT</CheckoutTitle>
      <Stack
        direction="horizontal"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Tabs active={true} />
        <Tabs active={true} />
        <Tabs active={true} />
      </Stack>
    </Container>
  );
}
