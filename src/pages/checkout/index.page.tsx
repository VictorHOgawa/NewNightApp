import { Header } from "@/components/Global/Header";
import { IndividualMethod } from "@/components/Pages/Checkout/IndividualMethod";
import { Method } from "@/components/Pages/Checkout/Method";
import { Safe } from "@/components/Pages/Checkout/Safe";
import { Title } from "@/components/Pages/Checkout/Title";
import { Total } from "@/components/Pages/Checkout/Total";
import { useCart } from "@/context/cart";
import { useState } from "react";
import { Container } from "./styles";

export default function Checkout() {
  const [selected, setSelected] = useState("Pix");
  const { cart, add } = useCart();

  return (
    <Container>
      <Header />
      <br />
      <Title />
      <br />
      <Method selected={selected} setSelected={setSelected} />
      <IndividualMethod selected={selected} />
      <br />
      <Total />
      <Safe />
    </Container>
  );
}
