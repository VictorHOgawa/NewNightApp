import { GlobalButton } from "@/components/Global/Button";
import { Container } from "./styles";
import Theme from "@/styles/themes";
import { Stack } from "react-bootstrap";
import { Tabs } from "@/components/Global/Tabs";
import { Back } from "@/components/Global/Back";

export function Register() {
  return (
    <Container>
      <Stack gap={3} direction="horizontal" style={{ marginLeft: "4%" }}>
        <Tabs style={{ background: "red" }} active={true} />
        <Tabs active={false} />
        <Tabs active={false} />
      </Stack>
      <GlobalButton
        content="Salvar e Seguir"
        background={`${Theme.color.confirmation}`}
        color={`${Theme.color.background}`}
        width="90%"
        height="auto"
      />
    </Container>
  );
}
