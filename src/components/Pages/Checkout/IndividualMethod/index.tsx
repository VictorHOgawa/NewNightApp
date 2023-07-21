import { GlobalButton } from "@/components/Global/Button";
import { Container, Icon } from "./styles";
import Theme from "@/styles/themes";
import { Video } from "../Video";
import { Stack } from "react-bootstrap";

interface IndividualMethodProps {
  selected: string;
}
export function IndividualMethod({ selected }: IndividualMethodProps) {
  return (
    <Container>
      {selected === "Pix" ? (
        <>
          <GlobalButton
            background={`${Theme.color.pix}`}
            color={`${Theme.color.gray_10}`}
            width="80%"
            height="auto"
            content=""
            style={{ alignSelf: "center", marginTop: "5%" }}
          >
            Clique aqui para <br />
            <strong>
              <h4>Gerar Pix Copia e Cola</h4>
            </strong>
          </GlobalButton>
          <Video />
        </>
      ) : selected === "Card" ? (
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
          >
            <Icon src="/Checkout/Add.svg" width={20} height={20} alt="" />
            Pagar com Outro Cartão
          </GlobalButton>
        </Stack>
      ) : (
        "Promoter"
      )}
    </Container>
  );
}
