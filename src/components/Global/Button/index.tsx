import { Container } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  background: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
}

export function GlobalButton({
  content,
  background,
  color,
  disabled = false,
  loading = false,
  width = "10vw",
  height = "5vh",
  fontSize,
  ...rest
}: ButtonProps) {
  return (
    <Container
      width={width}
      height={height}
      color={color}
      background={background}
      fontSize={fontSize}
      {...rest}
    >
      {content}
    </Container>
  );
}
