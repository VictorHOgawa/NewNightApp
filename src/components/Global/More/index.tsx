import { StaticImage } from "../StaticImg";
import { Container } from "./styles";

export function More({ ...rest }) {
  return (
    <Container {...rest}>
      <StaticImage src="/Global/Plus.svg" width={50} height={50} alt="" />
    </Container>
  );
}
