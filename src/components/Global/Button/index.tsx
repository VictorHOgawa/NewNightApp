import { Spinner } from "react-bootstrap";
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
  children?: React.ReactNode;
  ref?: any;
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
  children,
  ref,
  ...rest
}: ButtonProps) {
  return (
    <Container
      width={width}
      height={height}
      color={color}
      background={background}
      fontSize={fontSize}
      disabled={loading || disabled}
      loading={loading}
      ref={ref}
      {...rest}
    >
      {loading ? <Spinner animation="border" size="sm" /> : content} {""}
      {children}
    </Container>
  );
}
