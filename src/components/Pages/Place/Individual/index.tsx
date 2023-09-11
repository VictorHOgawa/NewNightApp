// @ts-ignore
import { Calendar } from "@/components/Global/Calendar";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import { Container, Dets, Icons, Text } from "./styles";

interface IndividualProps {
  place: any;
}
export function Individual({ place }: IndividualProps) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [startHour, setStartHour] = useState<any>();
  const [endHour, setEndHour] = useState<any>();

  useEffect(() => {
    function formatTime() {
      const currentDay = parseInt(moment().format("d")) - 1;
      const currentTime = moment().format("HH:mm");

      const currentOpenTime = place.openTime.find((day: any) => {
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
          setIsOpen(true);
        }
        setStartHour(currentOpenTime.open_time);
        setEndHour(currentOpenTime.close_time);
      }
    }

    if (place) {
      formatTime();
    }
  }, [place]);

  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Dets gap={2}>
            <Text>
              <Icons
                src="/Global/Icons/Clock.svg"
                width={20}
                height={20}
                alt=""
              />{" "}
              {""}
              {isOpen ? (
                <>
                  <strong>{isOpen ? "Aberto" : "Fechado"}</strong> {""} Das {""}
                  {startHour} {""} até {""}
                  {endHour}
                </>
              ) : (
                <>
                  <strong>Horário de Funcionamento</strong> {""} {startHour}{" "}
                  {""} até {""} {endHour}
                </>
              )}
            </Text>
            <Text>
              <Icons
                src="/Global/Icons/LocationPin.svg"
                width={20}
                height={20}
                alt=""
              />{" "}
              {""}
              <strong>{place.address}</strong> {""} {place.city.name} -{" "}
              {place.city.state}
            </Text>
          </Dets>
          <Calendar date={place.date} type="place" isOpen={isOpen} />
        </>
      )}
    </Container>
  );
}
