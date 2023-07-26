import { Stack } from "react-bootstrap";
import { Button, Container, Icon } from "./styles";

interface MethodProps {
  selected: string;
  setSelected: any;
}

export function Method({ selected, setSelected }: MethodProps) {
  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <Button
          onClick={() => setSelected("Pix")}
          selected={selected === "Pix" ? true : false}
        >
          <Icon src="/Checkout/Pix.svg" width={20} height={20} alt="" />
          {""}PIX
        </Button>
        <Button
          onClick={() => setSelected("Card")}
          selected={selected === "Card" ? true : false}
        >
          <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
          {""}Cartão
        </Button>
      </Stack>
    </Container>
  );
}
