// @ts-ignore
import moment from "moment";
import "moment/locale/pt-br";
import { Container, Date, Footer, Main } from "./styles";
import { useEffect, useState } from "react";
interface CalendarProps {
  date: Date;
}
export function Calendar({ date }: CalendarProps) {
  useEffect(() => {}, []);

  return (
    <Container>
      <Main>
        <Date>{moment(date).format("ddd")}</Date>
        <Date>{moment(date).format("D")}</Date>
        <Footer>
          <Date>{moment(date).format("MMM")}</Date>
        </Footer>
      </Main>
    </Container>
  );
}
