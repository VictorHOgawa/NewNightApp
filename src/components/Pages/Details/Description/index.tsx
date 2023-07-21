import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";

interface DescriptionProps {
  description: string;
}
export function Description({ description }: DescriptionProps) {
  return (
    <Container>
      <GlobalTitle title="Descrição" />
      {description}
    </Container>
  );
}
