import { GlobalButton } from "@/components/Global/Button";
import { Container, Pix } from "./styles";
import { useState } from "react";
import Theme from "@/styles/themes";
import { Video } from "../../Video";

export function PixMethod() {
  const [pix, setPix] = useState(false);
  const handleClick = () => {
    setPix(true);
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
        {pix ? (
          <>
            <br />
            <Pix
              src="/Purchased/Products.svg"
              width={800}
              height={800}
              alt=""
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
