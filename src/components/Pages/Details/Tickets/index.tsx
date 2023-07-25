import { Modal, Stack } from "react-bootstrap";
import {
  Check,
  Clickable,
  Container,
  Counter,
  CounterArea,
  Input,
  Item,
  Items,
  TicketTitle,
  TicketType,
  Title,
} from "./styles";
import { StaticImg } from "@/components/Global/StaticImg/styles";
import { useState } from "react";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { Tabs } from "@/components/Global/Tabs";
import { useCart } from "@/context/cart";
import { StepOne } from "./Steps/1";
import { StepTwo } from "./Steps/2";
import { StepThree } from "./Steps/3";

interface TicketProps {
  id: string;
  name: string;
  ticket: {
    id: string;
    name: string;
    value: number;
  }[];
  step: number;
}
export function Tickets({ id, name, ticket, step }: TicketProps) {
  const router = useRouter();
  const { cart, add } = useCart();

  const handleChange = (
    type: string,
    ticket: { name: string; value: number; id: string }
  ) => {
    const exists = cart.ticket.ticket.find(
      (item: { id: string }) => item.id === ticket.id
    );
    const tickets = cart.ticket.ticket.filter(
      (item: { id: string }) => item.id !== ticket.id
    );
    if (type === "increase") {
      const quantity = exists ? exists.quantity + 1 : 1;

      return add(
        { slotId: id, ticket: [...tickets, { ...ticket, quantity }] },
        "ticket"
      );
    }
    if (type === "decrease" && exists && exists.quantity > 1) {
      const quantity = exists.quantity - 1;
      return add(
        { slotId: id, ticket: [...tickets, { ...ticket, quantity }] },
        "ticket"
      );
    } else {
      return add({ slotId: id, ticket: tickets }, "ticket");
    }
  };

  function ticketQuantity(id: string) {
    const ticketExists = cart.ticket.ticket.find(
      (ticket: { id: string }) => ticket.id === id
    );
    return ticketExists ? ticketExists.quantity : 0;
  }

  return (
    <Container>
      {step === 1 ? (
        <StepOne id={id} name={name} ticket={ticket} />
      ) : step === 2 ? (
        <StepTwo />
      ) : (
        <StepThree id={id} name={name} ticket={ticket} />
      )}
    </Container>
  );
}
