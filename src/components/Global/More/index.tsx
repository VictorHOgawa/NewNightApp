import { Modal } from "react-bootstrap";
import { StaticImage } from "../StaticImg";
import { Container } from "./styles";
import { useState } from "react";
import { GlobalTitle } from "../Title";
import Theme from "@/styles/themes";
import { GlobalButton } from "../Button";

interface MoreProps {
  type: string;
}

export function More({ type, ...rest }: MoreProps) {
  const [open, setOpen] = useState(false);
  return (
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
          {/* {type === "ticket"
            ? "ticket"
            : type === "product"
            ? "product"
            : type === "portaria"
            ? "portaria"
            : type === "promoter"
            ? "promoter"
            : ""} */}
          <GlobalTitle title="Insira o Código" style={{ marginTop: "5%" }} />
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
            onClick={() => setOpen(false)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
