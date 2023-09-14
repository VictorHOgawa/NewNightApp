import { Modal, Stack } from "react-bootstrap";
import { StaticImage } from "../StaticImg";
import { Container, Display, Text } from "./styles";
import { useState } from "react";
import { GlobalTitle } from "../Title";
import Theme from "@/styles/themes";
import { GlobalButton } from "../Button";
import { AuthPostAPI, authGetAPI, getAPI } from "@/lib/axios";
import { useRouter } from "next/router";

interface MoreProps {
  type: string;
  handleClick?: any;
  portariaCode?: any;
  setPortariaCode?: any;
}

export function More({
  type,
  handleClick,
  portariaCode,
  setPortariaCode,
  ...rest
}: MoreProps) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [code, setCode] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [step, setStep] = useState(1);
  const [promoter, setPromoter] = useState<any>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const handleOpen = () => {
    setSelected("1");
    setOpen1(true);
  };

  const handleOpen2 = () => {
    setSelected("2");
    setOpen2(true);
  };

  async function sendCode() {
    setLoading(true);
    const connect = await AuthPostAPI(`/user/${type}/${code}`, {});
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setCode("");
    router.reload();
    return setLoading(false);
  }

  async function handleCourtesy() {
    setLoading1(true);
    const connect = await AuthPostAPI(`/user/courtesy/${code}`, {});
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading1(false);
    }
    setCode("");
    router.reload();
    return setLoading1(false);
  }

  async function handlePromoter() {
    setLoading2(true);
    const connect = await getAPI(`/promoter/${code}`);
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading2(false);
    }
    setPromoter(connect.body);
    setStep(2);
    return setLoading2(false);
  }

  async function handleSend() {
    setLoading3(true);
    const connect = await AuthPostAPI(`/user/promoter/${code}`, {
      code: promoCode,
    });
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading3(false);
    }
    router.reload();
    return setLoading3(false);
  }

  return (
    <>
      {type === "ticket" || type === "product" ? (
        <>
          <Container {...rest} onClick={() => setOpen(true)}>
            <StaticImage src="/Global/Plus.svg" width={50} height={50} alt="" />
          </Container>
          <Modal show={open} onHide={() => setOpen(false)} centered>
            <Modal.Body
              style={{
                display: "flex",
                flexDirection: "column",
                background: `${Theme.color.primary_40}`,
                paddingTop: "10% 5%",
              }}
            >
              <GlobalTitle title="Selecione " style={{ marginTop: "5%" }} />
              <Stack
                direction="horizontal"
                style={{ justifyContent: "space-evenly" }}
              >
                <GlobalButton
                  content="Transferência"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.secondary_100}`}
                  width="45%"
                  height="auto"
                  style={{ alignSelf: "center", marginTop: "5%" }}
                  onClick={handleOpen}
                />
                {type === "ticket" ? (
                  <GlobalButton
                    content="Cortesia"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    width="45%"
                    height="auto"
                    style={{ alignSelf: "center", marginTop: "5%" }}
                    onClick={handleOpen2}
                  />
                ) : (
                  <></>
                )}
              </Stack>
              <GlobalButton
                content="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                width="auto"
                height="auto"
                onClick={() => setOpen(false)}
                style={{ alignSelf: "center", marginTop: "5%" }}
              />
            </Modal.Body>
          </Modal>
          {selected === "1" ? (
            <>
              <Modal show={open1} onHide={() => setOpen1(false)} centered>
                <Modal.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: `${Theme.color.primary_40}`,
                    paddingTop: "10% 5%",
                  }}
                >
                  <GlobalTitle
                    title="Insira o Código"
                    style={{ marginTop: "5%" }}
                  />
                  <input
                    style={{
                      background: `${Theme.color.secondary_100}`,
                      border: 0,
                      borderRadius: 10,
                      color: `${Theme.color.gray_10}`,
                      width: "90%",
                      alignSelf: "center",
                      marginTop: "5%",
                      padding: "2%",
                    }}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="EX: Carol20"
                  />
                  <GlobalButton
                    content="Confirmar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    width="auto"
                    height="auto"
                    style={{ alignSelf: "center", marginTop: "5%" }}
                    onClick={sendCode}
                    loading={loading}
                  />
                  <GlobalButton
                    content="Voltar"
                    background={Theme.color.primary_80}
                    color={Theme.color.gray_10}
                    width="auto"
                    height="auto"
                    onClick={() => setOpen1(false)}
                    style={{ alignSelf: "center", marginTop: "5%" }}
                  />
                </Modal.Body>
              </Modal>
            </>
          ) : (
            <>
              <Modal show={open2} onHide={() => setOpen2(false)} centered>
                <Modal.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: `${Theme.color.primary_40}`,
                    paddingTop: "10% 5%",
                  }}
                >
                  <GlobalTitle
                    title="Insira o Código"
                    style={{ marginTop: "5%" }}
                  />
                  <input
                    style={{
                      background: `${Theme.color.secondary_100}`,
                      border: 0,
                      borderRadius: 10,
                      color: `${Theme.color.gray_10}`,
                      width: "90%",
                      alignSelf: "center",
                      marginTop: "5%",
                      padding: "2%",
                    }}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="EX: Carol20"
                  />
                  <GlobalButton
                    content="Confirmar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    width="auto"
                    height="auto"
                    style={{ alignSelf: "center", marginTop: "5%" }}
                    onClick={handleCourtesy}
                    loading={loading1}
                  />
                  <GlobalButton
                    content="Voltar"
                    background={Theme.color.primary_80}
                    color={Theme.color.gray_10}
                    width="auto"
                    height="auto"
                    onClick={() => setOpen2(false)}
                    style={{ alignSelf: "center", marginTop: "5%" }}
                  />
                </Modal.Body>
              </Modal>
            </>
          )}
        </>
      ) : type === "portaria" ? (
        <>
          <Container {...rest} onClick={() => setOpen3(true)}>
            <StaticImage src="/Global/Plus.svg" width={50} height={50} alt="" />
          </Container>
          <Modal show={open3} onHide={() => setOpen3(false)} centered>
            <Modal.Body
              style={{
                display: "flex",
                flexDirection: "column",
                background: `${Theme.color.primary_40}`,
                paddingTop: "10% 5%",
              }}
            >
              <GlobalTitle
                title="Insira o Código"
                style={{ marginTop: "5%" }}
              />
              <input
                style={{
                  background: `${Theme.color.secondary_100}`,
                  border: 0,
                  borderRadius: 10,
                  color: `${Theme.color.gray_10}`,
                  width: "90%",
                  alignSelf: "center",
                  marginTop: "5%",
                  padding: "2%",
                }}
                value={portariaCode}
                onChange={(e) => setPortariaCode(e.target.value)}
                placeholder="EX: Carol20"
              />
              <GlobalButton
                content="Confirmar"
                background={`${Theme.color.confirmation}`}
                color={`${Theme.color.secondary_100}`}
                width="auto"
                height="auto"
                style={{ alignSelf: "center", marginTop: "5%" }}
                onClick={handleClick}
              />
              <GlobalButton
                content="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                width="auto"
                height="auto"
                onClick={() => setOpen3(false)}
                style={{ alignSelf: "center", marginTop: "5%" }}
              />
            </Modal.Body>
          </Modal>
        </>
      ) : type === "promoter" ? (
        <>
          <Container {...rest} onClick={() => setOpen4(true)}>
            <StaticImage src="/Global/Plus.svg" width={50} height={50} alt="" />
          </Container>
          <Modal show={open4} onHide={() => setOpen4(false)} centered>
            <Modal.Body
              style={{
                display: "flex",
                flexDirection: "column",
                background: Theme.color.primary_20,
                borderRadius: 5,
                paddingTop: "10%",
              }}
            >
              {step === 1 ? (
                <>
                  <GlobalTitle
                    title="Código de Registro"
                    color={Theme.color.gray_10}
                    background={Theme.color.background}
                  />
                  <input
                    style={{
                      background: `${Theme.color.secondary_100}`,
                      border: 0,
                      borderRadius: 10,
                      color: `${Theme.color.gray_10}`,
                      width: "100%",
                      alignSelf: "center",
                      marginTop: "5%",
                      padding: "2px 10px",
                    }}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="EX: Carol20"
                  />
                  <GlobalButton
                    content="Buscar"
                    background={Theme.color.confirmation}
                    color={Theme.color.background}
                    width="auto"
                    height="auto"
                    style={{ marginTop: "5%" }}
                    onClick={handlePromoter}
                    loading={loading2}
                  />
                </>
              ) : (
                <>
                  <GlobalTitle
                    title="Benefício do Seu Cupom"
                    color={Theme.color.gray_10}
                    background={Theme.color.background}
                  />
                  <Stack
                    direction="horizontal"
                    style={{
                      justifyContent: "space-between",
                      marginTop: "2%",
                      alignItems: "center",
                    }}
                  >
                    <Text>Quantidade Disponível: </Text>
                    <Display>{promoter.promoter.coupon_quantity}</Display>
                  </Stack>
                  <Stack
                    direction="horizontal"
                    style={{
                      justifyContent: "space-between",
                      marginTop: "2%",
                      alignItems: "center",
                    }}
                  >
                    <Text>Desconto Disponível: </Text>
                    <Display>{promoter.promoter.discount}</Display>
                  </Stack>
                  {/* <Stack
                    direction="horizontal"
                    style={{
                      justifyContent: "space-between",
                      marginTop: "2%",
                      alignItems: "center",
                    }}
                  >
                    <Text>Data de Expiração: </Text>
                    <Display>test</Display>
                  </Stack> */}
                  <br />
                  <br />
                  <GlobalTitle
                    title="Insira o Código que Desejar"
                    color={Theme.color.gray_10}
                    background={Theme.color.background}
                  />
                  <input
                    style={{
                      background: `${Theme.color.secondary_100}`,
                      border: 0,
                      borderRadius: 10,
                      color: `${Theme.color.gray_10}`,
                      width: "100%",
                      alignSelf: "center",
                      marginTop: "5%",
                      padding: "2px 10px",
                    }}
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="EX: Carol20"
                  />
                  <GlobalButton
                    content="Salvar e Seguir"
                    background={Theme.color.confirmation}
                    color={Theme.color.background}
                    width="auto"
                    height="auto"
                    style={{ marginTop: "20%" }}
                    loading={loading3}
                    onClick={handleSend}
                  />
                </>
              )}
              <GlobalButton
                content="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                width="auto"
                height="auto"
                onClick={() => setOpen4(false)}
                style={{ alignSelf: "center", marginTop: "5%" }}
              />
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
