import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoginValidation } from "@/components/Global/Login";
import { Items } from "@/components/Pages/Purchased";
import { loginVerifyAPI } from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Purchased() {
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
      <Header page="secondary" selected="purchased" />
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
          <Ad />
          <Items />
        </>
      ) : (
        <LoginValidation />
      )}
    </Container>
  );
}
