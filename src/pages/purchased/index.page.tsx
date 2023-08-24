import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Ad } from "@/components/Global/Ad";
import { Items } from "@/components/Pages/Purchased";
import Image from "next/image";

export default function Purchased() {
  return (
    <Container>
      <Header page="secondary" selected="purchased" />
      <Image
        src="/Global/FullLogo.svg"
        width={125}
        height={125}
        alt=""
        style={{ alignSelf: "center" }}
      />{" "}
      <Ad />
      <Items />
    </Container>
  );
}
