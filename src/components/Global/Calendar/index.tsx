import { Container, Date, Footer, Main } from "./styles";

interface CalendarProps {
  weekDay: string;
  day: string;
  month: string;
}
export function Calendar({ weekDay, day, month }: CalendarProps) {
  return (
    <Container>
      <Main>
        <Date>{weekDay}</Date>
        <Date>{day}</Date>
        <Footer>
          <Date>{month}</Date>
        </Footer>
      </Main>
    </Container>
  );
}
