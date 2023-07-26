import { Container, Text } from "./styles";

interface TitleProps {
  title: string;
  marginTop?: any;
  marginLeft?: any;
  fontSize?: number;
}

export function GlobalTitle({
  title,
  marginTop,
  marginLeft,
  fontSize,
  ...rest
}: TitleProps) {
  return (
    <Container marginTop={marginTop} marginLeft={marginLeft} {...rest}>
      <Text fontSize={fontSize}>{title}</Text>
    </Container>
  );
}
