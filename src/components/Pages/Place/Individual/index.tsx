// @ts-ignore
import moment from "moment";
import "moment/locale/pt-br";
import { Calendar } from "@/components/Global/Calendar";
import { Container, Dets, Icons, Text } from "./styles";
import Theme from "@/styles/themes";
import { useState, useEffect } from "react";

interface IndividualProps {
  date: Date;
  address: string;
  city: any;
  openTime: any;
}
export function Individual({ date, address, city, openTime }: IndividualProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [test, setTest] = useState<any>();
  const [loading, setLoading] = useState(true);

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
          setTest(currentOpenTime);
          setIsOpen(true);
          setLoading(false);
        }
      }
    }

    formatTime();
  }, []);

  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
          <Dets gap={2}>
            <Text>
              <Icons
                src="/Global/Icons/Clock.svg"
                width={20}
                height={20}
                alt=""
              />{" "}
              {""}
              <strong
                style={{
                  color: isOpen
                    ? `${Theme.color.next}`
                    : `${Theme.color.red_60}`,
                }}
              >
                {isOpen ? "Aberto" : "Fechado"}
              </strong>{" "}
              {""} Das {""}
              {test.open_time} {""} até {""}
              {test.close_time}
            </Text>
            <Text>
              <Icons
                src="/Global/Icons/LocationPin.svg"
                width={20}
                height={20}
                alt=""
              />{" "}
              {""}
              <strong>{address}</strong> {""} {city.name} - {city.state}
            </Text>
          </Dets>
          <Calendar date={date} />
        </>
      )}
    </Container>
  );
}
