import { Back } from "@/components/Global/Back";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { LoginContainer } from "@/components/Pages/Login";
import Image from "next/image";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <LoadingFull />
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
