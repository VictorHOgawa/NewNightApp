import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";

interface DescriptionProps {
  description: { name: string; description: string };
}
export function Description({ description }: DescriptionProps) {
  return (
    <Container>
      <GlobalTitle title={description.name} />
      {description.description}
    </Container>
  );
}
