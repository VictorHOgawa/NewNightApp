import { Button, Container, Icon } from "./styles";

export function Video() {
  return (
    <Container>
      <Button>
        <Icon src="/Checkout/Video.svg" width={20} height={20} alt="" />{" "}
        Dúvidas? Veja esse Rápido Vídeo
      </Button>
    </Container>
  );
}
