import { Header } from "@/components/Global/Header";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
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
  const [loading, setLoading] = useState(true);
  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setLogged(true);
    }
    return setLoading(false);
  }

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
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
        </>
      )}
    </Container>
  );
}
