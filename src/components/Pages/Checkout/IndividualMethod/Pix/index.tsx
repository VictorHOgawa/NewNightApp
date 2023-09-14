import { GlobalButton } from "@/components/Global/Button";
import { GlobalTitle } from "@/components/Global/Title";
import { useCart } from "@/context/cart";
import { AuthPostAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Video } from "../../Video";
import { Form } from "../Cards/styles";
import { Container, Copy, Pix } from "./styles";
import { Overlay, Spinner, Stack, Tooltip } from "react-bootstrap";

interface PixProps {
  coupon: string;
  setCoupon: any;
  AddCoupon: any;
  loadingCoupon: boolean;
}

export function PixMethod({
  coupon,
  setCoupon,
  AddCoupon,
  loadingCoupon,
}: PixProps) {
  const { cart, setCart } = useCart();
  const router = useRouter();
  const [QrCode, setQrCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [pix, setPix] = useState<any>();
  const [width, setWidth] = useState(100);
  const target = useRef(null);
  const [show, setShow] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function getPix() {
    const connect = await AuthPostAPI("/purchase/pix", {
      ...cart,
      coupon: coupon,
    });
    if (connect.status !== 200) {
      alert(connect.body);
    }
    setPix(connect.body);
    return setLoading1(false);
  }

  const handleClick = () => {
    setQrCode(true);
    setLoading1(true);
    return getPix();
  };

  const handleCopy = () => {
    setShow(true);
    navigator.clipboard.writeText(pix.payload);
    setTimeout(() => setShow(false), 1000);
  };

  const handleFinish = () => {
    setLoading(true);
    router.push("/purchased");
    return setLoading(false);
  };

  return (
    <Container>
      <>
        <br />
        <GlobalTitle
          title="Código da Galera"
          fontSize={15}
          marginTop={width < 768 ? "10%" : "2%"}
          marginLeft={width < 768 ? "5%" : "35%"}
        />
        <Stack
          direction="horizontal"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Form
            placeholder="Insira o Melhor Código aqui"
            style={{
              width: "45%",
              height: "auto",
              fontSize: 12,
              marginLeft: width < 768 ? "5%" : "15%",
            }}
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <GlobalButton
            content="Aplicar Cupom"
            background={Theme.color.confirmation}
            color={Theme.color.background}
            width="auto"
            height="auto"
            fontSize={12}
            onClick={AddCoupon}
            loading={loadingCoupon}
            style={{
              marginRight: width < 768 ? "5%" : "15%",
            }}
          />
        </Stack>
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
            {loading1 ? (
              <>
                <Spinner
                  style={{ alignSelf: "center", marginTop: "5%" }}
                  animation="border"
                  variant="primary"
                />
              </>
            ) : (
              <>
                <br />
                <Pix
                  src={`data:image/png;base64, ${pix.encodedImage}`}
                  alt=""
                />

                <Copy ref={target} onClick={handleCopy}>
                  Copiar Código
                </Copy>
                <Overlay target={target.current} show={show} placement="bottom">
                  {(props) => <Tooltip {...props}>Código Copiado</Tooltip>}
                </Overlay>
                <GlobalButton
                  content="Finalizar"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.gray_10}`}
                  width={width < 768 ? "80%" : "auto"}
                  style={{
                    alignSelf: "center",
                    marginTop: width < 768 ? "5%" : "2%",
                  }}
                  loading={loading}
                  onClick={handleFinish}
                />
              </>
            )}
          </>
        ) : (
          <></>
        )}
        <Video />
      </>
    </Container>
  );
}
