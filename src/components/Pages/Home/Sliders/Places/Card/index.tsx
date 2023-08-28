import { useRouter } from "next/router";
import {
  Container,
  PlaceCurrent,
  PlacePlace,
  PlaceTitle,
  SliderImg,
} from "./styles";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";

interface PlaceProps {
  photo: string;
  name: string;
  city: any;
  id: string;
  openTime: any;
}
export function Card({ photo, name, city, id, openTime }: PlaceProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function formatTime() {
      const currentDay = parseInt(moment().format("d")) - 1;
      const currentTime = moment().format("HH:mm");

      const currentOpenTime = openTime.find((day: any) => {
        return day.day === currentDay;
      });

      if (currentOpenTime) {
        if (
          moment(currentTime, "HH:mm").isSameOrAfter(
            moment(currentOpenTime.open_time, "HH:mm")
          ) &&
          moment(currentTime, "HH:mm").isSameOrBefore(
            moment(currentOpenTime.close_time, "HH:mm")
          )
        ) {
          console.log("hora aberta");
          setIsOpen(true);
        }
      }
    }

    formatTime();
  }, []);

  return (
    <Container onClick={() => router.push(`/place/${id}`)}>
      <SliderImg src={photo} width={400} height={200} alt="" />
      <PlaceCurrent current={isOpen}>
        {isOpen ? "Aberto" : "Fechado"}
      </PlaceCurrent>
      <PlaceTitle>{name}</PlaceTitle>
      <PlacePlace>
        {city.name} - {city.state}
      </PlacePlace>
    </Container>
  );
}
