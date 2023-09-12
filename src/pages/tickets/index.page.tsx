import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { TicketCards } from "@/components/Pages/Ticket";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { authGetAPI } from "@/lib/axios";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";

export default function Tickets() {
  const [tickets, setTickets] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  async function getTickets() {
    setLoading(true);
    const connect = await authGetAPI("/user/ticket");
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setTickets(connect.body.tickets);
    return setLoading(false);
  }

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <Container>
      <Header />
      <Ad />
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <TicketCards tickets={tickets} reload={getTickets} />
        </>
      )}
    </Container>
  );
}
