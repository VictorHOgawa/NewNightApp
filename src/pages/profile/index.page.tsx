import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Back } from "@/components/Global/Back";
import { Purchased } from "@/components/Pages/Profile/Purchased";
import { Info } from "@/components/Pages/Profile/Info";
import { Support } from "@/components/Global/Support";

export default function Profile() {
  return (
    <Container>
      <Header />
      <Back />
      <br />
      <br />
      <Purchased />
      <br />
      <br />
      <Info />
      <br />
      <Support />
    </Container>
  );
}
