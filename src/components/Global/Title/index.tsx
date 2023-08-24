import { Container, Text } from "./styles";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  marginTop?: any;
  marginLeft?: any;
  fontSize?: number;
  background?: string;
}

export function GlobalTitle({
  title,
  marginTop,
  marginLeft,
  fontSize,
  background,
  ...rest
}: TitleProps) {
  return (
    <Container
      marginTop={marginTop}
      marginLeft={marginLeft}
      background={background}
      {...rest}
    >
      <Text fontSize={fontSize} {...rest}>
        {title}
      </Text>
    </Container>
  );
}
