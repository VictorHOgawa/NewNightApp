import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { TicketCards } from "@/components/Pages/Ticket";
import { Container } from "./styles";

export default function Tickets() {
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Ad />
      <TicketCards />
    </Container>
  );
}
