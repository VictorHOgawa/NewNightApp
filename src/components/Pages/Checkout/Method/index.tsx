import { Stack } from "react-bootstrap";
import { Button, Container, Icon, Promoter } from "./styles";
import { useState } from "react";

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
        </Button>
        <Promoter
          src={
            selected === "Promoter"
              ? "/Checkout/PromoterSelected.svg"
              : "/Checkout/Promoter.svg"
          }
          width={200}
          height={200}
          alt=""
          onClick={() => setSelected("Promoter")}
        />
      </Stack>
    </Container>
  );
}
