import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { ProductCards } from "@/components/Pages/Products";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { authGetAPI } from "@/lib/axios";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";

export default function Products() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    const connect = await authGetAPI("/user/product");
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setEvents(connect.body.events);
    return setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <Ad />
          <ProductCards events={events} />
        </>
      )}
    </Container>
  );
}
