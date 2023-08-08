import { Container, Icon } from "./styles";

export function Learn() {
  return (
    <Container>
      <a
        style={{
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          textDecoration: "none",
          color: "white",
        }}
        href="https://www.youtube.com/embed/enYuqLBiisw"
        target="_blank"
        rel="noreferrer"
      >
        <Icon src="/Checkout/Video.svg" width={20} height={20} alt="" />
        {""} Conhecer Como Funciona o NightMatch
      </a>
    </Container>
  );
}
