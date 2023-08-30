import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { ProductCards } from "@/components/Pages/Products";
import { Container } from "./styles";

export default function Products() {
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Ad />
      <ProductCards />
    </Container>
  );
}
