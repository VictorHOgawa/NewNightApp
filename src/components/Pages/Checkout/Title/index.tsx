import { Stack } from "react-bootstrap";
import { CheckoutTitle, Container } from "./styles";
import { Tabs } from "@/components/Global/Tabs";

export function Title() {
  return (
    <Container>
      <CheckoutTitle>CHECKOUT</CheckoutTitle>
      <Stack direction="horizontal" gap={3} style={{ marginLeft: "4%" }}>
        <Tabs active={true} />
        <Tabs active={false} />
        <Tabs active={false} />
      </Stack>
    </Container>
  );
}
