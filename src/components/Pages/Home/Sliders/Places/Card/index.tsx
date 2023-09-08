import { useRouter } from "next/router";
import {
  Container,
  PlaceAddress,
  PlaceBody,
  PlaceFooter,
  PlaceName,
  SliderImg,
} from "./styles";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { Calendar } from "@/components/Global/Calendar";

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
  const [startHour, setStartHour] = useState<any>();
  const [endHour, setEndHour] = useState<any>();

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
        setStartHour(currentOpenTime.open_time);
        setEndHour(currentOpenTime.close_time);
      }
    }

    if (openTime) {
      formatTime();
    }
  }, [openTime]);

  console.log("OpenTime.date: ", openTime.date);

  return (
    <Container onClick={() => router.push(`/place/${id}`)}>
      {/* <SliderImg src={photo} width={400} height={200} alt="" />
      <PlaceCurrent current={isOpen}>
        {isOpen ? "Aberto" : "Fechado"}
      </PlaceCurrent>
      <PlaceTitle>{name}</PlaceTitle>
      <PlacePlace>
        {city.name} - {city.state}
      </PlacePlace> */}
      <SliderImg src={photo} width={400} height={200} alt="" />
      <PlaceBody>
        <PlaceName>{name}</PlaceName>
        <PlaceFooter>
          <PlaceAddress>
            {city.name} - {city.state}
          </PlaceAddress>
          <Calendar date={openTime.date} type="place" isOpen={isOpen} />
        </PlaceFooter>
      </PlaceBody>
    </Container>
  );
}
