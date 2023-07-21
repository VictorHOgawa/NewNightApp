import { GlobalTitle } from "@/components/Global/Title";
import { Button, ButtonImg, Container } from "./styles";
import { Stack } from "react-bootstrap";

export function Purchased() {
  return (
    <Container>
      <GlobalTitle title="Suas Compras Digitais" />
      <br />
      <Stack direction="horizontal" gap={5} style={{ marginLeft: "5%" }}>
        <Button>
          <ButtonImg
            src="/Purchased/Tickets.svg"
            width={200}
            height={200}
            alt=""
          />
        </Button>
        <Button>
          <ButtonImg
            src="/Purchased/Products.svg"
            width={200}
            height={200}
            alt=""
          />
        </Button>
      </Stack>
    </Container>
  );
}
