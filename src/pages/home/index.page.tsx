import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Ad } from "@/components/Global/Ad";
import { EventSlider } from "@/components/Pages/Home/Sliders/Events/Slider";
import { PlaceSlider } from "@/components/Pages/Home/Sliders/Places/Slider";

export default function Home() {
  return (
    <Container>
      <Header page="main" />
      <Ad />
      <br />
      <br />
      <EventSlider />
      <br />
      <br />
      <PlaceSlider />
    </Container>
  );
}
