// @ts-ignore
import moment from "moment";
import { Calendar } from "@/components/Global/Calendar";
import { Container, Dets, Icons, Text } from "./styles";

interface IndividualProps {
  date: Date;
  place: string;
  city: string;
}
moment.locale("pt-br");
export function Individual({ date, place, city }: IndividualProps) {
  return (
    <Container>
      <Dets gap={2}>
        <Text>
          <Icons src="/Global/Icons/Clock.svg" width={20} height={20} alt="" />{" "}
          {""}
          <strong>{moment(date).format("LL")}</strong> {""} às {""}
          {moment(date).format("LT")}
        </Text>
        <Text>
          <Icons
            src="/Global/Icons/LocationPin.svg"
            width={20}
            height={20}
            alt=""
          />{" "}
          {""}
          <strong>{place}</strong> {""} {city}
        </Text>
      </Dets>
      <Calendar date={date} />
    </Container>
  );
}
