import { Stack } from "react-bootstrap";
import {
  Container,
  Counter,
  CounterArea,
  TicketTitle,
  TicketType,
  Title,
} from "./styles";
import { StaticImg } from "@/components/Global/StaticImg/styles";
import { useState } from "react";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";

export function Tickets() {
  const TicketTypes = [1, 2, 3];
  const [quantity, setQuantity] = useState(0);

  const handleRemove = () => {
    {
      quantity === 0 ? <></> : setQuantity(quantity - 1);
    }
  };
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  return (
    <Container>
      <Title>LOTE PROMOCIONAL</Title>
      <Stack gap={2}>
        {TicketTypes.map((item) => (
          <TicketType>
            <StaticImg
              src="/Global/Icons/TicketIcon.svg"
              width={20}
              height={20}
              alt=""
            />
            <TicketTitle>Área VIP</TicketTitle>
            <CounterArea>
              <StaticImg
                src="/Global/Icons/Minus.svg"
                width={20}
                height={20}
                alt=""
                onClick={handleRemove}
              />
              <Counter>{quantity}</Counter>
              <StaticImg
                src="/Global/Icons/Plus.svg"
                width={20}
                height={20}
                alt=""
                onClick={handleAdd}
              />
            </CounterArea>
          </TicketType>
        ))}
      </Stack>
      <GlobalButton
        background={`${Theme.color.confirmation}`}
        content="Adquirir"
        color={`${Theme.color.background}`}
        width="60%"
        style={{ alignSelf: "center", marginTop: "5%" }}
      />
    </Container>
  );
}
