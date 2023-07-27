import { Header } from "@/components/Global/Header";
import { Ad } from "@/components/Global/Ad";
import { Background, Container } from "./styles";
import { Learn } from "@/components/Pages/Match/Learn";
import { Register } from "@/components/Pages/Match/Register";

export default function Match() {
  return (
    <Container>
      <Background
        src="/Match/Background.svg"
        width={1000}
        height={2000}
        alt=""
      />

      <Register />
      <Learn />
    </Container>
  );
}
