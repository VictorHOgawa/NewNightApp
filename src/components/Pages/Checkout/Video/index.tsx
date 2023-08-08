import { Button, Container, Icon } from "./styles";

export function Video() {
  return (
    <Container>
      <a
        href="https://www.youtube.com/embed/enYuqLBiisw"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button>
          <Icon src="/Checkout/Video.svg" width={20} height={20} alt="" />{" "}
          Dúvidas? Veja esse Rápido Vídeo
        </Button>
      </a>
    </Container>
  );
}
