import { Stack } from "react-bootstrap";
import { Container, Icon } from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { useState } from "react";
import { CardModal } from "./Modal";
export function CardMethod() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Stack>
        <GlobalButton
          background={`${Theme.color.secondary_100}`}
          color={`${Theme.color.gray_10}`}
          width="75%"
          height="auto"
          content=""
          style={{
            alignSelf: "center",
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
          XXXX XXXX XXXX 1234
        </GlobalButton>
        <GlobalButton
          background={`${Theme.color.primary_60}`}
          color={`${Theme.color.gray_10}`}
          width="75%"
          height="auto"
          content=""
          style={{
            alignSelf: "center",
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Icon src="/Checkout/Cards.svg" width={20} height={20} alt="" />
          XXXX XXXX XXXX 5678
        </GlobalButton>
        <br />
        <GlobalButton
          background={`${Theme.color.gray_10}`}
          color={`${Theme.color.background}`}
          width="75%"
          height="auto"
          content=""
          style={{
            alignSelf: "center",
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
          onClick={handleOpen}
        >
          <Icon src="/Checkout/Add.svg" width={20} height={20} alt="" />
          Pagar com Outro Cartão
        </GlobalButton>
      </Stack>
      <CardModal show={open} close={handleClose} />
    </Container>
  );
}
