// @ts-ignore
import moment from "moment";
import "moment/locale/pt-br";
import { Container, Date, Footer, Main } from "./styles";
import { useEffect, useState } from "react";
interface CalendarProps {
  date: Date;
  type: string;
  isOpen?: boolean;
}
export function Calendar({ date, type, isOpen }: CalendarProps) {
  return (
    <Container>
      {type === "event" ? (
        <>
          <Main>
            <Date>{moment(date).format("ddd")}</Date>
            <Date>{moment(date).format("D")}</Date>
            <Footer>
              <Date type="event">{moment(date).format("MMM")}</Date>
            </Footer>
          </Main>
        </>
      ) : (
        <>
          <Main>
            <Date>{moment(date).format("ddd")}</Date>
            <Date>{moment(date).format("D")}</Date>
            <Footer type="place" isOpen={isOpen}>
              <Date type="place" isOpen={isOpen}>
                {isOpen ? "Aberto" : "Fechado"}
              </Date>
            </Footer>
          </Main>
        </>
      )}
    </Container>
  );
}
