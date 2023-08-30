import { LoadingFull } from "@/components/Global/Loading/Full";
import { Learn } from "@/components/Pages/MatchRegister/Learn";
import { Register } from "@/components/Pages/MatchRegister/Register";
import { Background, Container } from "./styles";

export default function MatchRegister() {
  return (
    <Container>
      <LoadingFull />
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
