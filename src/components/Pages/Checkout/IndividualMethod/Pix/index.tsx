import { GlobalButton } from "@/components/Global/Button";
import { Container, Pix } from "./styles";
import { useState, useEffect } from "react";
import Theme from "@/styles/themes";
import { Video } from "../../Video";
import { useRouter } from "next/router";

export function PixMethod() {
  const router = useRouter();
  const [QrCode, setQrCode] = useState(false);
  const handleClick = () => {
    setQrCode(true);
  };

  const [width, setWidth] = useState(100);

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
      <>
        <GlobalButton
          background={`${Theme.color.pix}`}
          color={`${Theme.color.gray_10}`}
          width={width < 768 ? "80%" : "30%"}
          height="auto"
          content=""
          style={{ alignSelf: "center", marginTop: width < 768 ? "5%" : "2%" }}
          onClick={handleClick}
        >
          Clique aqui para <br />
          <strong>
            <h4>Gerar Pix Copia e Cola</h4>
          </strong>
        </GlobalButton>
        {QrCode ? (
          <>
            <br />
            <Pix src="/Checkout/QrCode.svg" width={800} height={800} alt="" />
            <GlobalButton
              content="Finalizar"
              background={`${Theme.color.confirmation}`}
              color={`${Theme.color.gray_10}`}
              width={width < 768 ? "80%" : "30%"}
              style={{
                alignSelf: "center",
                marginTop: width < 768 ? "5%" : "2%",
              }}
              onClick={() => router.push("/profile")}
            />
          </>
        ) : (
          <></>
        )}
        <Video />
      </>
    </Container>
  );
}
