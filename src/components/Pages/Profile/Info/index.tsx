import { GlobalTitle } from "@/components/Global/Title";
import { Container, NightPremium } from "./styles";
import { Stack } from "react-bootstrap";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";

export function Info() {
  return (
    <Container>
      <GlobalTitle title="Informações" />
      <br />
      <Stack gap={2}>
        <NightPremium src="/premium.svg" width={1000} height={400} alt="" />
        <GlobalButton
          background={`${Theme.color.primary_40}`}
          color={`${Theme.color.gray_10}`}
          width="100%"
          content="Dados de Cadastro"
        />
        <GlobalButton
          background={`${Theme.color.primary_40}`}
          color={`${Theme.color.gray_10}`}
          width="100%"
          content="Tutorial, Políticas, Termos e FAQ"
        />
        <GlobalButton
          background={`${Theme.color.primary_40}`}
          color={`${Theme.color.gray_10}`}
          width="100%"
          content="Sair"
        />
      </Stack>
    </Container>
  );
}
