import { LoginContainer } from "@/components/Pages/Login";
import { Container } from "./styles";
import { Header } from "@/components/Global/Header";

export default function Login() {
  return (
    <Container>
      <Header />
      <LoginContainer />
    </Container>
  );
}
