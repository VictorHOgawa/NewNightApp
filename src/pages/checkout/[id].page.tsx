import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Title } from "@/components/Pages/Checkout/Title";
import { Method } from "@/components/Pages/Checkout/Method";
import { Safe } from "@/components/Pages/Checkout/Safe";
import { useState } from "react";
import { IndividualMethod } from "@/components/Pages/Checkout/IndividualMethod";
import { Total } from "@/components/Pages/Checkout/Total";
import { useCart } from "@/context/cart";

export default function Checkout() {
  const [selected, setSelected] = useState("Pix");
  const { cart, add } = useCart();
  console.log(cart);

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
