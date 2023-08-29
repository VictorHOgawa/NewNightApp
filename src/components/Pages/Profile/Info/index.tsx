import { GlobalButton } from "@/components/Global/Button";
import { GlobalTitle } from "@/components/Global/Title";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Container, NightPremium } from "./styles";

export function Info() {
  const router = useRouter();
  const [width, setWidth] = useState(100);

  async function logOut() {
    localStorage.removeItem("nightToken");
    localStorage.removeItem("nightRefreshToken");
    router.push("/");
  }

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <Container>
      <GlobalTitle title="Informações" />
      <br />
      <Stack
        gap={2}
        style={{
          width: width < 768 ? "100%" : "60%",
          marginLeft: width < 768 ? 0 : "20%",
        }}
      >
        <NightPremium src="/premium.svg" width={1000} height={400} alt="" />
        <GlobalButton
          background={`${Theme.color.primary_40}`}
          color={`${Theme.color.gray_10}`}
          width="100%"
          height="auto"
          content="Dados de Cadastro"
        />
        <GlobalButton
          background={`${Theme.color.primary_40}`}
          color={`${Theme.color.gray_10}`}
          width="100%"
          height="auto"
          content="Tutorial, Políticas, Termos e FAQ"
        />
        <GlobalButton
          background={`${Theme.color.primary_40}`}
          color={`${Theme.color.gray_10}`}
          width="100%"
          height="auto"
          content="Jobs na Night"
          onClick={() => router.push("/jobs")}
        />
        <GlobalButton
          background={`${Theme.color.primary_40}`}
          color={`${Theme.color.gray_10}`}
          width="100%"
          height="auto"
          content="Sair"
          onClick={logOut}
        />
      </Stack>
    </Container>
  );
}
