import { RegisterContainer } from "@/components/Pages/Register";
import { Container } from "./styles";
import { Header } from "@/components/Global/Header";

export default function Register() {
  return (
    <Container>
      <Header />
      <RegisterContainer />
    </Container>
  );
}
