import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingFull } from "@/components/Global/Loading/Full";
import Image from "next/image";
import { Container } from "./styles";

export default function Shop() {
  return (
    <Container>
      <LoadingFull />
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
