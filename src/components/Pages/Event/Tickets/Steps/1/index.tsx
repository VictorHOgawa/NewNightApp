import { StaticImage } from "@/components/Global/StaticImg";
import { StaticImg } from "@/components/Global/StaticImg/styles";
import { GlobalTitle } from "@/components/Global/Title";
import { useCart } from "@/context/cart";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Counter, CounterArea, TicketTitle, TicketType } from "../../styles";

interface StepOneProps {
  id: string;
  ticket: {
    ticket: any;
    id: string;
    name: string;
    value: number;
  }[];
}

export function StepOne({ id, ticket }: StepOneProps) {
  const [width, setWidth] = useState(100);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
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
      {ticket.map((item) => (
        <Stack gap={2}>
          <GlobalTitle
            title={item.name}
            style={{
              marginTop: "15%",
              marginLeft: width < 768 ? "2.5%" : "5%",
            }}
          />
          {ticket.length === 0 ? (
            <></>
          ) : (
            <>
              {item.ticket.map((item: { name: any; value: any; id: any }) => (
                <TicketType>
                  <StaticImage
                    src="/Checkout/ticket.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <TicketTitle>
                    <strong style={{ fontSize: 18 }}>{item.name}</strong>
                    <br />{" "}
                    {item.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TicketTitle>
                  <CounterArea>
                    <StaticImg
                      src="/Global/Icons/Minus.svg"
                      width={30}
                      height={30}
                      alt=""
                      onClick={() => handleChange("decrease", item)}
                    />
                    <Counter>{ticketQuantity(item.id)}</Counter>
                    <StaticImg
                      src="/Global/Icons/Plus.svg"
                      width={30}
                      height={30}
                      alt=""
                      onClick={() => handleChange("increase", item)}
                    />
                  </CounterArea>
                </TicketType>
              ))}
            </>
          )}
        </Stack>
      ))}
    </>
  );
}
