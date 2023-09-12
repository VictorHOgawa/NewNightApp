import { Modal, Stack } from "react-bootstrap";
import { StaticImage } from "../StaticImg";
import { Container } from "./styles";
import { useState } from "react";
import { GlobalTitle } from "../Title";
import Theme from "@/styles/themes";
import { GlobalButton } from "../Button";
import { AuthPostAPI } from "@/lib/axios";
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
  const [code, setCode] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
    router.reload();
    return setLoading(false);
  }

  console.log("type: ", type);

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
              <Stack direction="horizontal" gap={2}>
                <GlobalButton
                  content="teste"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.secondary_100}`}
                  width="60%"
                  height="auto"
                  style={{ alignSelf: "center", marginTop: "5%" }}
                  onClick={handleOpen}
                />
                <GlobalButton
                  content="2"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.secondary_100}`}
                  width="60%"
                  height="auto"
                  style={{ alignSelf: "center", marginTop: "5%" }}
                  onClick={handleOpen2}
                />
              </Stack>
              <GlobalButton
                content="Voltar"
                background={Theme.color.primary_80}
                color={Theme.color.gray_10}
                width="auto"
                height="auto"
                onClick={() => setOpen(false)}
                style={{ marginTop: "5%" }}
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
                    width="60%"
                    height="auto"
                    style={{ alignSelf: "center", marginTop: "5%" }}
                    onClick={sendCode}
                    loading={loading}
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
                    placeholder="EX: Carol20"
                  />
                  <GlobalButton
                    content="Confirmar"
                    background={`${Theme.color.confirmation}`}
                    color={`${Theme.color.secondary_100}`}
                    width="60%"
                    height="auto"
                    style={{ alignSelf: "center", marginTop: "5%" }}
                    onClick={() => setOpen2(false)}
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
                width="60%"
                height="auto"
                style={{ alignSelf: "center", marginTop: "5%" }}
                onClick={handleClick}
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
