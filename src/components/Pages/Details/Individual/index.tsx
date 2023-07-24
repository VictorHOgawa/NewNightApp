// @ts-ignore
import moment from "moment";
import { Calendar } from "@/components/Global/Calendar";
import { Container, Dets, Icons, Specific } from "./styles";

interface IndividualProps {
  date: Date;
  place: string;
  city: string;
  weekDay: string;
  day: string;
  month: string;
}
moment.locale("pt-br");
export function Individual({
  date,
  place,
  city,
  weekDay,
  day,
  month,
}: IndividualProps) {
  return (
    <Container>
      <Dets gap={2}>
        <Specific>
          <Icons src="/Global/Icons/Clock.svg" width={20} height={20} alt="" />{" "}
          {""}
          <strong>{moment(date).format("LL")}</strong> {""} às {""}
          {moment(date).format("LT")}
        </Specific>
        <Specific>
          <Icons
            src="/Global/Icons/LocationPin.svg"
            width={20}
            height={20}
            alt=""
          />{" "}
          {""}
          <strong>{place}</strong> {""} {city}
        </Specific>
      </Dets>
      <Calendar date={date} />
    </Container>
  );
}
