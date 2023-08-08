import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Purchased } from "@/components/Pages/Profile/Purchased";
import { Info } from "@/components/Pages/Profile/Info";
import { Support } from "@/components/Global/Support";
import { Stack } from "react-bootstrap";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Profile() {
  const [width, setWidth] = useState(100);
  const router = useRouter();

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
      <Header page="main" />
      <br />
      {width < 768 ? (
        <>
          <Stack
            direction="horizontal"
            gap={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10%",
              marginTop: "-5%",
            }}
          >
            <GlobalButton
              content="Entrar"
              background={`${Theme.color.primary_80}`}
              color={`${Theme.color.gray_10}`}
              width="45%"
              height="auto"
              fontSize={18}
              onClick={() => router.push("/login")}
            />
            <GlobalButton
              content="Se Cadastrar"
              background={`${Theme.color.primary_80}`}
              color={`${Theme.color.gray_10}`}
              width="45%"
              height="auto"
              fontSize={18}
            />
          </Stack>
        </>
      ) : (
        <></>
      )}
      <br />
      <Purchased />
      <br />
      <br />
      <Info />
      <br />
      <Support />
    </Container>
  );
}
