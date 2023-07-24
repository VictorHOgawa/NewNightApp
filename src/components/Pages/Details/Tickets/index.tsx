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
import { useRouter } from "next/router";

export function Tickets() {
  const router = useRouter();

  const [quantity1, setQuantity1] = useState(0);
  const handleRemove1 = () => {
    {
      quantity1 === 0 ? <></> : setQuantity1(quantity1 - 1);
    }
  };
  const handleAdd1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const [quantity2, setQuantity2] = useState(0);
  const handleRemove2 = () => {
    {
      quantity2 === 0 ? <></> : setQuantity2(quantity2 - 1);
    }
  };
  const handleAdd2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const TicketTypes = [
    {
      name: "Área VIP1",
      remove: () => handleRemove1(),
      add: () => handleAdd1(),
      quantity: quantity1,
    },
    {
      name: "Área VIP2",
      remove: () => handleRemove2(),
      add: () => handleAdd2(),
      quantity: quantity2,
    },
  ];
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
            <TicketTitle>{item.name}</TicketTitle>
            <CounterArea>
              <StaticImg
                src="/Global/Icons/Minus.svg"
                width={20}
                height={20}
                alt=""
                onClick={item.remove}
              />
              <Counter>{item.quantity}</Counter>
              <StaticImg
                src="/Global/Icons/Plus.svg"
                width={20}
                height={20}
                alt=""
                onClick={item.add}
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
        onClick={() => router.push("/checkout")}
      />
    </Container>
  );
}
