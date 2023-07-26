import { Container } from "./styles";
import { PixMethod } from "./Pix";
import { CardMethod } from "./Cards";

interface IndividualMethodProps {
  selected: string;
}
export function IndividualMethod({ selected }: IndividualMethodProps) {
  return (
    <Container>{selected === "Pix" ? <PixMethod /> : <CardMethod />}</Container>
  );
}
