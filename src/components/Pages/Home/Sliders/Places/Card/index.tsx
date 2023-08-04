import { useRouter } from "next/router";
import {
  Container,
  PlaceCurrent,
  PlacePlace,
  PlaceTitle,
  SliderImg,
} from "./styles";

interface Props {
  location: string;
  name: string;
  place: string;
  current: boolean;
}
export function Card({ location, name, place, current }: Props) {
  const router = useRouter();
  return (
    <Container onClick={() => router.push("/place")}>
      <SliderImg src={location} width={400} height={200} alt="" />
      <PlaceCurrent current={current}>
        {current ? "Aberto" : "Fechado"}
      </PlaceCurrent>
      <PlaceTitle>{name}</PlaceTitle>
      <PlacePlace>{place}</PlacePlace>
    </Container>
  );
}
