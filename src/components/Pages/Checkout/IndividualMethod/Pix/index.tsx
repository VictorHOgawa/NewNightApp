import { GlobalButton } from "@/components/Global/Button";
import { GlobalTitle } from "@/components/Global/Title";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Video } from "../../Video";
import { Form } from "../Cards/styles";
import { Container, Pix } from "./styles";
import { useCart } from "@/context/cart";
import { AuthPostAPI } from "@/lib/axios";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";

export function PixMethod() {
  const router = useRouter();
  const [QrCode, setQrCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pix, setPix] = useState<any>();
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { cart } = useCart();
  async function getPix() {
    setLoading(true);
    const connect = await AuthPostAPI("/purchase/pix", { ...cart, coupon: "" });
    console.log("connect: ", connect);
    setPix(connect.body);
    return setLoading(false);
  }

  const handleClick = () => {
    setQrCode(true);
    getPix();
  };

  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
          <>
            <br />
            <GlobalTitle
              title="Código da Galera"
              fontSize={15}
              marginTop={width < 768 ? "10%" : "2%"}
              marginLeft={width < 768 ? "5%" : "35%"}
            />
            <Form
              placeholder="Insira o Melhor Código aqui"
              style={{
                width: width < 768 ? "90%" : "30%",
                alignSelf: "center",
              }}
            />
            {QrCode ? (
              <></>
            ) : (
              <>
                <GlobalButton
                  background={`${Theme.color.pix}`}
                  color={`${Theme.color.gray_10}`}
                  width={width < 768 ? "auto" : "auto"}
                  height="auto"
                  content=""
                  style={{
                    alignSelf: "center",
                    marginTop: width < 768 ? "5%" : "2%",
                  }}
                  onClick={handleClick}
                >
                  Clique aqui para <br />
                  <strong>
                    <h4>Gerar Pix Copia e Cola</h4>
                  </strong>
                </GlobalButton>
              </>
            )}
            {QrCode ? (
              <>
                <br />
                <Pix
                  src={`data:image/png;base64, ${pix.encodedImage}`}
                  alt=""
                />
                <GlobalButton
                  content="Copiar Código"
                  background={`${Theme.color.pix}`}
                  color={`${Theme.color.gray_10}`}
                  width="auto"
                  height="auto"
                  style={{
                    alignSelf: "center",
                    marginTop: "2%",
                  }}
                  onClick={() => navigator.clipboard.writeText(pix.payload)}
                />
                <GlobalButton
                  content="Finalizar"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.gray_10}`}
                  width={width < 768 ? "80%" : "auto"}
                  style={{
                    alignSelf: "center",
                    marginTop: width < 768 ? "5%" : "2%",
                  }}
                  onClick={() => router.push("/purchased")}
                />
              </>
            ) : (
              <></>
            )}
            <Video />
          </>
        </>
      )}
    </Container>
  );
}
