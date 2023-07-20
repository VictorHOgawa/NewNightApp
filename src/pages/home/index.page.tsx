import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Ad } from "@/components/Global/Ad";
import { Sliders } from "@/components/Pages/Home/Sliders/Slider";

export default function Home() {
  return (
    <Container>
      <Header />
      <Ad />
      <br />
      <br />
      <Sliders />
    </Container>
  );
}
