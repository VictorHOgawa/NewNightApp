import { Calendar } from "@/components/Global/Calendar";
import { Container, Dets, Icons, Specific } from "./styles";

interface IndividualProps {
  date: string;
  place: string;
  weekDay: string;
  day: string;
  month: string;
}

export function Individual({
  date,
  place,
  weekDay,
  day,
  month,
}: IndividualProps) {
  return (
    <Container>
      <Dets gap={2}>
        <Specific>
          <Icons src="/Global/Icons/Clock.svg" width={20} height={20} alt="" />
          {date}
        </Specific>
        <Specific>
          <Icons
            src="/Global/Icons/LocationPin.svg"
            width={20}
            height={20}
            alt=""
          />
          {place}
        </Specific>
      </Dets>
      <Calendar weekDay={weekDay} day={day} month={month} />
    </Container>
  );
}
