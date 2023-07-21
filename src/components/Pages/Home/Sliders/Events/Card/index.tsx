import moment from "moment";
import { useState, useEffect } from "react";
import {
  Container,
  EventBody,
  EventFooter,
  EventPlace,
  EventTitle,
  SliderImg,
} from "./styles";
import { ConvertHour } from "@/utils/convertHour";
import { days } from "@/utils/days";
import { Calendar } from "@/components/Global/Calendar";

// interface Props extends React.HTMLProps<HTMLButtonElement> {
//   event: {
//     _id: string;
//     name: string;
//     address: string;
//     photo: {
//       key: string;
//       location: string;
//     };
//     date: {
//       date: Date;
//       time: string;
//     };
//     city: {
//       name: string;
//       state: string;
//     };
//     openTime: {
//       startTime: string;
//       endTime: string;
//       days: [];
//     };
//   };
//   type: string;
//   active: boolean;
// }

interface Props {
  location: string;
  name: string;
  place: string;
  weekDay: string;
  day: string;
  month: string;
}

export function Card(
  /* { event, type, active, ...rest }: Props */ {
    location,
    name,
    place,
    weekDay,
    day,
    month,
    ...rest
  }: Props
) {
  //   const [weekDay, setWeekDay] = useState("");
  //   const [open, setOpen] = useState(false);
  //   const [start, setStart] = useState("");
  //   const [end, setEnd] = useState("");

  const Events = [
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
  ];

  /*   function formatDate() {
    if (event.date) {
      const day = moment(event.date.date).day();
      setWeekDay(days[day]);
    }
  }

  useEffect(() => {
    if (type === "event") {
      formatDate();
    }
  }, []);

  useEffect(() => {
    function formatDate() {
      let open = false;
      const time = event.openTime;
      const weekDay = moment().day();

      const today = moment().format("hh:mm");
      const finalToday = ConvertHour(today);

      const start = time.startTime;
      const finalStart = ConvertHour(start);

      const end = time.endTime;
      let finalEnd = ConvertHour(end);

      for (let i = 0; i < time.days.length; i++) {
        if (time.days[i] === weekDay) {
          open = true;
          i = time.days.length;
        }
      }

      const midnight = 0;
      const morning = 7;
      if (finalEnd >= midnight && finalEnd < morning) {
        finalEnd += 24;
      }

      if (finalToday >= finalStart && finalToday < finalEnd) {
        open = true;
      } else {
        open = false;
      }
      setOpen(open);
      setStart(start);
      setEnd(end);
    }

    if (type === "restaurant" && event.openTime) {
      formatDate();
    }
  }, [type]); */
  return (
    <Container /* {...rest} */>
      <SliderImg src={location} width={400} height={200} alt="" />
      <EventBody>
        <EventTitle>{name}</EventTitle>
        <EventFooter>
          <EventPlace>{place}</EventPlace>
          <Calendar day={day} month={month} weekDay={weekDay} />
        </EventFooter>
      </EventBody>
    </Container>
  );
}
