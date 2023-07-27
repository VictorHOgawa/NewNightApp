import { Ad } from "@/components/Global/Ad";
import { Container } from "./styles";
import { Header } from "@/components/Global/Header";
import { ProductCards } from "@/components/Pages/Products";

export default function Products() {
  return (
    <Container>
      <Header />
      <Ad />
      <ProductCards />
    </Container>
  );
}
