import { Stack } from "react-bootstrap";
import {
  Counter,
  CounterArea,
  TicketTitle,
  TicketType,
  Title,
} from "../../styles";
import { StaticImg } from "@/components/Global/StaticImg/styles";
import { StaticImage } from "@/components/Global/StaticImg";
import { useCart } from "@/context/cart";

interface StepThreeProps {
  id: string;
  name: string;
  ticket: {
    id: string;
    name: string;
    value: number;
  }[];
}
export function StepThree({ id, name, ticket }: StepThreeProps) {
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
    <>
      <Title>{name}</Title>
      <Stack gap={2}>
        {ticket.map((item) => (
          <TicketType>
            <StaticImage
              src="/Global/Icons/TicketIcon.svg"
              width={20}
              height={20}
              alt=""
            />
            <TicketTitle>
              <strong>{item.name}</strong>
              <br />{" "}
              {item.value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </TicketTitle>
            <CounterArea>
              <StaticImg
                src="/Global/Icons/Minus.svg"
                width={20}
                height={20}
                alt=""
                onClick={() => handleChange("decrease", item)}
              />
              <Counter>{ticketQuantity(item.id)}</Counter>
              <StaticImg
                src="/Global/Icons/Plus.svg"
                width={20}
                height={20}
                alt=""
                onClick={() => handleChange("increase", item)}
              />
            </CounterArea>
          </TicketType>
        ))}
      </Stack>
    </>
  );
}
