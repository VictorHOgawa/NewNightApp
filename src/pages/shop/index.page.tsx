import { Header } from "@/components/Global/Header";
import { Ad } from "@/components/Global/Ad";
import { Container } from "./styles";

export default function Shop() {
  return (
    <Container>
      <Header page="main" />
      <Ad />
    </Container>
  );
}
