import { GlobalTitle } from "@/components/Global/Title";
import { CardContainer, CardDetails, NightAppCard } from "../styles";
import { Button, Container, Item, ItemText, Menu, Toggle } from "./styles";
import Theme from "@/styles/themes";

interface InstallmentsProps {
  formData: any;
}
export function Installments({ formData }: InstallmentsProps) {
  return (
    <Container>
      <CardContainer>
        <NightAppCard
          src="/Checkout/blankCard.svg"
          width={1000}
          height={500}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "30%",
            marginTop: "15%",
          }}
        >
          <CardDetails>
            {formData.cardName === "" ? "Nome no Cartão " : formData.cardName}
          </CardDetails>
          <CardDetails>
            {formData.cardNumber === ""
              ? "Número do Cartão"
              : formData.cardNumber}
          </CardDetails>
        </div>
      </CardContainer>
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
