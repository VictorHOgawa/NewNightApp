import { Container, Text } from "./styles";

interface TitleProps {
  title: string;
  marginTop?: any;
}

export function GlobalTitle({ title, marginTop, ...rest }: TitleProps) {
  return (
    <Container marginTop={marginTop} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
