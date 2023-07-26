import { GlobalButton } from "@/components/Global/Button";
import { Container, Pix } from "./styles";
import { useState } from "react";
import Theme from "@/styles/themes";
import { Video } from "../../Video";
import { useRouter } from "next/router";

export function PixMethod() {
  const router = useRouter();
  const [QrCode, setQrCode] = useState(false);
  const handleClick = () => {
    setQrCode(true);
  };
  return (
    <Container>
      <>
        <GlobalButton
          background={`${Theme.color.pix}`}
          color={`${Theme.color.gray_10}`}
          width="80%"
          height="auto"
          content=""
          style={{ alignSelf: "center", marginTop: "5%" }}
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
              width="50%"
              style={{ alignSelf: "center", marginTop: "5%" }}
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
