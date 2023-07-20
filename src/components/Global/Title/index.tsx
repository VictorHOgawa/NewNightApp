import { Container, Text } from "./styles";

interface TitleProps {
  title: string;
  marginTop?: any;
}

export function GlobalTitle({ title, marginTop }: TitleProps) {
  return (
    <Container marginTop={marginTop}>
      <Text>{title}</Text>
    </Container>
  );
}
