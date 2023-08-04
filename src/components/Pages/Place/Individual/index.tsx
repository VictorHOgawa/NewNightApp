// @ts-ignore
import moment from "moment";
import "moment/locale/pt-br";
import { Calendar } from "@/components/Global/Calendar";
import { Container, Dets, Icons, Text } from "./styles";
import Theme from "@/styles/themes";

interface IndividualProps {
  open: boolean;
  date: Date;
  place: string;
  city: string;
}
moment.locale("pt-br");
export function Individual({ open, date, place, city }: IndividualProps) {
  return (
    <Container>
      <Dets gap={2}>
        <Text>
          <Icons src="/Global/Icons/Clock.svg" width={20} height={20} alt="" />{" "}
          {""}
          <strong
            style={{
              color: open ? `${Theme.color.next}` : `${Theme.color.red_60}`,
            }}
          >
            {open ? "Aberto" : "Fechado"}
          </strong>{" "}
          {""} Das {""}
          {moment(date).format("LT")} {""} até {""}
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
