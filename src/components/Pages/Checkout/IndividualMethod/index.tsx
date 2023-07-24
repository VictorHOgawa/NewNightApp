import { Container } from "./styles";
import { PixMethod } from "./Pix";
import { CardMethod } from "./Cards";
import { PromoterMethod } from "./Promoter";

interface IndividualMethodProps {
  selected: string;
}
export function IndividualMethod({ selected }: IndividualMethodProps) {
  return (
    <Container>
      {selected === "Pix" ? (
        <PixMethod />
      ) : selected === "Card" ? (
        <CardMethod />
      ) : (
        <PromoterMethod />
      )}
    </Container>
  );
}
