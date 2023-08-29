import { Header } from "@/components/Global/Header";
import { LoginValidation } from "@/components/Global/Login";
import { Chat } from "@/components/Pages/MyMatches/Chat";
import { Crew } from "@/components/Pages/MyMatches/Crew";
import { Matched } from "@/components/Pages/MyMatches/Matched";
import { loginVerifyAPI } from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, MainContainer } from "./styles";

export default function MyMatches() {
  const [logged, setLogged] = useState(false);
  async function handleVerify() {
    const verify = await loginVerifyAPI();
    console.log("verify: ", verify);
    if (verify === 200) {
      setLogged(true);
      console.log("entrou");
    }
  }

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <Container>
      <Header page="secondary" selected="match" />
      <Image
        src="/Global/FullLogo.svg"
        width={125}
        height={125}
        alt=""
        style={{ alignSelf: "center" }}
      />
      <br />
      {logged ? (
        <>
          <MainContainer>
            <br />
            <br />
            <Matched />
            <br />
            <Crew />
            <br />
            <Chat />
          </MainContainer>
        </>
      ) : (
        <LoginValidation />
      )}
    </Container>
  );
}
