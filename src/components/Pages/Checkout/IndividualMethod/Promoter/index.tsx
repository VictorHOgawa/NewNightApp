import { GlobalTitle } from "@/components/Global/Title";
import { Container, Content } from "./styles";
import Theme from "@/styles/themes";
import { GlobalButton } from "@/components/Global/Button";

export function PromoterMethod() {
  return (
    <Container>
      <GlobalTitle title="Entenda o Promoter NightApp" />
      <Content>
        Você terá a Cortesia assim que o Responsável pela Festa liberal.
      </Content>
      <br />
      <GlobalButton
        content="Finalizar e Aguardar"
        background={`${Theme.color.confirmation}`}
        color={`${Theme.color.background}`}
        width="90%"
        style={{ alignSelf: "center" }}
      />
    </Container>
  );
}
