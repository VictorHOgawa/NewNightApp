import { GlobalTitle } from "@/components/Global/Title";
import { NightAppCard } from "../styles";
import { Button, Container, Item, ItemText, Menu, Toggle } from "./styles";
import Theme from "@/styles/themes";

export function Installments() {
  return (
    <Container>
      <NightAppCard
        src="/Checkout/NightAppCard.svg"
        width={1000}
        height={500}
        alt=""
      />
      <br />
      <GlobalTitle title="Parcelas" fontSize={15} />
      <br />
      <Button>
        <Toggle
          style={{
            color: `${Theme.color.gray_10}`,
            background: `${Theme.color.primary_60}`,
            border: 0,
            width: "100%",
          }}
        >
          Número de Parcelas
        </Toggle>
        <Menu style={{ width: "100%" }}>
          <ItemText>test</ItemText>
          <Item>Test</Item>
        </Menu>
      </Button>
    </Container>
  );
}
