import { Header } from "@/components/Global/Header";
import { Ad } from "@/components/Global/Ad";
import { Container } from "./styles";
import Image from "next/image";

export default function Shop() {
  return (
    <Container>
      <Header page="secondary" selected="shop" />
      <Image
        src="/Global/FullLogo.svg"
        width={125}
        height={125}
        alt=""
        style={{ alignSelf: "center" }}
      />{" "}
      <Ad />
    </Container>
  );
}
