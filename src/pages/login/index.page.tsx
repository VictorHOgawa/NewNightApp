import { LoginContainer } from "@/components/Pages/Login";
import { Container } from "./styles";
import { Header } from "@/components/Global/Header";
import { Back } from "@/components/Global/Back";
import Image from "next/image";

export default function Login() {
  return (
    <Container>
      <Back />
      <Image
        src="/Global/FullLogo.svg"
        width={150}
        height={150}
        alt=""
        style={{ alignSelf: "center", marginTop: "25%" }}
      />
      <LoginContainer />
    </Container>
  );
}
