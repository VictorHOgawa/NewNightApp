import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";

interface ImportantProps {
  important: string;
}
export function Important({ important }: ImportantProps) {
  return (
    <Container>
      <GlobalTitle title="Importante" />
      {important}
    </Container>
  );
}
