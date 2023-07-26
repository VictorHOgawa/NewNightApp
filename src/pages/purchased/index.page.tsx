import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Ad } from "@/components/Global/Ad";
import { Items } from "@/components/Pages/Purchased";

export default function Purchased() {
  return (
    <Container>
      <Header page="main" />
      <Ad />
      <Items />
    </Container>
  );
}
