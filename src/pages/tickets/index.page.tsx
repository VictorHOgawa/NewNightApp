import { Ad } from "@/components/Global/Ad";
import { Container } from "./styles";
import { Header } from "@/components/Global/Header";
import { TicketCards } from "@/components/Pages/Ticket";

export default function Tickets() {
  return (
    <Container>
      <Header />
      <Ad />
      <TicketCards />
    </Container>
  );
}
