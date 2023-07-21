import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Back } from "@/components/Global/Back";
import { Support } from "@/components/Global/Support";
import { Title } from "@/components/Pages/Checkout/Title";
import { Method } from "@/components/Pages/Checkout/Method";
import { Video } from "@/components/Pages/Checkout/Video";
import { StaticImage } from "@/components/Global/StaticImg";
import { Safe } from "@/components/Pages/Checkout/Safe";
import { useState } from "react";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { IndividualMethod } from "@/components/Pages/Checkout/IndividualMethod";

export default function Checkout() {
  const [selected, setSelected] = useState("Pix");

  return (
    <Container>
      <Header />
      <Back />
      <br />
      <Title />
      <br />
      <Method selected={selected} setSelected={setSelected} />
      <IndividualMethod selected={selected} />
      <Safe />
    </Container>
  );
}
