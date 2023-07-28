import { Background, Container } from "./styles";
import { Learn } from "@/components/Pages/MatchRegister/Learn";
import { Register } from "@/components/Pages/MatchRegister/Register";

export default function MatchRegister() {
  return (
    <Container>
      <Background
        src="/Match/MatchRegister/Background.svg"
        width={1000}
        height={2000}
        alt=""
      />

      <Register />
      <br />

      <Learn />
    </Container>
  );
}
