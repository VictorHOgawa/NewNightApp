import { Header } from "@/components/Global/Header";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { RegisterContainer } from "@/components/Pages/Register";
import { Container } from "./styles";

export default function Register() {
  return (
    <Container>
      <LoadingFull />
      <Header />
      <RegisterContainer />
    </Container>
  );
}
